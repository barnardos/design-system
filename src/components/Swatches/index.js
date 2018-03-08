import PropTypes from "prop-types";
import React from "react";

import Swatch from "../Swatch";

import "./index.css";

const Swatches = ({ swatches }) => (
  <section className="Swatches">
    {swatches.map((swatchesGroup, index) => (
      <ul className="Swatches-swatchGroup" key={index}>
        {swatchesGroup.map((swatch, index) => (
          <li className="Swatches-swatch" key={index}>
            <Swatch {...swatch} />
          </li>
        ))}
      </ul>
    ))}
  </section>
);

Swatches.propTypes = {
  swatches: PropTypes.array.isRequired
};

export default Swatches;
