import React from "react";
import "./Categories.css";
import { categories } from "../../../utils/constants";

const Categories = ({ categorie, handleSetCategorie }) => {
  return (
    <div className="categories">
      {categories.map((cat) => (
        <h2
          className={`categorie ${categorie == cat.value ? "selected" : ""}`}
          value={cat.value}
          onClick={() => handleSetCategorie(cat.value)}
        >
          {cat.label}
        </h2>
      ))}
    </div>
  );
};

export default Categories;
