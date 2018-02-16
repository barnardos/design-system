import Link from "gatsby-link";
import React from "react";

import "./index.css";

const Navigation = () => (
  <nav className="Navigation">
    <ul>
      <li className="Navigation-item">
        <Link className="Navigation-link" to="/principles/">
          Principles
        </Link>
      </li>
      <li className="Navigation-item">
        <Link className="Navigation-link" to="/typography-and-layout/">
          Typography and layout
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
