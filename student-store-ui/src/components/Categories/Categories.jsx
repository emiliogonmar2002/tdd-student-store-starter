import React from "react";
import "./Categories.css";
import { categories } from "../../../utils/constants";
import { MdSort } from "react-icons/md";

const Categories = ({ categorie, handleSetCategorie }) => {
  return (
    <div className="categories">
      <MdSort />
      {categories.map((cat, index) => (
        <React.Fragment key={index}>
          <h2
            className={`categorie ${categorie == cat.value ? "selected" : ""}`}
            value={cat.value}
            onClick={() => handleSetCategorie(cat.value)}
          >
            {cat.label}
          </h2>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Categories;
