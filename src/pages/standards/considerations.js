import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Cite from "../../components/Cite";
import Page from "../../components/Page";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Main from "../../components/Main";
import Topic from "../../components/Topic";

export default () => (
  <Page>
    <Helmet>
      <title>{`Considerations`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Standards",
          href: "/standards/"
        }
      ]}
    />
    <Main>
      <Topic>{`Accessibility`}</Topic>
      <Title>{`Considerations`}</Title>
      <Paragraph>
        {`You should pass the accessibility checks in `}
        <Link href="https://www.deque.com/axe/">{`aXe`}</Link>
        {`.`}
      </Paragraph>
      <Paragraph>{`You should also:`}</Paragraph>
      <BulletedList>
        <ListItem>{`make page titles unique and descriptive`}</ListItem>
        <ListItem>{`allow users to navigate only with a keyboard`}</ListItem>
        <ListItem>{`enable the viewport to be zoomed to at least 200%`}</ListItem>
        <ListItem>{`avoid relying on colour or icons to convey important information`}</ListItem>
      </BulletedList>
      <Cite>
        {`View `}
        <Link href="https://github.com/barnardos/design-system/issues/168">{`accessibility research`}</Link>
        {` on GitHub.`}
      </Cite>
      <Pagination
        next={{
          href: "/standards/viewport-scale",
          label: "Viewport scale"
        }}
      />
    </Main>
  </Page>
);
