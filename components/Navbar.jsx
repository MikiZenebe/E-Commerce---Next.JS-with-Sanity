import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { NavBar } from "../styles/HomeStyle";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

function Navbar() {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  return (
    <NavBar>
      <p className="logo">
        <Link href="/">Electro Store</Link>
      </p>
      <button type="button" onClick={() => setShowCart(true)}>
        {totalQuantity > 0 && <span>{totalQuantity}</span>}
        <AiOutlineShopping />
      </button>
      {showCart && <Cart />} {/* Show the cart if it's true */}
    </NavBar>
  );
}

export default Navbar;
