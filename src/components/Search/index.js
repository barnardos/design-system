import PropTypes from "prop-types";
import React, { forwardRef } from "react";

import glassSvg from "./glass.svg";

import "./index.css";

const Search = forwardRef(({ id = "search-input" }, ref) => (
  <form className="Search">
    <label className="Search-label" htmlFor={id}>
      Search
    </label>
    <input
      className="Search-input"
      id={id}
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

Search.propTypes = {
  id: PropTypes.string
};

Search.displayName = "Search";

export default Search;
