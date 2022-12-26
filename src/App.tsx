import { BrowserRouter as Router } from "react-router-dom"
import { Hero } from "./components/hero"
import { GlobalStyle } from "./GlobalStyles"

export const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Hero />
      </Router>
    </>
  )
}

