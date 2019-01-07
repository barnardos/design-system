import PropTypes from "prop-types";
import React, { Component } from "react";

import Command from "../Command";

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
    const { children } = this.props;
    const { isActive } = this.state;
    return (
      <div className="Filter">
        <Command onClick={this.handleClick}>
          {isActive ? (
            <img alt="Close menu" src={crossSvg} style={{ width: "1.5rem" }} />
          ) : (
            `Filter`
          )}
        </Command>
        <div
          className={`Filter-details ${
            isActive ? "Filter-details--active" : ""
          }`}
        >
          <div className="Filter-children">{children}</div>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  children: PropTypes.node.isRequired
};

export default Filter;
