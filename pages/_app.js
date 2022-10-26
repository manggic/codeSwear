import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [singlePayment, setSinglePayment] = useState()

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
      calcTotal(JSON.parse(localStorage.getItem("cart")));
    } catch (error) {}
  }, []);


  const buyNowProduct = (price) => {
       setSinglePayment(price)
  }



  const calcTotal = (newCart) => {
    let subt = 0;
    let keys = Object.keys(newCart);
    for (let i = 0; i < keys.length; i++) {
      subt += newCart[keys[i]].price * newCart[keys[i]].qty;
    }

    setTotal(subt);
  };
  const saveCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));

    if (!Object.keys(newCart)?.length) {
      setTotal(0);
      return;
    }
    calcTotal(newCart);
  };

  const addToCart = (cartObj) => {
    let { name, size, variant, price, itemCode, qty, image } = cartObj;

    let newCart = cart;
    if (itemCode in newCart) {
      newCart[itemCode].qty = newCart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = {
        name,
        size,
        variant,
        price,
        itemCode,
        qty: 1,
        image,
      };
    }

    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const removeFromCart = (cartObj) => {
    let { name, size, variant, price, itemCode, qty } = cartObj;

    let newCart = cart;

    if (newCart[itemCode].qty === 1) {
      delete newCart[itemCode];
    } else {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }

    // let newCart = cart.filter((item) => itemCode !== item.itemCode);
    setCart(newCart);
    saveCart(newCart);
  };

  return (
    <>
      <NavBar
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        total={total}
        clearCart={clearCart}
        cart={cart}
        buyNowProduct={buyNowProduct}
        singlePayment={singlePayment}
      />
      <Component
        {...pageProps}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        total={total}
        clearCart={clearCart}
        cart={cart}
        buyNowProduct={buyNowProduct}
        singlePayment={singlePayment}
      />
      <Footer />{" "}
    </>
  );
}

export default MyApp;
