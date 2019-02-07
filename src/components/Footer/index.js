import PropTypes from "prop-types";
import React from "react";

import Link from "../Link";

import "./index.css";

const Footer = ({ children, items }) => (
  <footer className="Footer">
    {items && (
      <ul className="Footer-items">
        {items.map(({ text, href }, index) => (
          <li className="Footer-item" key={index}>
            <Link className="Footer-link" href={href}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    )}
    {children && <div className="Footer-children">{children}</div>}
    <p className="Footer-copyright">{`© Barnardo's`}</p>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
  items: PropTypes.array
};

export default Footer;
