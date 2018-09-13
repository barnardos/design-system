import PropTypes from "prop-types";
import React, { Component } from "react";

import Command from "../Command";

import crossSvg from "./cross.svg";
import glassSvg from "./glass.svg";
import glassInvertedSvg from "./glass-inverted.svg";

import logo from "../Header/logo.svg";

import "./index.css";

class SubmitSearchControl extends Component {
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
    const { isJs } = this.props;
    const { isActive } = this.state;
    const className = `SubmitSearchControl ${
      isJs ? "SubmitSearchControl--js" : ""
    }`;
    const detailsClassName = `SubmitSearchControl-details ${
      isActive ? "SubmitSearchControl-details--active" : ""
    }`;
    return (
      <div className={className}>
        <div className="SubmitSearchControl-command">
          <Command onClick={this.handleClick}>
            <a className="SubmitSearchControl-commandLink" href="#search">
              <img
                alt="Open search"
                src={glassSvg}
                style={{ width: "1.5rem" }}
              />
            </a>
          </Command>
        </div>
        <div className={detailsClassName}>
          <div className="SubmitSearchControl-command SubmitSearchControl-command--close">
            <Command onClick={this.handleClick}>
              <img
                alt="Close search"
                src={crossSvg}
                style={{ width: "1.5rem" }}
              />
            </Command>
          </div>
          <img
            alt="Believe in children Barnardo’s"
            className="SubmitSearchControl-logoInner"
            src={logo}
          />
          <form className="SubmitSearchControl-form" id="search">
            <input
              className="SubmitSearchControl-input"
              id="search"
              name="search"
              size="8"
              type="text"
              placeholder="Search Barnardo's"
            />
            <button className="SubmitSearchControl-button" type="submit">
              <img
                alt="Submit search"
                className="SubmitSearchControl-buttonSvg"
                src={glassInvertedSvg}
              />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

SubmitSearchControl.propTypes = {
  isJs: PropTypes.bool
};

export default SubmitSearchControl;
