import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"

import MainScreen from "./screens/MainScreen"
import LoginScreen from "./screens/LoginScreen"

const tibberToken = localStorage.getItem("token")

const httpLink = createHttpLink({
  uri: "https://api.tibber.com/v1-beta/gql/",
})

const authLink = setContext((_, { headers }) => {
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
      if (tibberToken === null) {
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
