import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../utils/constants";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./ProductView.css";

const ProductView = ({
  handleAddItemToCart,
  handleRemoveItemFromCart,
  shoppingCart,
}) => {
  const { productId } = useParams();

  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!productId) return;
    fetchProductFromId();
  }, [productId]);

  const fetchProductFromId = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${API_URL}/store/${productId}`);

      setProduct(response.data.product);
    } catch (err) {
      setError(true);
    }
    setIsLoading(false);
  };

  const renderProduct = () => {
    if (error)
      return <h1 className="product-view-error">An Error Has Ocurred</h1>;
    if (isLoading) return <h1 className="loading">Loading...</h1>;
    return (
      <div>
        <ProductDetail
          product={product}
          productId={product.id}
          quantity={
            shoppingCart.find((product) => product.itemId == productId)
              ? shoppingCart.find((product) => product.itemId == productId)
                  .quantity
              : 0
          }
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          shoppingCart={shoppingCart}
        />
      </div>
    );
  };

  return <div className="product-view">{renderProduct()}</div>;
};

export default ProductView;
