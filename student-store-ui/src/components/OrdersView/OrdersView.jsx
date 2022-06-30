import "./OrdersView.css";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../../utils/constants";
import OrderCard from "../OrderCard/OrderCard";
import axios from "axios";

const OrdersView = () => {
  const [ordersAPI, setOrdersAPI] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      const data = await axios.get(`${API_URL}/orders`);
      setIsLoading(false);
      if (data.status != 200) {
        setError(data.statusText);
      } else {
        setOrdersAPI(data.data?.orders || []);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      setError("Server error");
    }
  };

  return (
    <section className="orders-view">
      <h1>Orders</h1>
      <div className="orders-grid">
        {ordersAPI &&
          ordersAPI.map((order, index) => {
            return (
              <React.Fragment key={index}>
                <OrderCard order={order} />
              </React.Fragment>
            );
          })}
      </div>
    </section>
  );
};

export default OrdersView;
