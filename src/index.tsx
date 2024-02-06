import "./index.css"
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client"
import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom"
import LoginScreen from "./screens/LoginScreen"
import MainScreen from "./screens/MainScreen"
import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
  uri: "https://api.tibber.com/v1-beta/gql/",
})

const authLink = setContext((_, { headers }) => {
  const tibberToken = localStorage.getItem("token")

  return {
    headers: {
      ...headers,
      authorization: tibberToken ? `Bearer ${tibberToken}` : "",
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainScreen />,
    loader: () => {
      if (localStorage.getItem("token") === null) {
        throw redirect("/login")
      }
      return true
    },
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
])

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
