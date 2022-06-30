import React, { useEffect, useState } from "react";
import "./OrdersView.css";
import { API_URL } from "../../../utils/constants";
import axios from "axios";

const OrdersView = (ordersAPI, setOrdersAPI) => {
  return (
    <div className="orders-view">
      <h1>Orders</h1>
      {console.log(ordersAPI)}
      {ordersAPI &&
        ordersAPI.ordersAPI.map((order) => {
          <p>{order.name}</p>;
        })}
    </div>
  );
};

export default OrdersView;
