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
      <title>{`Reading age`}</title>
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
      <Topic>{`Writing`}</Topic>
      <Title>{`Reading age`}</Title>
      <Paragraph>{`Aim for a reading age of about 9. For technical and professional content, aim for 12.`}</Paragraph>
      <Paragraph>{`You can check the reading age of content using:`}</Paragraph>
      <BulletedList>
        <ListItem>
          <Link href="http://www.hemingwayapp.com/">{`the Hemingway app`}</Link>
        </ListItem>
        <ListItem>
          <Link href="https://support.office.com/en-gb/article/Test-your-document-s-readability-85b4969e-e80a-4777-8dd3-f7fc3c8b3fd2">{`Microsoft Word`}</Link>
        </ListItem>
        <ListItem>
          <Link href="https://readable.io/">{`Readable`}</Link>
        </ListItem>
      </BulletedList>
      <Cite>
        {`View `}
        <Link href="https://github.com/barnardos/design-system/issues/510">{`reading age research`}</Link>
        {` on GitHub.`}
      </Cite>
      <Pagination
        previous={{
          href: "/standards/voice-and-tone",
          label: "Voice and tone"
        }}
        next={{
          href: "/standards/formatting",
          label: "Formatting"
        }}
      />
    </Main>
  </Page>
);
