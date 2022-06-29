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
  category,
  setCategory,
  handleSetCategory,
  handleOnChangeSearchBar,
  search,
}) {
  return (
    <div className="home" id="home">
      <Hero />
      <SearchBar handleOnChangeSearchBar={handleOnChangeSearchBar} />
      <Categories
        category={category}
        handleSetCategory={handleSetCategory}
        search={search}
      />
      <ProductGrid
        products={products}
        shoppingCart={shoppingCart}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        category={category}
        setCategory={setCategory}
      />
    </div>
  );
}
