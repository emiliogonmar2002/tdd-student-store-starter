import * as React from "react";
import "./Sidebar.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { FaAngleRight } from "react-icons/fa";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  error,
  successMsg,
  handleOnToggle,
  handleCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  return (
    <section className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {/* <button onClick={handleOnToggle}>Toggle</button> */}
      <FaAngleRight
        className={`shopping-icon ${isOpen && "icon-open"}`}
        size="40px"
        onClick={handleOnToggle}
      />

      <ShoppingCart
        isOpen={isOpen}
        products={products}
        shoppingCart={shoppingCart}
      />

      <CheckoutForm
        isOpen={isOpen}
        shoppingCart={shoppingCart}
        checkoutForm={checkoutForm}
        handleCheckoutFormChange={handleCheckoutFormChange}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        error={error}
        successMsg={successMsg}
      />
    </section>
  );
}
