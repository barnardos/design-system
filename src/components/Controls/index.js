import PropTypes from "prop-types";
import React from "react";

import MultilineTextControl from "../MultilineTextControl";
import MultiSelectionControl from "../MultiSelectionControl";
import SelectionControl from "../SelectionControl";
import SinglelineTextControl from "../SinglelineTextControl";
import SingleSelectionControl from "../SingleSelectionControl";

const controls = {
  multilineText: MultilineTextControl,
  multiSelection: MultiSelectionControl,
  selection: SelectionControl,
  singlelineText: SinglelineTextControl,
  singleSelection: SingleSelectionControl
};

import "./index.css";

const renderControl = control => {
  const Control = controls[control.control];
  return <Control {...control} />;
};

const Controls = ({ controls }) => (
  <div className="Controls">
    {controls.map((control, index) => (
      <div className="Controls-control" key={index}>
        {renderControl(control)}
      </div>
    ))}
  </div>
);

Controls.propTypes = {
  controls: PropTypes.array.isRequired
};

export default Controls;
