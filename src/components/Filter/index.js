import PropTypes from "prop-types";
import React, { useState } from "react";

import Trigger from "../Trigger";

import cross from "./cross.svg";

import "./index.css";

const Filter = ({ children }) => {
  const [isActive, setActive] = useState(false);
  return (
    <div className="Filter">
      <Trigger onClick={() => setActive(!isActive)}>
        {isActive ? <img alt="Close" src={cross} /> : `Filter`}
      </Trigger>
      <div
        className={`Filter-target ${isActive ? "Filter-target--active" : ""}`}
      >
        <div className="Filter-children">{children}</div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  children: PropTypes.node.isRequired
};

export default Filter;
