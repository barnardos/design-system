import React, { Component } from "react";

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
            Menu
          </button>
        </div>

        <div className={detailsClassName}>
          <div className="SubmitSearchControl-commands">
            <button
              className="SubmitSearchControl-command SubmitSearchControl-command--close"
              onClick={this.handleClick}
            >
              Close
            </button>
          </div>

          <form className="SubmitSearchControl-form">
            <div className="SubmitSearchControl-text">
              <input
                className="SubmitSearchControl-textInput"
                name="search"
                id="search"
                type="text"
                size="72"
              />
            </div>
            <div className="SubmitSearchControl-submit">
              <input
                className="SubmitSearchControl-submitInput"
                type="submit"
                value="S"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SubmitSearchControl;
