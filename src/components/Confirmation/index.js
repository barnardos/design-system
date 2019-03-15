import PropTypes from "prop-types";
import React from "react";

import Lede from "../Lede";
import Title from "../Title";

import "./index.css";

const Confirmation = ({ title, lede, reference }) => (
  <div className="Confirmation">
    <div className="Confirmation-inner">
      <Title>{title}</Title>
      <Lede>
        {lede}
        <strong className="Confirmation-reference">{reference}</strong>
      </Lede>
    </div>
  </div>
);

Confirmation.propTypes = {
  title: PropTypes.string.isRequired,
  lede: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired
};

export default Confirmation;
