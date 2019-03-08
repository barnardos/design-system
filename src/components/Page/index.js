import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import Layout from "../Layout";
import SkipLink from "../SkipLink";
import Site from "../Site";
import DocSearch from "../DocSearch";

const Page = ({ children, title }) => (
  <Site description="The Barnardo’s Design System website.">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Layout>
      <SkipLink />
      <Header
        search={<DocSearch />}
        title="Go to the Barnardo’s Design System homepage"
      />
      {children}
      <Footer />
    </Layout>
  </Site>
);

Page.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string
};

export default Page;
