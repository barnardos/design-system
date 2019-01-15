import React from "react";

import Index from "../Index";

import "./index.css";

const DesignSystemIndex = props => (
  <div className="DesignSystemIndex">
    <div className="DesignSystemIndex-inner">
      <p className="DesignSystemIndex-section">{`In this section:`}</p>
      <Index {...props} />
    </div>
  </div>
);

export default DesignSystemIndex;
