import "./Button.css"

type Props = {
  disabled?: boolean
  title: string
  onClick: () => void
}

function Button({ disabled, title, onClick }: Props) {
  return (
    <button className="Button" disabled={disabled} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
