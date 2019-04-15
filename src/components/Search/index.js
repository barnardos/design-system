import PropTypes from "prop-types";
import React, { forwardRef } from "react";

import glassSvg from "./glass.svg";

import "./index.css";

const Search = forwardRef(
  ({ buttonless, id = "search-input", placeholder = "Search" }, ref) => (
    <form className="Search">
      <label className="Search-label" htmlFor={id}>
        Search
      </label>
      <input
        className="Search-input"
        id={id}
        name="search-input"
        placeholder={placeholder}
        size="8"
        ref={ref}
        type="search"
      />
      {!buttonless && (
        <button className="Search-button" type="submit">
          <img
            alt="Search"
            className="SubmitSearchControl-buttonSvg"
            src={glassSvg}
          />
        </button>
      )}
    </form>
  )
);

Search.propTypes = {
  buttonless: PropTypes.bool,
  id: PropTypes.string,
  placeholder: PropTypes.string
};

Search.displayName = "Search";

export default Search;
