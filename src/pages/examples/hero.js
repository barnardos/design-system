import Helmet from "react-helmet";
import React from "react";

import Hero from "../../components/Hero";

import "../index.css";

const Pages = () => (
  <div className="Pages">
    <Helmet>
      <title>{`Standard example`}</title>
    </Helmet>
    <Hero title="Who we are" />
  </div>
);

export default Pages;
