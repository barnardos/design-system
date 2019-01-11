import PropTypes from "prop-types";
import React from "react";

import Feedback from "../Feedback";
import Layout from "../Layout";
import Link from "../Link";
import Paragraph from "../Paragraph";

const DesignSystemLayout = ({ children }) => (
  <Layout footer={<div>{`© Barnardo's 2018`}</div>}>
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
  </Layout>
);

DesignSystemLayout.propTypes = {
  children: PropTypes.any
};

export default DesignSystemLayout;
