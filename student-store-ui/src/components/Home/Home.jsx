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
  categorie,
  setCategorie,
  handleSetCategorie,
  handleOnChangeSearchBar,
  search,
}) {
  return (
    <div className="home" id="home">
      <Hero />
      <SearchBar handleOnChangeSearchBar={handleOnChangeSearchBar} />
      <Categories
        categorie={categorie}
        handleSetCategorie={handleSetCategorie}
        search={search}
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
