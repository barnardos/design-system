import PropTypes from "prop-types";
import React, { Component } from "react";

import AttentionGrabbingLink from "../../components/AttentionGrabbingLink";
import Command from "../Command";

import burgerSvg from "./burger.svg";
import crossSvg from "./cross.svg";

import logo from "../Header/logo.svg";

import "./index.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  render() {
    const noop = () => {};
    const { isJs } = this.props;
    const { isActive } = this.state;
    const MenuClassName = `Menu ${isJs ? "Menu--js" : ""}`;
    const detailsClassName = `Menu-details ${
      isActive ? "Menu-details--active" : ""
    }`;
    return (
      <nav className={MenuClassName}>
        <div className="Menu-command Menu-command--menu">
          <Command onClick={isJs ? this.handleClick : noop}>
            <a className="Menu-commandLink" href="#menu">
              <img
                alt="Open menu"
                src={burgerSvg}
                style={{ width: "1.5rem" }}
              />{" "}
              <span className="Menu-commandText">{` Menu`}</span>
            </a>
          </Command>
        </div>
        <div className={detailsClassName}>
          <div className="Menu-command  Menu-command--close">
            <Command onClick={this.handleClick}>
              <img
                alt="Close menu"
                src={crossSvg}
                style={{ width: "1.5rem" }}
              />
              <span className="Menu-commandText">{` Menu`}</span>
            </Command>
          </div>
          <img
            alt="Believe in children Barnardo’s"
            className="Menu-logoInner"
            src={logo}
          />
          <div className="Menu-attentionGrabbingLinks" id="menu">
            <AttentionGrabbingLink
              text="Donate"
              colour="orange"
              href="http://example.org"
            />
            <AttentionGrabbingLink
              text="Shop"
              colour="pink"
              href="http://example.org"
            />
          </div>
          <ul className="Menu-items">
            {this.props.items.map(({ isActive, text, href, items }, index) => (
              <li
                className={`Menu-item ${isActive ? "Menu-item--active" : ""}`}
                key={index}
              >
                <a className="Menu-link Menu-link--primary" href={href}>
                  {text}
                </a>
                {items && (
                  <ul className="Menu-items Menu-items--secondary">
                    {items.map(({ isActive, text, href }, index) => (
                      <li
                        className={`Menu-item Menu-item--secondary ${
                          isActive ? "Menu-item--active" : ""
                        }`}
                        key={index}
                      >
                        <a
                          className="Menu-link Menu-link--secondary"
                          href={href}
                        >
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
  isJs: PropTypes.bool,
  isRevealing: PropTypes.bool,
  items: PropTypes.array.isRequired
};

export default Menu;
