import React from "react";

import Swatch from "../Swatch";

import "./index.css";

const Palette = () => (
  <ul className="Palette">
    <li className="Palette-swatch">
      <Swatch name="Green" hex="#81bc00" />
    </li>
    <li className="Palette-swatch">
      <Swatch name="Pink" hex="#cc0070" />
    </li>
    <li className="Palette-swatch">
      <Swatch name="Teal" hex="#0099a9" />
    </li>
    <li className="Palette-swatch">
      <Swatch name="Purple" hex="#702277" />
    </li>
    <li className="Palette-swatch">
      <Swatch name="Orange" hex="#e86c00" />
    </li>
    <li className="Palette-swatch">
      <Swatch name="Black" hex="#1d1d1d" />
    </li>
    <li className="Palette-swatch ">
      <Swatch name="White" hex="#ffffff" hasBorder />
    </li>
    <li className="Palette-swatch">
      <Swatch name="Red" hex="#c30000" />
    </li>
  </ul>
);

export default Palette;
