import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Cite from "../components/Cite";
import ColourFigure from "../components/ColourFigure";
import ColourGreyFigure from "../components/ColourGreyFigure";
import DesignSystemIndex from "../components/DesignSystemIndex";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Figure from "../components/Figure";
import Figures from "../components/Figures";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Pagination from "../components/Pagination";
import Paragraph from "../components/Paragraph";
import Swatches from "../components/Swatches";
import Title from "../components/Title";
import Topic from "../components/Topic";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Colour`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Topic>{`Design standards`}</Topic>
    <Title>{`Colour`}</Title>
    <DesignSystemIndex
      items={[
        {
          level: 1,
          text: "Brand colours",
          to: "/colour/#brand-colours"
        },
        {
          level: 1,
          text: "Colour scale",
          to: "/colour/#colour-scale"
        },
        {
          level: 1,
          text: "Light grey",
          to: "/colour/#light-grey"
        }
      ]}
    />
    <Paragraph>{`You should use:`}</Paragraph>
    <BulletedList>
      <ListItem>{`the brand colours`}</ListItem>
      <ListItem>{`a 10% increment scale for tints and shades`}</ListItem>
    </BulletedList>
    <Heading>{`Brand colours`}</Heading>
    <Subheading>{`Primary`}</Subheading>
    <Swatches
      swatches={[
        [{ label: "Green", hex: "#6aa300", primary: true }],
        [{ label: "Black", hex: "#1d1d1d", primary: true }],
        [
          {
            label: "White",
            hex: "#ffffff",
            bordered: true,
            inverted: true,
            primary: true
          }
        ]
      ]}
    />
    <Subheading>{`Secondary`}</Subheading>
    <Swatches
      swatches={[
        [{ label: "Orange", hex: "#e86c00", primary: true }],
        [{ label: "Pink", hex: "#cc0070", primary: true }],
        [{ label: "Purple", hex: "#6e2066", primary: true }],
        [{ label: "Teal", hex: "#0099a9", primary: true }]
      ]}
    />
    <Subheading>{`Errors`}</Subheading>
    <Swatches swatches={[[{ label: "Red", hex: "#c30000", primary: true }]]} />
    <Paragraph>{`If your product is not Barnardo's branded, you should still use the colour scale.`}</Paragraph>
    <Heading>{`Colour scale`}</Heading>
    <Figures>
      <Figure caption="Green with black (shade) applied in 10% increments.">
        <ColourFigure type="shade" />
      </Figure>
      <Figure caption="Green with white (tint) applied in 10% increments.">
        <ColourFigure type="tint" />
      </Figure>
    </Figures>
    <Heading>{`Light grey`}</Heading>
    <Paragraph>{`You can use a 95% tint of Black for backgrounds.`}</Paragraph>
    <Figures>
      <Figure caption="95% tint of Black">
        <ColourGreyFigure />
      </Figure>
    </Figures>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/14">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Pagination
      next={{
        to: "/typography",
        label: "Typography"
      }}
    />
  </DesignSystemLayout>
);

export default Page;
