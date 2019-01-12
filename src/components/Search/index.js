import React, { forwardRef } from "react";

import glassSvg from "./glass.svg";

import "./index.css";

const Search = forwardRef((props, ref) => (
  <form className="Search">
    <input
      className="Search-input"
      id="search-input"
      name="search-input"
      size="8"
      ref={ref}
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
));

Search.displayName = "Search";

export default Search;
