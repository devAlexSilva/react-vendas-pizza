import { BrowserRouter as Router } from "react-router-dom"
import { Navbar } from "./components/navbar"
import { GlobalStyle } from "./GlobalStyles"

export const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
      </Router>
    </>
  )
}

