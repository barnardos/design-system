import PropTypes from "prop-types";
import React from "react";

import Feedback from "../Feedback";
import Layout from "../Layout";
import Link from "../Link";

const DesignSystemLayout = ({ children }) => (
  <Layout
    footer={<div>{`© Barnardo's ${new Date(Date.now()).getFullYear()}`}</div>}
  >
    {children}
    <Feedback title="Give feedback">
      {`Email the Design System team on `}
      <Link href="mailto:designsystem@barnardos.org.uk">
        {`designsystem@barnardos.org.uk`}
      </Link>
      {`.`}
    </Feedback>
  </Layout>
);

DesignSystemLayout.propTypes = {
  children: PropTypes.any
};

export default DesignSystemLayout;
