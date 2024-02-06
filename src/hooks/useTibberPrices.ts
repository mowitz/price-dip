import { GetTibberPricesPriceFragment } from "../generated/graphql"
import { gql } from "../generated/gql"
import { useMemo } from "react"
import { useQuery } from "@apollo/client"

gql(`
  fragment GetTibberPricesPrice on Price {
    total
    startsAt
  }
`)

const GET_TIBBER_PRICES = gql(`
  query GetTibberPrices {
    viewer {
      homes {
        currentSubscription {
          priceInfo {
            today {
              ...GetTibberPricesPrice
            }
            tomorrow {
              ...GetTibberPricesPrice
            }
          }
        }
      }
    }
  }
`)

export type Price = {
  __typename?: "Price" | undefined
  startsAt: string
  total: number
}

function useTibberPrices() {
  const { loading, error, data } = useQuery(GET_TIBBER_PRICES)

  const prices = useMemo(() => {
    if (loading || error) {
      return []
    }

    const now = new Date()
    now.setMinutes(0)
    now.setSeconds(0)
    now.setMilliseconds(0)

    const today =
      data?.viewer.homes[0]?.currentSubscription?.priceInfo?.today ?? []
    const tomorrow =
      data?.viewer.homes[0]?.currentSubscription?.priceInfo?.tomorrow ?? []
    const all = [...today, ...tomorrow]

    const isValidPrice = (
      price: GetTibberPricesPriceFragment | null,
    ): price is Price =>
      price !== null &&
      typeof price.total === "number" &&
      typeof price.startsAt === "string" &&
      new Date(price.startsAt) >= now

    return all.filter(isValidPrice)
  }, [data?.viewer.homes, error, loading])

  return { loading, error, prices }
}

export default useTibberPrices
