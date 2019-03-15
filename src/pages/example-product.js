import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Lede from "../components/Lede";
import Main from "../components/Main";
import Page from "../components/Page";
import SignpostLink from "../components/SignpostLink";
import Title from "../components/Title";

export default () => (
  <Page title="Example product">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        }
      ]}
    />
    <Main>
      <Title>Example product</Title>
      <Lede>Following the standards and components of the Design System.</Lede>
      <SignpostLink href="https://barnardos-example-product.netlify.com/">
        Go to example product
      </SignpostLink>
    </Main>
  </Page>
);
