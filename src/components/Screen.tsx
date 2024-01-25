import "./Screen.css"

type Props = {
  children: React.ReactNode
}

function Screen({ children }: Props) {
  return <div className="Screen">{children}</div>
}

export default Screen
