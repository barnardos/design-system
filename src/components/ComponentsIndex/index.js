import PropTypes from "prop-types";
import React from "react";

import BulletedList from "../BulletedList";
import Link from "../Link";
import ListItem from "../ListItem";

const ComponentsIndex = ({ items }) => (
  <BulletedList>
    {items
      .filter(item => item.level === 1)
      .map(({ href, text }, index) => (
        <ListItem key={index}>
          <Link href={href}>{text}</Link>
        </ListItem>
      ))}
  </BulletedList>
);

ComponentsIndex.propTypes = {
  items: PropTypes.array.isRequired
};

export default ComponentsIndex;
