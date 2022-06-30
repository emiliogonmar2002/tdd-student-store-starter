import React from "react";
import "./OrderCard.css";

const OrderCard = (order) => {
  return (
    <div className="order-card">
      <h1>{order.order.name}</h1>
    </div>
  );
};

export default OrderCard;
