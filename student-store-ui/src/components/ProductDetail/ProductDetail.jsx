import React from "react";
import "./ProductDetail.css";
import ProductCard from "../Product Card/ProductCard";

const ProductDetail = ({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  shoppingCart,
}) => {
  return (
    <div className="product-detail">
      <h1 className="product-id">Product #{productId}</h1>
      <ProductCard
        product={product}
        productId={productId}
        quantity={quantity}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        showDescription
        shoppingCart={shoppingCart}
      />
    </div>
  );
};

export default ProductDetail;
