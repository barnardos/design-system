import React from "react";

import ContentsMenu from "../ContentsMenu";

import "./index.css";

const DesignSystemContentsMenu = props => (
  <div className="DesignSystemContentsMenu">
    <p className="DesignSystemContentsMenu-section">{`In this section:`}</p>
    <ContentsMenu {...props} />
  </div>
);

export default DesignSystemContentsMenu;
