import "./RangeSlider.css"

type Props = {
  range: [number, number]
  unit: string
  value: number
  onChange: (value: number) => void
}

function RangeSlider({ range, unit, value, onChange }: Props) {
  return (
    <div className="RangeSlider">
      {`${range[0]} ${unit}`}
      <input
        className="RangeSlider-slider"
        type="range"
        min={range[0]}
        max={range[1]}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      ></input>
      {`${range[1]} ${unit}`}
    </div>
  )
}

export default RangeSlider
