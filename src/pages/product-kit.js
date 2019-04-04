import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Lede from "../components/Lede";
import Main from "../components/Main";
import Page from "../components/Page";
import SignpostLink from "../components/SignpostLink";
import Title from "../components/Title";

export default () => (
  <Page title="Product kit">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        }
      ]}
    />
    <Main>
      <Title>Product kit</Title>
      <Lede>Providing a foundation to start developing your product.</Lede>
      <SignpostLink href="https://barnardos-example-product.netlify.com/">
        View the product kit
      </SignpostLink>
    </Main>
  </Page>
);
