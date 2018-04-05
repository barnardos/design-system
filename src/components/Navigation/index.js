import PropTypes from "prop-types";
import React, { Component } from "react";

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
          <button className="Navigation-command" onClick={this.handleClick}>
            Menu
          </button>
        )}
        <div className={detailsClassName}>
          {isRevealing && (
            <button
              className="Navigation-command Navigation-command--close"
              onClick={this.handleClick}
            >
              Close
            </button>
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
