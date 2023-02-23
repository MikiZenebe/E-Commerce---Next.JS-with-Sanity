import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { NavBar } from "../styles/HomeStyle";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import User from "./User";
import { useUser } from "@auth0/nextjs-auth0/client";

function Navbar() {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  const { user } = useUser();
  console.log(user);
  return (
    <NavBar>
      <p className="logo">
        <Link href="/">Electro Store</Link>
      </p>
      <User />
      <button type="button" onClick={() => setShowCart(true)}>
        {totalQuantity > 0 && <span>{totalQuantity}</span>}
        <AiOutlineShopping />
      </button>
      {showCart && <Cart />} {/* Show the cart if it's true */}
    </NavBar>
  );
}

export default Navbar;
