import { useState } from "react";
import Cart from "./components/cart/cart";
import Layout from "./components/layout/layout";
import Products from "./components/shop/products";

function App() {
  const [cart, setCart] = useState(false);

  const showCart = () => {
    setCart(prev => !prev);
  };

  return (
    <Layout showCart = {showCart}>
      {cart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
