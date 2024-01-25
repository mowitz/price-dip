import "./MainScreen.css"

import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import Screen from "../components/Screen"
import { gql } from "../generated/gql"
import { useQuery } from "@apollo/client"

const GET_TIBBER_PRICES = gql(`
  query GetTibberPrices {
    viewer {
      homes {
        currentSubscription {
          priceInfo {
            today {
              total
              startsAt
            }
            tomorrow {
              total
              startsAt
            }
          }
        }
      }
    }
  }
`)

function MainScreen() {
  const { loading, error, data } = useQuery(GET_TIBBER_PRICES)
  const [withinHours, setWithinHours] = useState(6)

  type PriceInfo2 = {
    startsAt: string
    total: number
  }

  const allPrices = useMemo<PriceInfo2[]>(() => {
    const now = new Date()

    const today =
      data?.viewer.homes[0]?.currentSubscription?.priceInfo?.today ?? []
    const tomorrow =
      data?.viewer.homes[0]?.currentSubscription?.priceInfo?.tomorrow ?? []

    return [...today, ...tomorrow].filter(
      (priceInfo) => priceInfo && priceInfo.startsAt && priceInfo.total && new Date(priceInfo.startsAt) > now,
    ) as PriceInfo2[]
  }, [data])

  const range = useMemo(() => [0, allPrices.length - 1], [allPrices.length])

  const lowestPrice = useMemo(
    () => {
      const now = new Date()
      const c = now.setHours(now.getHours() + withinHours);

      return allPrices.reduce<PriceInfo2 | null>((acc, curr) => {
        if (!acc && new Date(curr.startsAt) < new Date(c)) {
          return curr
        }

        if (curr?.total && acc?.total && curr?.total < acc?.total && new Date(curr.startsAt) < new Date(c)) {
          return curr
        }

        return acc
      }, null)},
    [allPrices, withinHours],
  )

  const timeToLowestPrice = useMemo(() => {
    if (!lowestPrice?.startsAt) {
      return "-"
    }

    const now = new Date()
    const lowest = new Date(lowestPrice.startsAt)

    return (lowest.getTime() - now.getTime()) / 1000 / 60 / 60
  }, [lowestPrice])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <Screen>
      <p>{`Find dip within ${withinHours} hours`}</p>
      <p>{range[0]}</p>
      <input
        type="range"
        min={range[0]}
        max={range[1]}
        value={withinHours}
        onChange={(e) => setWithinHours(Number(e.target.value))}
      ></input>
      <p>{range[1]}</p>

      {timeToLowestPrice && <p>{`Time to: ${timeToLowestPrice}`}</p>}
      {lowestPrice && <p>{`Lowest price: ${lowestPrice.total}`}</p>}
      {allPrices.map((price, index) => (
        <p
          key={index}
        >{`${new Date(price.startsAt).toLocaleTimeString()} - ${price.total}`}</p>
      ))}
      <Link to="login">login</Link>
    </Screen>
  )
}

export default MainScreen
