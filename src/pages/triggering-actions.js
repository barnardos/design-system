import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Command from "../components/Command";
import Cite from "../components/Cite";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Submit from "../components/Submit";
import DesignSystemIndex from "../components/DesignSystemIndex";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";

import "../app.css";
import "./index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Triggering actions`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Triggering actions`}</Title>
    <DesignSystemIndex
      items={[
        {
          level: 1,
          text: "Command",
          to: "/triggering-actions/#command"
        },
        {
          level: 1,
          text: "Text Input",
          to: "/triggering-actions/#submit"
        }
      ]}
    />
    <Heading>{`Command`}</Heading>
    <Paragraph>{`Use this component for interactive triggers that don't submit data.`}</Paragraph>
    <div className="Pages-example">
      <Command>{`Print page`}</Command>
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Command">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/33">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Submit`}</Heading>
    <Paragraph>{`Use this component to trigger the submitting of form data.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`only use it once on each page`}</ListItem>
      <ListItem>{`use a verb, for example save`}</ListItem>
      <ListItem>{`only use the Green colour`}</ListItem>
    </BulletedList>
    <div className="Pages-example">
      <Submit text="Send application" />
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Submit">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/33">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </Layout>
);

export default Pages;
