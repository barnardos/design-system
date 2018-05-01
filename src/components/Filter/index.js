import PropTypes from "prop-types";
import React, { Component } from "react";

import Command from "../Command";
import SubmitControls from "../SubmitControls";

import crossSvg from "./cross.svg";

import "./index.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  render() {
    const { submitControls } = this.props;
    const { isActive } = this.state;
    const detailsClassName = `Filter-details ${
      isActive ? "Filter-details--active" : ""
    }`;
    return (
      <div className="Filter">
        <Command onClick={this.handleClick}>Filter</Command>
        <div className={detailsClassName}>
          <Command onClick={this.handleClick}>
            <img alt="Close menu" src={crossSvg} style={{ width: "1.5rem" }} />
          </Command>
          <div className="Filter-submitControls">
            <SubmitControls {...submitControls} />
          </div>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  submitControls: PropTypes.object.isRequired
};

export default Filter;
