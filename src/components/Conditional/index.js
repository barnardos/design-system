import PropTypes from "prop-types";
import React, { useState } from "react";

import "./index.css";

const Conditional = ({ target, trigger }) => {
  const [isActive, setActive] = useState(false);
  return (
    <div className="Conditional">
      <div className="Conditional-trigger" onClick={() => setActive(!isActive)}>
        {trigger}
      </div>
      <div
        className={`Conditional-target ${
          isActive ? "Conditional-target--active" : ""
        }`}
      >
        {target}
      </div>
    </div>
  );
};

Conditional.propTypes = {
  trigger: PropTypes.node.isRequired,
  target: PropTypes.node.isRequired
};

export default Conditional;
