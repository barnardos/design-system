import PropTypes from "prop-types";
import React, { Component } from "react";

import "./index.css";

class ConditionalControl extends Component {
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
    const targetClassName = `ConditionalControls-target ${
      isActive ? "ConditionalControls-target--active" : ""
    }`;
    return (
      <div className="ConditionalControls">
        <div className="ConditionalControls-trigger" onClick={this.handleClick}>
          {trigger}
        </div>
        <div className={targetClassName}>{target}</div>
      </div>
    );
  }
}

ConditionalControl.propTypes = {
  trigger: PropTypes.node.isRequired,
  target: PropTypes.node.isRequired
};

export default ConditionalControl;
