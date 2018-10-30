import PropTypes from "prop-types";
import React from "react";

import Link from "../Link";

import "./index.css";

const Footer = ({ children, items }) => (
  <footer className="Footer">
    <ul className="Footer-items">
      {items &&
        items.map(({ text, href }, index) => (
          <li className="Footer-item" key={index}>
            <Link className="Footer-link" href={href}>
              {text}
            </Link>
          </li>
        ))}
    </ul>
    <div className="Footer-children">{children}</div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array
};

export default Footer;
