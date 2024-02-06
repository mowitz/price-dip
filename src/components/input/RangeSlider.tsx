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
      <p>{`${range[0]} ${unit}`}</p>
      <input
        className="RangeSlider-slider"
        type="range"
        min={range[0]}
        max={range[1]}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      ></input>
      <p>{`${range[1]} ${unit}`}</p>
    </div>
  )
}

export default RangeSlider
