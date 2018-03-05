import React from "react";

import Swatch from "../Swatch";

import "./index.css";

const Swatches = () => (
  <ul className="Swatches">
    <li className="Swatches-swatchGroup">
      <Swatch label="30% tint" hex="#a7d04d" />
      <Swatch label="20% tint" hex="#9ac933" />
      <Swatch label="10% tint" hex="#8ec31a" />
      <Swatch label="Green" hex="#81bc00" primary />
      <Swatch label="10% shade" hex="#74a900" />
      <Swatch label="20% shade" hex="#679600" />
      <Swatch label="30% shade" hex="#5a8300" />
    </li>
    <li className="Swatches-swatchGroup">
      <Swatch label="30% tint" hex="#db4d9b" />
      <Swatch label="20% tint" hex="#d6338d" />
      <Swatch label="10% tint" hex="#d11a7f" />
      <Swatch label="Pink" hex="#cc0070" primary />
      <Swatch label="10% shade" hex="#b70065" />
      <Swatch label="20% shade" hex="#a3005a" />
      <Swatch label="30% shade" hex="#8e004e" />
    </li>
    <li className="Swatches-swatchGroup">
      <Swatch label="30% tint" hex="#4db8c3" />
      <Swatch label="20% tint" hex="#33adba" />
      <Swatch label="10% tint" hex="#1aa3b2" />
      <Swatch label="Teal" hex="#0099a9" primary />
      <Swatch label="10% shade" hex="#008998" />
      <Swatch label="20% shade" hex="#007a87" />
      <Swatch label="30% shade" hex="#006b76" />
    </li>
    <li className="Swatches-swatchGroup">
      <Swatch label="30% tint" hex="#9b65a0" />
      <Swatch label="20% tint" hex="#8d4e92" />
      <Swatch label="10% tint" hex="#7f3985" />
      <Swatch label="Purple" hex="#702277" primary />
      <Swatch label="10% shade" hex="#651f6b" />
      <Swatch label="20% shade" hex="#5a1b5f" />
      <Swatch label="30% shade" hex="#4e1853" />
    </li>
    <li className="Swatches-swatchGroup">
      <Swatch label="30% tint" hex="#ef984d" />
      <Swatch label="20% tint" hex="#ed8933" />
      <Swatch label="10% tint" hex="#ea7b1a" />
      <Swatch label="Orange" hex="#e86c00" primary />
      <Swatch label="10% shade" hex="#d06100" />
      <Swatch label="20% shade" hex="#ba5600" />
      <Swatch label="30% shade" hex="#a24b00" />
    </li>
    <li className="Swatches-swatchGroup">
      <Swatch label="White" hex="#ffffff" bordered inverted primary />
      <Swatch label="90% tint" hex="#e9e9e9" inverted />
      <Swatch label="60% tint" hex="#a5a5a5" />
      <Swatch label="30% tint" hex="#616161" />
      <Swatch label="Black" hex="#1d1d1d" primary />
    </li>
    <li className="Swatches-swatchGroup">
      <Swatch label="Red" hex="#c30000" primary />
    </li>
  </ul>
);

export default Swatches;
