import React from "react";
import "./Categories.css";
import { CATEGORIES } from "../../../utils/constants";
import { BiAlignLeft } from "react-icons/bi";

const Categories = ({ category, handleSetCategory }) => {
  return (
    <div className="categories">
      <BiAlignLeft size="35px" color="#4EBBCC" />
      {CATEGORIES.map((cat, index) => (
        <React.Fragment key={index}>
          <h2
            className={`category ${category == cat.value ? "selected" : ""}`}
            value={cat.value}
            onClick={() => handleSetCategory(cat.value)}
          >
            {cat.label}
          </h2>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Categories;
