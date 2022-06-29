import React from "react";
import ProductCard from "../Product Card/ProductCard";
import { categories } from "../../../utils/constants";
import ProductView from "../ProductView/ProductView";
import "./ProductGrid.css";

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  category,
}) => {
  return (
    <div className="product-grid" id="Buy">
      <div className="product-grid-title">
        <h2>
          {
            categories.find((categoryItem) => categoryItem.value == category)
              .label
          }
        </h2>
      </div>
      <div className="product-grid-container">
        {products.map((product, index) => (
          <React.Fragment key={index}>
            <ProductCard
              product={product}
              productId={product.id}
              quantity={product.quantity}
              showDescription={false}
              handleAddItemToCart={handleAddItemToCart}
              handleRemoveItemFromCart={handleRemoveItemFromCart}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
