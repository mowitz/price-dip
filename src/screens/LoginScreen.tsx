import { useCallback, useMemo, useState } from "react"

import { useNavigate } from "react-router-dom"

import Screen from "../components/Screen"

function LoginScreen() {
  const navigate = useNavigate()
  const storedToken = useMemo(() => localStorage.getItem("token") ?? "", [])
  const [token, setToken] = useState(storedToken)

  const handleSetToken = useCallback(() => {
    if (token !== "") {
      localStorage.setItem("token", token ?? "")
      navigate("/")
    }
  }, [navigate, token])

  return (
    <Screen>
      <p>
        Mata in din Tibber API nyckel, du kan få tag på den genom att logga in
        här, https://developer.tibber.com/.
      </p>
      <input value={token} onChange={(e) => setToken(e.target.value)}></input>
      <button onClick={handleSetToken}>Bekräfta</button>
    </Screen>
  )
}

export default LoginScreen
