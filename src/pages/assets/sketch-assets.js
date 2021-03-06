import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import Cite from "../../components/Cite";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Main from "../../components/Main";
import NumberedList from "../../components/NumberedList";
import Page from "../../components/Page";
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";

export default () => (
  <Page title="Sketch assets">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Assets",
          href: "/assets/"
        }
      ]}
    />
    <Main>
      <Title>Sketch assets</Title>
      <Paragraph>
        Designers and developers can{" "}
        <Link href="/product-kit/">use the Product Kit</Link> to design and
        prototype in the browser.
      </Paragraph>
      <Paragraph>
        Alternatively, you can use the{" "}
        <Link href="https://kimdal-hyeong.github.io/html-to-sketch-electron/download-analyst/">
          HTML to Sketch app
        </Link>{" "}
        to import components into Sketch.
      </Paragraph>
      <Paragraph>Following these steps:</Paragraph>
      <NumberedList>
        <ListItem>
          Paste ‘design-system.barnardos.org.uk’ into the address bar of the app
        </ListItem>
        <ListItem>Pick the component you need</ListItem>
        <ListItem>Click the ‘Draw’ button</ListItem>
      </NumberedList>
      <Cite>
        View{" "}
        <Link href="https://github.com/barnardos/design-system/issues/582">
          sketch assets research
        </Link>{" "}
        on GitHub.
      </Cite>
      <Pagination
        previous={{
          href: "/assets/web-assets",
          label: "Web assets"
        }}
      />
    </Main>
  </Page>
);
