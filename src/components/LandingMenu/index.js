import PropTypes from "prop-types";
import React from "react";

import Heading from "../Heading";
import Link from "../Link";
import Paragraph from "../Paragraph";
import SignpostLink from "../SignpostLink";

import "./index.css";

const LandingMenuLink = ({ text, href }) => (
  <Paragraph>
    <SignpostLink href={href}>{text}</SignpostLink>
  </Paragraph>
);

const LandingMenuItem = ({ items, level, text, href }) => (
  <li className="LandingMenu-item">
    <Link className="LandingMenu-link" href={href}>
      {text}
    </Link>
    {items && <LandingMenuItems items={items} level={level + 1} />}
  </li>
);

const LandingMenuItems = ({ items, level }) => (
  <ul className={`LandingMenu-items LandingMenu-items--level${level}`}>
    {items.map((item, index) => (
      <LandingMenuItem key={index} level={level} {...item} />
    ))}
  </ul>
);

const LandingMenu = ({ heading, items, link }) => (
  <nav className="LandingMenu">
    {heading && <Heading>{heading}</Heading>}
    {link && <LandingMenuLink {...link} />}
    <LandingMenuItems items={items} level={1} />
  </nav>
);

LandingMenuItem.propTypes = {
  level: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  items: PropTypes.array
};

LandingMenuItems.propTypes = {
  level: PropTypes.number.isRequired,
  items: PropTypes.array
};

LandingMenuLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

LandingMenu.propTypes = {
  heading: PropTypes.string,
  items: PropTypes.array.isRequired,
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  })
};

export default LandingMenu;
