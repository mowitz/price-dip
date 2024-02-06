import "./Screen.css"

type Props = {
  children: React.ReactNode
  error?: Error
  loading?: boolean
  title: string
}

function Screen({ children, error, loading, title }: Props) {
  const renderChildren = () => {
    if (!loading && error === undefined) {
      return children
    }

    return null
  }

  return (
    <div className="Screen">
      <h1>{title}</h1>
      {loading && <p>Loading..</p>}
      {error && <p>{error.message}</p>}
      {renderChildren()}
    </div>
  )
}

export default Screen
