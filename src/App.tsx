import { useCallback, useMemo, useState } from "react"
import "./App.css"
import { useQuery } from "@apollo/client"

import { gql } from "./generated/gql"

function App() {
  const storedToken = useMemo(() => localStorage.getItem("token") ?? "", [])
  const [token, setToken] = useState(storedToken)

  const handleSetToken = useCallback(() => {
    if (token !== "") {
      localStorage.setItem("token", token ?? "")
      window.location.reload()
    }
  }, [token])

  return (
    <div>
      <p>{`Current token: ${storedToken}`}</p>
      <input value={token} onChange={(e) => setToken(e.target.value)}></input>
      <button onClick={handleSetToken}>Set token</button>
    </div>
  )

  /*return (
    <div className="App">
      {timeToLowestPrice && <p>{`Time to: ${timeToLowestPrice}`}</p>}
      {lowestPrice && <p>{`Lowest price: ${lowestPrice.total}`}</p>}
      {allPrices.map((price, index) => <p key={index}>{`${(new Date(price.startsAt)).toLocaleTimeString()} - ${price.total}`}</p>)}
    </div>
  );*/
}

export default App
