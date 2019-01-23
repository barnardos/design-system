import PropTypes from "prop-types";
import React from "react";

import Feedback from "../Feedback";
import Footer from "../Footer";
import Header from "../Header";
import Layout from "../Layout";
import Link from "../Link";
import Main from "../Main";
import Paragraph from "../Paragraph";
import SkipLink from "../SkipLink";

const DesignSystemLayout = ({ children }) => (
  <Layout>
    <SkipLink />
    <Header />
    <Main>
      {children}
      <Feedback title="Give feedback">
        <Paragraph>
          {`Email the Design System team on `}
          <Link href="mailto:designsystem@barnardos.org.uk">
            {`designsystem@barnardos.org.uk`}
          </Link>
          {`.`}
        </Paragraph>
        <Paragraph>
          {`Contribute to the discussion on `}
          <Link href="https://barnardos.facebook.com/groups/design.system/">{`Workplace`}</Link>
          {`.`}
        </Paragraph>
      </Feedback>
    </Main>
    <Footer>{`© Barnardo's ${new Date(Date.now()).getFullYear()}`}</Footer>
  </Layout>
);

DesignSystemLayout.propTypes = {
  children: PropTypes.any
};

export default DesignSystemLayout;
