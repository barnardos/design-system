import PropTypes from "prop-types";
import React, { forwardRef, useEffect } from "react";
import { navigate } from "gatsby";

import Search from "../Search";

import "./index.css";

const DocSearch = forwardRef((props, ref) => {
  useEffect(() => {
    const d = document.createElement("script");
    d.id = "docsearch-script";
    d.async = true;
    d.src =
      "https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js";

    d.onload = () => {
      window.docsearch({
        apiKey: "ea683d85005bef58d24fc7b13a06ae4e",
        indexName: "barnardos_design-system",
        inputSelector: "#algolia-docsearch",
        handleSelected: function(input, event, { url }) {
          const { hash, pathname } = new URL(url);
          navigate(`${pathname}${hash}`);
        }
      });
    };
    document.getElementsByTagName("body")[0].appendChild(d);
  });
  return (
    <div className="DocSearch">
      <Search id="algolia-docsearch" ref={ref} />
    </div>
  );
});

DocSearch.propTypes = {
  id: PropTypes.string
};

DocSearch.displayName = "DocSearch";

export default DocSearch;
