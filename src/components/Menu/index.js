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
    const { isActive } = this.state;
    const detailsClassName = `Menu-details ${
      isActive ? "Menu-details--active" : ""
    }`;
    return (
      <nav className="Menu">
        <div className="Menu-command">
          <Command onClick={this.handleClick}>
            <a className="Menu-commandLink" href="#menu">
              <img
                alt="Open menu"
                src={burgerSvg}
                style={{ width: "1.5rem" }}
              />
              <span className="Menu-commandText">{` Menu`}</span>
            </a>
          </Command>
        </div>
        <div className={detailsClassName}>
          <div className="Menu-command Menu-command--close">
            <Command onClick={this.handleClick}>
              <img
                alt="Close menu"
                src={crossSvg}
                style={{ width: "1.5rem" }}
              />
              <span className="Menu-commandText">{` Menu`}</span>
            </Command>
          </div>
          <ul className="Menu-items">
            {this.props.items.map(({ isActive, text, href, items }, index) => (
              <li
                className={`Menu-item ${isActive ? "Menu-item--active" : ""}`}
                key={index}
              >
                <a className="Menu-link" href={href}>
                  {text}
                </a>
                {items && (
                  <ul className="Menu-secondaryItems">
                    {items.map(({ isActive, text, href }, index) => (
                      <li
                        className={`Menu-secondaryItem ${
                          isActive ? "Menu-secondaryItem--active" : ""
                        }`}
                        key={index}
                      >
                        <a className="Menu-secondaryLink" href={href}>
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.array.isRequired
};

export default Menu;
