import PropTypes from "prop-types";
import React, { Component } from "react";

import Command from "../Command";

import burgerSvg from "./burger.svg";
import crossSvg from "./cross.svg";

import "./index.css";

class Navigation extends Component {
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
    const { isRevealing } = this.props;
    const { isActive } = this.state;
    const navigationClassName = `Navigation ${
      isRevealing ? "Navigation--revealing" : ""
    }`;
    const detailsClassName = `Navigation-details ${
      isActive ? "Navigation-details--active" : ""
    }`;
    return (
      <nav className={navigationClassName}>
        {isRevealing && (
          <div className="Navigation-command">
            <Command onClick={this.handleClick}>
              <img
                alt="Open menu"
                src={burgerSvg}
                style={{ width: "1.5rem" }}
              />
            </Command>
          </div>
        )}
        <div className={detailsClassName}>
          {isRevealing && (
            <div className="Navigation-command">
              <Command onClick={this.handleClick}>
                <img
                  alt="Close menu"
                  src={crossSvg}
                  style={{ width: "1.5rem" }}
                />
              </Command>
            </div>
          )}
          <ul className="Navigation-items">
            {this.props.items.map(({ text, href }, index) => (
              <li className="Navigation-item" key={index}>
                <a className="Navigation-link" href={href}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

Navigation.propTypes = {
  isRevealing: PropTypes.bool,
  items: PropTypes.array.isRequired
};

export default Navigation;
