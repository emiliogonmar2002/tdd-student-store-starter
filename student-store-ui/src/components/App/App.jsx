import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { API_URL } from "../../../utils/constants";
import ProductView from "../ProductView/ProductView";
import axios from "axios";

// Components
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import OrdersView from "../OrdersView/OrdersView";
import NotFound from "../NotFound/NotFound";

export default function App() {
  const [products, setProducts] = useState([{}]);
  const [productsAPI, setProductsAPI] = useState([{}]);
  const [isFetching, setIsFetching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFetchingCheckoutForm, setIsFetchingCheckoutForm] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [ordersAPI, setOrdersAPI] = useState([{}]);

  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({
    email: "",
    name: "",
  });

  // Handlers

  const handleOnToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleAddItemToCart = (product) => {
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === product.id) {
        product.quantity += 1;
        shoppingCart[i].quantity += 1;

        setShoppingCart((shoppingCart) => [...shoppingCart]);
        return;
      }
    }

    const newObject = {
      itemId: product.id,
      name: product.name,
      quantity: 1,
      price: product.price,
    };

    product.quantity = 1;

    setShoppingCart((shoppingCart) => [...shoppingCart, newObject]);
  };

  const handleRemoveItemFromCart = (product) => {
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == product.id) {
        if (shoppingCart[i].quantity > 1) {
          shoppingCart[i].quantity -= 1;
          product.quantity -= 1;
          setShoppingCart((shoppingCart) => [...shoppingCart]);
          return;
        }
        shoppingCart[i].quantity -= 1;
        product.quantity -= 1;
        shoppingCart.splice(i, 1);
        setShoppingCart((shoppingCart) => [...shoppingCart]);
        return;
      }
    }
  };

  const handleCheckoutFormChange = (name, value) => {
    const prev = checkoutForm;

    setCheckoutForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmitCheckoutForm = async () => {
    setIsFetchingCheckoutForm(true);

    try {
      if (checkoutForm.email == "" || checkoutForm.name == "") {
        setSuccessMsg("");
        setError("You need to complete the information");
        setIsFetchingCheckoutForm(false);
        return;
      }
      if (shoppingCart.length == 0) {
        setSuccessMsg("");
        setError("You need to select at least one item");
        setIsFetchingCheckoutForm(false);
        return;
      }

      const response = await axios.post(`${API_URL}/store`, {
        user: checkoutForm,
        shoppingCart,
      });
      setIsFetchingCheckoutForm(false);
      if (response.statusText != "Created") {
        setError("Server error");
        setSuccessMsg("");
        return;
      }
      setError("");
      setSuccessMsg("Success!");

      // Empty shopping cart
      setShoppingCart([]);

      // Reset checkoutForm
      setCheckoutForm({
        email: "",
        name: "",
      });
    } catch (error) {
      setError("Server error");
    }
  };

  const handleSetCategory = (value) => {
    setCategory(value);

    if (value != "") {
      setProducts(productsAPI.filter((product) => product.category == value));
    } else {
      setProducts(productsAPI);
    }
  };

  const handleOnChangeSearchBar = (value) => {
    setSearch(value);
    setProducts(
      productsAPI.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  // Fetching

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadData = async () => {
    setIsFetching(true);

    try {
      const response = await axios.get(API_URL + "/store");

      setProductsAPI(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Server error");
      setError("Server error");
    }

    setIsFetching(false);
  };

  const loadOrders = async () => {
    setLoading(true);
    try {
      const data = await axios.get(`${API_URL}/orders`);
      setLoading(false);
      if (data.status != 200) {
        setError(data.statusText);
      } else {
        setOrdersAPI(data.data?.orders || []);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      setError("Server error");
    }
  };

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <div className="main">
            <Sidebar
              isOpen={isOpen}
              shoppingCart={shoppingCart}
              products={products}
              checkoutForm={checkoutForm}
              error={error}
              isFetching={isFetching}
              successMsg={successMsg}
              handleOnToggle={handleOnToggle}
              handleCheckoutFormChange={handleCheckoutFormChange}
              handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            />
            {!isFetching && (
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      products={products}
                      shoppingCart={shoppingCart}
                      handleAddItemToCart={handleAddItemToCart}
                      handleRemoveItemFromCart={handleRemoveItemFromCart}
                      handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                      category={category}
                      setCategory={setCategory}
                      handleSetCategory={handleSetCategory}
                      handleOnChangeSearchBar={handleOnChangeSearchBar}
                      search={search}
                    />
                  }
                />
                <Route
                  path="/products/:productId"
                  element={
                    <ProductView
                      shoppingCart={shoppingCart}
                      handleAddItemToCart={handleAddItemToCart}
                      handleRemoveItemFromCart={handleRemoveItemFromCart}
                    />
                  }
                />
                <Route
                  path="/orders"
                  element={
                    <OrdersView
                      ordersAPI={ordersAPI}
                      setOrdersAPI={setOrdersAPI}
                      setError={setError}
                    />
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            )}
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}
