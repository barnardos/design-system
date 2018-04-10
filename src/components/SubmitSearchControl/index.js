import React, { Component } from "react";

import crossSvg from "./cross.svg";
import glassSvg from "./glass.svg";
import inverseGlassSvg from "./inverse-glass.svg";

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
    const { isActive } = this.state;
    const detailsClassName = `SubmitSearchControl-details ${
      isActive ? "SubmitSearchControl-details--active" : ""
    }`;
    return (
      <div className="SubmitSearchControl">
        <div className="SubmitSearchControl-commands">
          <button
            className="SubmitSearchControl-command"
            onClick={this.handleClick}
          >
            <img
              alt="Open search"
              className="SubmitSearchControl-commandSvg"
              src={glassSvg}
            />
          </button>
        </div>

        <div className={detailsClassName}>
          <div className="SubmitSearchControl-commands">
            <button
              className="SubmitSearchControl-command"
              onClick={this.handleClick}
            >
              <img
                alt="Close search"
                className="SubmitSearchControl-commandSvg"
                src={crossSvg}
              />
            </button>
          </div>

          <form className="SubmitSearchControl-form">
            <input
              className="SubmitSearchControl-input"
              name="search"
              id="search"
              type="text"
              size="8"
            />
            <button className="SubmitSearchControl-button" type="submit">
              <img
                alt="Submit search"
                className="SubmitSearchControl-buttonSvg"
                src={inverseGlassSvg}
              />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SubmitSearchControl;
