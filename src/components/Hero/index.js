import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Hero = ({ title }) => (
  <div className="Hero">
    <h1 className="Hero-title">
      <span className="Hero-mask">{title}</span>
    </h1>
    <img
      className="Hero-image"
      src="https://www.barnardos.org.uk/sites/default/files/styles/b_lg/public/uploads/boy%20leaning%20on%20fence.jpg?itok=qfqMK1ub"
      srcSet="https://www.barnardos.org.uk/sites/default/files/styles/b_xs/public/uploads/boy%20leaning%20on%20fence.jpg?itok=9d_5DYfz 500w, https://www.barnardos.org.uk/sites/default/files/styles/b_sm/public/uploads/boy%20leaning%20on%20fence.jpg?itok=UyqDGSeZ 768w, https://www.barnardos.org.uk/sites/default/files/styles/b_md/public/uploads/boy%20leaning%20on%20fence.jpg?itok=NK4Bgzy2 1024w, https://www.barnardos.org.uk/sites/default/files/styles/b_lg/public/uploads/boy%20leaning%20on%20fence.jpg?itok=qfqMK1ub 1440w"
      sizes="100vw"
      alt=""
    />
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired
};

export default Hero;
