/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
  AiOutlineDelete,
} from "react-icons/ai";
import { TiDelete, TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import { CartWrapper } from "../styles/CartStyle";
import { Quantity } from "../styles/DetailStyle";

function Cart() {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantity,
    cartItems,
    setShowCart,
    decQty,
    incQty,
    qty,
    onAdd,
    onRemove,
    onRemoveCard,
    toggleCartItemQuantity,
  } = useStateContext();

  return (
    <CartWrapper>
      <div className="cart-wrapper" ref={cartRef}>
        <div className="cart-container">
          <div className="cart-heading" onClick={() => setShowCart(false)}>
            <AiOutlineLeft />
            <span className="heading">Your Cart</span>
            <span className="cart-num-items">{totalQuantity} items</span>
          </div>

          {/* If there is not item in the Cart */}
          {cartItems.length < 1 && (
            <div className="empty-cart">
              <AiOutlineShopping size={150} />
              <h3>Your shopping bag is empty</h3>

              <Link href="/">
                <button type="button" onClick={() => setShowCart(false)}>
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}

          <div className="product-container">
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div className="product" key={item._id}>
                  <img
                    className="cart-product-img"
                    src={urlFor(item?.image[0])}
                    alt=""
                  />

                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item.name}</h5>
                      <h4>${item.price}</h4>
                    </div>

                    <Quantity>
                      <p className="quant-desc">
                        <span className="minus" onClick={() => onRemove(item)}>
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span className="plus" onClick={() => onAdd(item, 1)}>
                          <AiOutlinePlus />
                        </span>
                      </p>

                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => onRemoveCard(item)}
                      >
                        <TiDeleteOutline />
                      </button>
                    </Quantity>
                  </div>
                </div>
              ))}
          </div>

          {/* Show total if the item is added */}
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
                <h3>Subtotal: </h3>
                <h3>${totalPrice}</h3>
              </div>

              <div className="btn-container">
                <button type="button" className="btn">
                  Pay with Stripe
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </CartWrapper>
  );
}

export default Cart;
