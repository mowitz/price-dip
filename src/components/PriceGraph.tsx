import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

import type { Price } from "../hooks/useTibberPrices"

type Props = {
  lowestPrice?: Price
  prices: Price[]
}

function PriceGraph({ lowestPrice, prices }: Props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart width={600} height={300} data={prices}>
        <CartesianGrid stroke="#444" strokeDasharray="2 2" />
        <XAxis
          axisLine={{ stroke: "#444" }}
          dataKey="startsAt"
          tick={{ fill: "#fff" }}
          tickFormatter={(startsAt) =>
            new Date(startsAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          }
          tickLine={{ stroke: "#444" }}
        />
        <YAxis
          axisLine={{ stroke: "#444" }}
          tick={{ fill: "#fff" }}
          tickLine={{ stroke: "#444" }}
        />
        {lowestPrice && (
          <ReferenceLine x={lowestPrice.startsAt} stroke="#fd29cc" />
        )}
        <Line
          type="monotone"
          dataKey="total"
          dot={false}
          stroke="#9bc984"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default PriceGraph
