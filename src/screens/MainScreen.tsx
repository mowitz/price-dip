import "./MainScreen.css"

import { useEffect, useMemo, useState } from "react"
import useTibberPrices, { Price } from "../hooks/useTibberPrices"
import { Link } from "react-router-dom"
import PriceGraph from "../components/PriceGraph"
import RangeSlider from "../components/input/RangeSlider"
import Screen from "../components/layout/Screen"
import { formatDateDifference } from "../util/time"

const DISHWASHER_KW = 1.2

function MainScreen() {
  const { loading, error, prices } = useTibberPrices()
  const [maxWaitHours, setMaxWaitHours] = useState(0)
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const handle = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(handle)
  }, [])

  const lowestPrice = useMemo(() => {
    if (maxWaitHours === 0) {
      return prices[0]
    }

    const waitUntil = new Date(now)
    waitUntil.setHours(waitUntil.getHours() + maxWaitHours)

    return prices.reduce<Price | undefined>((acc, curr) => {
      if (
        new Date(curr.startsAt) < waitUntil &&
        (!acc || curr.total < acc.total)
      ) {
        return curr
      }
      return acc
    }, undefined)
  }, [maxWaitHours, now, prices])

  const [timeUntilDip, savings, price] = useMemo(() => {
    if (!lowestPrice) {
      return ["-", "-", "-"]
    }

    return [
      formatDateDifference(new Date(lowestPrice.startsAt), now),
      ((prices[0].total - lowestPrice.total) * DISHWASHER_KW).toFixed(2),
      lowestPrice?.total.toFixed(2),
      [lowestPrice?.total],
    ]
  }, [lowestPrice, now, prices])

  return (
    <Screen error={error} loading={loading} title="Hitta nästa prisdipp">
      <p>Hur länge orkar du vänta?</p>
      <RangeSlider
        range={[0, prices.length - 1]}
        unit="h"
        value={maxWaitHours}
        onChange={(value) => setMaxWaitHours(value)}
      />
      <p>
        {`Närmsta prisdipp inom ${maxWaitHours} timmar inträffar om `}
        <strong>{timeUntilDip}</strong>
        {` timmar. Priset är då ${price} kr.`}
      </p>
      <h3>Spara</h3>
      <p>{`Du sparar ungefär ${savings} kr på att vänta med diskmaskinen.`}</p>
      <h3>Priskurvan</h3>
      <div className="MainScreen-graphContainer">
        <PriceGraph lowestPrice={lowestPrice} prices={prices} />
      </div>
      <h3>Övrigt</h3>
      <p>
        Hantera API nyckeln <Link to="login">här</Link>.
      </p>
    </Screen>
  )
}

export default MainScreen
