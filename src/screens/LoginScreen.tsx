import { useCallback, useMemo, useState } from "react"
import Button from "../components/input/Button"
import Screen from "../components/layout/Screen"
import TextInput from "../components/input/TextInput"
import { useNavigate } from "react-router-dom"

function LoginScreen() {
  const navigate = useNavigate()
  const storedToken = useMemo(() => localStorage.getItem("token") ?? "", [])
  const [token, setToken] = useState(storedToken)

  const handleSetToken = useCallback(() => {
    if (token !== "") {
      localStorage.setItem("token", token ?? "")
      console.log("Navigate...")
      navigate("/", { replace: true })
    }
  }, [navigate, token])

  const clearToken = useCallback(() => {
    localStorage.removeItem("token")
    setToken("")
  }, [])

  return (
    <Screen title="API nyckel">
      <p>
        Mata in din Tibber API nyckel, du kan få tag på den genom att logga in
        här,{" "}
        <span>
          <a href="https://developer.tibber.com/">
            https://developer.tibber.com/
          </a>
        </span>
        .
      </p>
      <TextInput
        value={token}
        onChange={(value) => setToken(value)}
      ></TextInput>
      <Button disabled={token === ""} title="Spara" onClick={handleSetToken} />
      <Button title="Glöm nyckeln" onClick={clearToken} />
    </Screen>
  )
}

export default LoginScreen
