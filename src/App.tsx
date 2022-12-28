import { BrowserRouter as Router } from "react-router-dom"
import { Featured } from "./components/featured"
import { Hero } from "./components/hero"
import { Product } from "./components/products"
import { GlobalStyle } from "./GlobalStyles"
import { productDataPizza, productDataSanduiche } from "./components/products/data"


export const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Hero />
        <Product heading="Pizzas Doces" dataProduct={productDataPizza} />
        <Featured />
        <Product heading="Pizzas Salgadas" dataProduct={productDataSanduiche}/>
      </Router>
    </>
  )
}

