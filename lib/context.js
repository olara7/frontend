import React, { createContext, useContext, useState } from "react";
import { Context } from "urql";
import ProductDetails from "../pages/product/[slug]";
import { useEffect } from "react";

const ShopContext = createContext();

// const cartFromLocalStorage = JSON.parse(
//   window.localStorage.getItem("cart") || "[]"
// );

export const StateContext = ({ children }) => {
  //Add our data for the state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //cartItems should be the only source of truth:
  //const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  //const totalQuantities = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")));
  }, []);

  //Increase product quantity
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //Decrease product quantity
  const decreaseQty = () => {
    setQty((prevQty) => {
      //Check if quantity is at 1, to not go lower than 1
      if (prevQty == 1) return 1;

      // else
      return prevQty - 1;
    });
  };

  // Add Product to cart
  const onAdd = (product, quantity) => {
    //Total Price
    setTotalPrice((prevTotal) => prevTotal + product.price * quantity);

    //Increase total quantity
    setTotalQuantities((prevTotal) => prevTotal + quantity);

    //Check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug == product.slug);
    if (exist) {
      //Go through cart, find the product and update the quantity
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      //Spread the rest if the items and add the new product with quantity
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  //Remove Product
  const onRemove = (product) => {
    //Total Price
    setTotalPrice((prevTotal) => prevTotal - product.price);

    //Decrease total quantity
    setTotalQuantities((prevTotal) => prevTotal - 1);

    //Check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug == product.slug);

    //If quantity is 1, remove item from cart by using filter
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
      //Otherwise lower the qauntity by 1 by mapping through the items and finding the item
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? //Spread out the existing information and subtracting 1 from the quantity
              { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        cartItems,
        onAdd,
        onRemove,
        totalQuantities,
        totalPrice,
        setQty,
        setTotalQuantities,
        setTotalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
