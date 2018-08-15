import PropTypes from "prop-types";
import React, { Component } from "react";

import Command from "../Command";

import burgerSvg from "./burger.svg";
import crossSvg from "./cross.svg";

import "./index.css";

class Menu extends Component {
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
    const MenuClassName = `Menu ${isRevealing ? "Menu--revealing" : ""}`;
    const detailsClassName = `Menu-details ${
      isActive ? "Menu-details--active" : ""
    }`;
    return (
      <nav className={MenuClassName}>
        {isRevealing && (
          <div className="Menu-command">
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
            <div className="Menu-command">
              <Command onClick={this.handleClick}>
                <img
                  alt="Close menu"
                  src={crossSvg}
                  style={{ width: "1.5rem" }}
                />
              </Command>
            </div>
          )}
          <ul className="Menu-items">
            {this.props.items.map(({ text, href }, index) => (
              <li className="Menu-item" key={index}>
                <a className="Menu-link" href={href}>
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

Menu.propTypes = {
  isRevealing: PropTypes.bool,
  items: PropTypes.array.isRequired
};

export default Menu;
