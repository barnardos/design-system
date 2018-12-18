import Helmet from "react-helmet";
import React from "react";

import Link from "../../components/Link";
import Breadcrumbs from "../../components/Breadcrumbs";
import Cite from "../../components/Cite";
import Filter from "../../components/Filter";
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import ListItem from "../../components/ListItem";
import Paragraph from "../../components/Paragraph";
import SinglelineTextControl from "../../components/SinglelineTextControl";
import SubmitControls from "../../components/SubmitControls";
import TableOfContents from "../../components/TableOfContents";
import Title from "../../components/Title";
import UnorderedList from "../../components/UnorderedList";

import "../../app.css";
import "../index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Patterns`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        },
        {
          text: "Guidance",
          to: "/guidance/"
        }
      ]}
    />
    <Title>{`Patterns`}</Title>
    <TableOfContents
      items={[
        {
          level: 1,
          text: "Requesting names",
          to: "/guidance/patterns/#requesting-names"
        },
        {
          level: 1,
          text: "Filtering",
          to: "/guidance/patterns/#filtering"
        }
      ]}
    />
    <Heading>{`Requesting names`}</Heading>
    <Paragraph>{`Use this pattern when asking for names. You should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`only ask for names when absolutely needed`}</ListItem>
      <ListItem>{`support all characters users may need to enter`}</ListItem>
      <ListItem>{`avoid asking for title`}</ListItem>
    </UnorderedList>
    <div className="Pages-figures">
      <figure className="Pages-figure">
        <SinglelineTextControl
          id="text-control-full-name-example"
          label="Full name"
          size={48}
        />
        <figcaption className="Pages-figureCaption">{`Where possible use a single name field to accommodates the broadest range of name types.`}</figcaption>
      </figure>
      <figure className="Pages-figure">
        <SinglelineTextControl
          id="text-control-first-name-example"
          label="First name"
          size={48}
        />
        <div
          style={{
            marginTop: "1rem"
          }}
        >
          <SinglelineTextControl
            id="text-control-last-name-example"
            label="Last name"
            size={48}
          />
        </div>
        <figcaption className="Pages-figureCaption">{`If your product needs to reliably extract first name and last name, use multiple name fields.`}</figcaption>
      </figure>
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/404">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Filtering`}</Heading>
    <Paragraph>{`When filtering you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`avoid too many filters`}</ListItem>
      <ListItem>{`show common filters at all times`}</ListItem>
      <ListItem>{`dynamically remove filters that have no results`}</ListItem>
      <ListItem>{`show the active filters`}</ListItem>
      <ListItem>{`include a way to undo each filter`}</ListItem>
      <ListItem>{`show the number of results`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <div
        style={{
          paddingBottom: "16rem",
          position: "relative"
        }}
      >
        <SubmitControls
          controls={[
            {
              control: "singlelineText",
              id: "submit-controls-single-line-text-example",
              hint: "For example town or postcode.",
              label: "Location",
              size: 48
            }
          ]}
          submit={{
            text: "Find"
          }}
        />
        <div
          style={{
            marginTop: "1rem"
          }}
        >
          <Filter
            submitControls={{
              controls: [
                {
                  control: "oneOfManyChoice",
                  id: "submit-controls-one-of-many-choice-example",
                  legend: "Within",
                  name: "submit-controls-one-of-many-choice-example",
                  choices: [
                    {
                      label: "any distance",
                      id:
                        "submit-controls-one-of-many-choice-control-example-anydistance"
                    },
                    {
                      label: "1 mile",
                      id:
                        "submit-controls-one-of-many-choice-control-example-1m"
                    },
                    {
                      label: "10 miles",
                      id:
                        "submit-controls-one-of-many-choice-control-example-10m"
                    },
                    {
                      label: "50 miles",
                      id:
                        "submit-controls-one-of-many-choice-control-example-50m"
                    }
                  ]
                },
                {
                  control: "anyOfManyChoice",
                  id: "submit-controls-one-of-many-choice-example",
                  legend: "Type",
                  name: "submit-controls-one-of-many-choice-example",
                  choices: [
                    {
                      label: "vegan",
                      id:
                        "submit-controls-any-of-many-choice-control-example-vegan"
                    },
                    {
                      label: "vegetarian",
                      id:
                        "submit-controls-any-of-many-choice-control-example-vegetarian"
                    }
                  ]
                }
              ],
              submit: {
                text: "Apply filters"
              }
            }}
          />
        </div>
      </div>
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Filter">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/79">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </Layout>
);

export default Pages;
