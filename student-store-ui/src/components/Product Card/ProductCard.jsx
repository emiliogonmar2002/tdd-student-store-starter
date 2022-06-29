import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  quantity,
  showDescription,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  shoppingCart,
}) => (
  <div className="product-card">
    <div className="media" title={`Go to ${product.name}`}>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
    </div>
    <h3 className="product-name">{product.name}</h3>
    <hr />
    <p className="product-price">{`$${product.price}`}</p>
    <hr />
    <div className="buttons">
      <button
        title="Remove"
        id="removeButton"
        className="button"
        onClick={() => handleRemoveItemFromCart(product)}
      >
        -
      </button>
      {quantity > 0 && (
        <div
          title={`You have ${quantity} ${product.name} in your shopping cart!`}
          className="product-quantity"
        >
          {shoppingCart.find((productCart) => productCart.itemId == product.id)
            ? shoppingCart.find(
                (productCart) => productCart.itemId == product.id
              ).quantity
            : 0}
        </div>
      )}
      <button
        title="Add"
        id="addButton"
        className="button"
        onClick={() => handleAddItemToCart(product)}
      >
        +
      </button>
    </div>
    {showDescription && (
      <div className="product-description">
        <p>{product.description}</p>
      </div>
    )}
  </div>
);

export default ProductCard;
