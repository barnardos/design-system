import PropTypes from "prop-types";
import React, { Component } from "react";

import "./index.css";

class Conditional extends Component {
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
    const { target, trigger } = this.props;
    return (
      <div className="Conditional">
        <div className="Conditional-trigger" onClick={this.handleClick}>
          {trigger}
        </div>
        <div
          className={`Conditional-target ${
            isActive ? "Conditional-target--active" : ""
          }`}
        >
          {target}
        </div>
      </div>
    );
  }
}

Conditional.propTypes = {
  trigger: PropTypes.node.isRequired,
  target: PropTypes.node.isRequired
};

export default Conditional;
