import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <h2 className="categorie" value="">
        All categories
      </h2>
      <h2 className="categorie" value="food">
        Food
      </h2>
      <h2 className="categorie" value="clothing">
        Clothing
      </h2>
      <h2 className="categorie" value="accessories">
        Accessories
      </h2>
      <h2 className="categorie" value="tech">
        Tech
      </h2>
    </div>
  );
};

export default Categories;
