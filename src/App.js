import React, { useState } from "react";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import OrderForm from "./components/OrderForm";
import Cart from "./components/Cart";
import Home from "./components/Home";

const App = () => {

  const [order, setOrder] = useState([]);
  
  console.log("App -> order", order)

  return (
    <>

      <Nav />

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/order">
        <OrderForm order={order} setOrder={setOrder} />
      </Route>

      <Route exact path="/cart">
        <Cart order={order} />
      </Route>
      
    </> // <-- Parsing Error Bypass
  );
};
export default App;