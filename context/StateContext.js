import React, { useState, createContext, useContext } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct; //The product that we want to update

  //Increase Quantity
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //Decrease Quantity
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1; //stop on 1 If it trys to go lessthan 1
      return prevQty - 1; //minus 1 whatever the number is
    });
  };

  //Add product to cart
  const onAdd = (product, quantity) => {
    //Check if the product is in cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`);

    //Total Price
    setTotalPrice((prevTotal) => prevTotal + product.price * quantity);

    //Increase total quantity
    setTotalQuantity((prevTotal) => prevTotal + quantity); //Display on the cart icon
  };

  //Remove Product
  const onRemove = (product) => {
    //Check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }

    //Total Price
    setTotalPrice((prevTotal) => prevTotal - product.price);

    //Decrease total quantitiy
    setTotalQuantity((prevTotal) => prevTotal - 1); //Display on the cart icon
  };

  //Remove item card
  const onRemoveCard = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotal) => prevTotal - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantity((prevTotal) => prevTotal - foundProduct.quantity);
    setCartItems(newCartItems);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantity,
        onRemove,
        onRemoveCard,
        qty,
        incQty,
        decQty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
