import { Link as GatsbyLink } from "gatsby";
import Helmet from "react-helmet";
import React from "react";
import Link from "../../components/Link";
import Breadcrumbs from "../../components/Breadcrumbs";
import Filter from "../../components/Filter";
import HeadingOne from "../../components/HeadingOne";
import Layout from "../../components/Layout";
import ListItem from "../../components/ListItem";
import Paragraph from "../../components/Paragraph";
import SubmitControls from "../../components/SubmitControls";
import TableOfContents from "../../components/TableOfContents";
import Title from "../../components/Title";
import UnorderedList from "../../components/UnorderedList";

import "../../app.css";
import "../index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Filtering`}</title>
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
    <Title>{`Filtering`}</Title>
    <TableOfContents
      items={[
        {
          level: 1,
          text: "Filter",
          to: "#filter"
        }
      ]}
    />
    <Paragraph>{`When filtering you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>
        {`follow the guidance for `}
        <GatsbyLink to="/guidance/requesting-information/">{`requesting information`}</GatsbyLink>
      </ListItem>
      <ListItem>{`avoid too many filters`}</ListItem>
      <ListItem>{`show common filters at all times`}</ListItem>
      <ListItem>{`dynamically remove filters that have no results`}</ListItem>
      <ListItem>{`show the active filters`}</ListItem>
      <ListItem>{`include a way to undo each filter`}</ListItem>
      <ListItem>{`show the number of results`}</ListItem>
    </UnorderedList>
    <HeadingOne>{`Filter`}</HeadingOne>
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
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Filter">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/79">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
  </Layout>
);

export default Pages;
