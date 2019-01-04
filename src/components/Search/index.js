import React from "react";

import glassSvg from "./glass.svg";

import "./index.css";

const Search = () => (
  <form className="Search">
    <input
      className="Search-input"
      id="search"
      name="search"
      size="8"
      type="text"
    />
    <button className="Search-button" type="submit">
      <img
        alt="Submit search"
        className="SubmitSearchControl-buttonSvg"
        src={glassSvg}
      />
    </button>
  </form>
);

export default Search;
