import React from "react";
import "./CheckoutForm.css";

const CheckOutForm = ({
  isOpen,
  checkoutForm,
  handleCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  error,
  successMsg,
}) => {
  const openedSidebar = (
    <div className="checkout-form">
      <h2 className="checkout-form-title">Payment Info</h2>
      <input
        className="checkout-form-input"
        value={checkoutForm.email}
        type="email"
        name="email"
        placeholder="student@codepath.org"
        onChange={(e) => handleCheckoutFormChange("email", e.target.value)}
      />
      <input
        className="checkout-form-input"
        value={checkoutForm.name}
        type="text"
        name="name"
        onChange={(e) => handleCheckoutFormChange("name", e.target.value)}
      />
      <button
        onClick={() => {
          handleOnSubmitCheckoutForm();
        }}
      >
        Checkout
      </button>
      {error != "" && <div className="error">{error}</div>}
      {successMsg != "" && <div className="success">{successMsg}</div>}
    </div>
  );

  const closedSidebar = <></>;

  return <>{isOpen ? openedSidebar : closedSidebar}</>;
};

export default CheckOutForm;
