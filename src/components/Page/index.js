import PropTypes from "prop-types";
import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import Layout from "../Layout";
import SkipLink from "../SkipLink";
import Site from "../Site";

const Page = ({ children }) => (
  <Site description="The Barnardo’s Design System website.">
    <Layout>
      <SkipLink />
      <Header title="Go to the Barnardo’s Design System homepage" />
      {children}
      <Footer />
    </Layout>
  </Site>
);

Page.propTypes = {
  children: PropTypes.any
};

export default Page;
