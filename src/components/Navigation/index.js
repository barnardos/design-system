import GatsbyLink from "gatsby-link";
import React from "react";

import "./index.css";

const Navigation = () => (
  <nav className="Navigation">
    <ul>
      <li className="Navigation-item">
        <GatsbyLink className="Navigation-link" to="/principles/">
          Principles
        </GatsbyLink>
      </li>
      <li className="Navigation-item">
        <GatsbyLink className="Navigation-link" to="/typography-and-layout/">
          Typography and layout
        </GatsbyLink>
      </li>
      <li className="Navigation-item">
        <GatsbyLink className="Navigation-link" to="/colour/">
          Colour
        </GatsbyLink>
      </li>
      <li className="Navigation-item">
        <GatsbyLink className="Navigation-link" to="/components/">
          Components
        </GatsbyLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
