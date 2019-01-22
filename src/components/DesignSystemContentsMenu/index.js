import React from "react";

import ContentsMenu from "../ContentsMenu";

import "./index.css";

const DesignSystemContentsMenu = props => (
  <div className="DesignSystemContentsMenu">
    <div className="DesignSystemContentsMenu-inner">
      <p className="DesignSystemContentsMenu-section">{`In this section:`}</p>
      <ContentsMenu {...props} />
    </div>
  </div>
);

export default DesignSystemContentsMenu;
