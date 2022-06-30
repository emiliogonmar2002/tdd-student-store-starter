import React from "react";
import "./OrderCard.css";
import { Link } from "react-router-dom";

const OrderCard = ({ order }) => (
  <Link style={{ textDecoration: "none" }} to={`/orders/${order.id}`}>
    <div className="order-card">
      <h3 className="order-name">{order.name}</h3>
      <p>{order.email}</p>
      <p>{`Total: $${order.total.toFixed(2)}`}</p>
    </div>
  </Link>
);

export default OrderCard;
