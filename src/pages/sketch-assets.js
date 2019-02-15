import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Cite from "../components/Cite";
import NumberedList from "../components/NumberedList";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Main from "../components/Main";
import Content from "../components/Content";
import Topic from "../components/Topic";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Sketch assets`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        }
      ]}
    />

    <Main>
      <Content>
        <Topic>{`Assets`}</Topic>
        <Title>{`Sketch assets`}</Title>
        <Paragraph>
          {`When designing your product you should `}
          <Link href="https://www.npmjs.com/package/@barnardos/components">{`install the components`}</Link>
          {` and design in the browser.`}
        </Paragraph>
        <Paragraph>
          {`Alternatively, you can import components into Sketch using the `}
          <Link href="https://kimdal-hyeong.github.io/html-to-sketch-electron/download-analyst/">{`HTML to Sketch app`}</Link>
          {` by following these steps:`}
        </Paragraph>
        <NumberedList>
          <ListItem>{`Paste
        'design-system.barnardos.org.uk' into the address bar`}</ListItem>
          <ListItem>{`Pick the component you need`}</ListItem>
          <ListItem>{`Click the 'Draw' button`}</ListItem>
        </NumberedList>
        <Cite>
          {`View `}
          <Link href="https://github.com/barnardos/design-system/issues/582">{`sketch assets research`}</Link>
          {` on GitHub.`}
        </Cite>
      </Content>
    </Main>
  </DesignSystemLayout>
);

export default Page;