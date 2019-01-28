import React from "react";

import glassSvg from "./glass.svg";

import "./index.css";

const Search = () => (
  <form className="Search">
    <input
      className="Search-input"
      id="search-input"
      name="search-input"
      size="8"
      type="search"
    />
    <button className="Search-button" type="submit">
      <img
        alt="Search"
        className="SubmitSearchControl-buttonSvg"
        src={glassSvg}
      />
    </button>
  </form>
);

export default Search;
