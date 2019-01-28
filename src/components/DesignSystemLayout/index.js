import PropTypes from "prop-types";
import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import Layout from "../Layout";
import SkipLink from "../SkipLink";

const DesignSystemLayout = ({ children }) => (
  <Layout>
    <SkipLink />
    <Header title="Go to the Barnardo's Design System homepage" />
    {children}
    <Footer />
  </Layout>
);

DesignSystemLayout.propTypes = {
  children: PropTypes.any
};

export default DesignSystemLayout;
