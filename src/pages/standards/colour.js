import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import Cite from "../../components/Cite";
import Code from "../../components/Code";
import ColourFigure from "../../components/ColourFigure";
import ColourGreyFigure from "../../components/ColourGreyFigure";
import Content from "../../components/Content";
import Contents from "../../components/Contents";
import ContentsMenu from "../../components/ContentsMenu";
import Figure from "../../components/Figure";
import Figures from "../../components/Figures";
import Heading from "../../components/Heading";
import Link from "../../components/Link";
import Main from "../../components/Main";
import Page from "../../components/Page";
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import Subheading from "../../components/Subheading";
import Swatches from "../../components/Swatches";
import Title from "../../components/Title";
import Topic from "../../components/Topic";

export const items = [
  {
    text: "Brand colours",
    href: "/standards/colour/#brand-colours"
  },
  {
    text: "Colour scale",
    href: "/standards/colour/#colour-scale",
    items: [
      {
        text: "Generating colour scale",
        href: "/standards/colour/#generating-colour-scale"
      }
    ]
  },
  {
    text: "Light grey",
    href: "/standards/colour/#light-grey"
  }
];

export default () => (
  <Page title="Colour">
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
      <Topic>Design</Topic>
      <Title>Colour</Title>
      <Contents>
        <ContentsMenu items={items} />
        <Content>
          <Heading>Brand colours</Heading>
          <Paragraph>You should use the brand colours.</Paragraph>
          <Subheading>Primary</Subheading>
          <Swatches
            swatches={[
              [{ label: "Green", hex: "#558200", primary: true }],
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
          <Subheading>Secondary</Subheading>
          <Swatches
            swatches={[
              [{ label: "Orange", hex: "#e86c00", primary: true }],
              [{ label: "Pink", hex: "#cc0070", primary: true }],
              [{ label: "Purple", hex: "#6e2066", primary: true }],
              [{ label: "Teal", hex: "#0099a9", primary: true }]
            ]}
          />
          <Subheading>Focus</Subheading>
          <Swatches
            swatches={[[{ label: "Yellow", hex: "#ffbf47", primary: true }]]}
          />
          <Subheading>Errors</Subheading>
          <Swatches
            swatches={[[{ label: "Red", hex: "#c30000", primary: true }]]}
          />
          <Paragraph>
            If your product isn’t Barnardo’s branded you don’t need to use the
            brand colours, but you should follow the colour scale.
          </Paragraph>
          <Heading>Colour scale</Heading>
          <Paragraph>
            You should use a scale of 10% increments for tints, shades and alpha
            (opacity).
          </Paragraph>
          <Figures>
            <Figure caption="Green with black (shade) applied in 10% increments.">
              <ColourFigure type="shade" />
            </Figure>
            <Figure caption="Green with white (tint) applied in 10% increments.">
              <ColourFigure type="tint" />
            </Figure>
          </Figures>
          <Subheading>Generating colour scale</Subheading>
          <Paragraph>
            You can use the <Code>color-mod</Code> function to generate this
            scale in CSS.
          </Paragraph>
          <Figures>
            <Figure caption="20% tint of the brand Green.">
              <Paragraph>
                <Code>color: color-mod(var(--green) tint(20%));</Code>
              </Paragraph>
            </Figure>
          </Figures>
          <Paragraph>
            If you need to create hex values of the colour scale, you can use
            the{" "}
            <Link href="https://maketintsandshades.com/">
              tint and shade generator
            </Link>
            .
          </Paragraph>
          <Heading>Light grey</Heading>
          <Paragraph>
            As an exception to the colour scale, you can use a 95% tint of Black
            for backgrounds.
          </Paragraph>
          <Figures>
            <Figure caption="95% tint of Black">
              <ColourGreyFigure />
            </Figure>
          </Figures>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/issues/14">
              colour research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Pagination
            next={{
              href: "/standards/typography",
              label: "Typography"
            }}
          />
        </Content>
      </Contents>
    </Main>
  </Page>
);
