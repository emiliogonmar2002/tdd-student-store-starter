import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SearchBar from "../SearchBar/SearchBar";
import Categories from "../Categories/Categories";

export default function Home({
  products,
  shoppingCart,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  handleOnSubmitCheckoutForm,
  categorie,
  setCategorie,
  handleSetCategorie,
}) {
  return (
    <div className="home">
      <Hero />
      <SearchBar />
      <Categories
        categorie={categorie}
        handleSetCategorie={handleSetCategorie}
      />
      <ProductGrid
        products={products}
        shoppingCart={shoppingCart}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        categorie={categorie}
        setCategorie={setCategorie}
      />
    </div>
  );
}
