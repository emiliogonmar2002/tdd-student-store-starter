import React from "react";
import "./ProductDetail.css";
import ProductCard from "../Product Card/ProductCard";

const ProductDetail = ({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) => {
  return (
    <div className="product-view">
      <h1 className="product-id">Product #{productId}</h1>
      {console.log("si", product)}
      <ProductCard
        product={product}
        productId={productId}
        quantity={quantity}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        showDescription
      />
    </div>
  );
};

export default ProductDetail;
