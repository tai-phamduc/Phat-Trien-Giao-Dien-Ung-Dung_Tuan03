import React from "react";
import "./SearchInput.css"; // Import the CSS file

const SearchInput = () => {
  return (
    <div className="search-container">
      <img src='/Lab_02_b/search.png' alt="Search" className="search-icon" />
      <input type="text" className="search-input" placeholder="cakescacsa" />
    </div>
  );
};

export default SearchInput;
