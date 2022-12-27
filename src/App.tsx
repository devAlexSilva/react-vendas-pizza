import { BrowserRouter as Router } from "react-router-dom"
import { Hero } from "./components/hero"
import { Product } from "./components/products"
import { GlobalStyle } from "./GlobalStyles"

export const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Hero />
        <Product />
      </Router>
    </>
  )
}

