import React from "react";
import "./SearchBar.css";

const SearchBar = ({ handleOnChangeSearchBar, search }) => {
  return (
    <div className="searchbar">
      <form>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleOnChangeSearchBar(e.target.value)}
          value={search}
        />
        <button type="submit">Search</button>
      </form>
      <button id="cart">My Cart</button>
    </div>
  );
};

export default SearchBar;
