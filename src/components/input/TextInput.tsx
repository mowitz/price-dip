import "./TextInput.css"

type Props = {
  value: string
  onChange: (value: string) => void
}

function TextInput({ value, onChange }: Props) {
  return (
    <input
      className="TextInput"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></input>
  )
}

export default TextInput
