import PropTypes from "prop-types";
import React from "react";

import DesignSystemNavigation from "../DesignSystemNavigation";

import "./index.css";

const DesignSystemNavigations = ({ items }) => (
  <div className="DesignSystemNavigations">
    {items.map((item, index) => (
      <div className="DesignSystemNavigations-item" key={index}>
        <DesignSystemNavigation {...item} />
      </div>
    ))}
  </div>
);

DesignSystemNavigations.propTypes = {
  items: PropTypes.array.isRequired
};

export default DesignSystemNavigations;
