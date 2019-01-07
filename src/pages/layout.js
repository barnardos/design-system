import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Subheading from "../components/Subheading";
import Layout from "../components/Layout";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import TextInput from "../components/TextInput/index";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";

import "../app.css";
import "./index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Layout`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Layout`}</Title>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`use multiples of 0.25rem (roughly 4px) for spacing`}</ListItem>
    </BulletedList>
    <div className="Pages-figures">
      <div
        style={{
          position: "relative"
        }}
      >
        <div
          className="Pages-figureKey"
          style={{
            height: "2rem",
            top: "0"
          }}
        />
        <div
          className="Pages-figureKey"
          style={{
            height: "3rem",
            top: "3rem"
          }}
        />
        <div
          className="Pages-figureKey"
          style={{
            height: "2rem",
            top: "7rem"
          }}
        />
        <div
          className="Pages-figureKey"
          style={{
            height: "3rem",
            top: "9.5rem"
          }}
        />
        <div
          style={{
            maxWidth: "19rem",
            paddingLeft: "6rem",
            position: "relative",
            zIndex: "1"
          }}
        >
          <figure className="Pages-figure Pages-figure--positioned">
            <Subheading>Contact details</Subheading>
            <figcaption className="Pages-figureCaption" style={{ top: 0 }}>
              <p
                className="Pages-figureCaptionItem"
                style={{ top: "0.5rem" }}
              >{`2.25rem`}</p>
            </figcaption>
          </figure>
          <figure className="Pages-figure Pages-figure--positioned">
            <Paragraph>{`So that we can send you the certificate.`}</Paragraph>
            <figcaption
              className="Pages-figureCaption"
              style={{ top: "-1rem" }}
            >
              <p
                className="Pages-figureCaptionItem"
                style={{ top: "0" }}
              >{`2rem`}</p>
              <p
                className="Pages-figureCaptionItem"
                style={{ top: "0.5rem" }}
              >{`3rem`}</p>
            </figcaption>
          </figure>
          <figure className="Pages-figure Pages-figure--positioned">
            <TextInput
              id="text-control-email-example"
              label="Email"
              size={48}
            />
            <figcaption
              className="Pages-figureCaption"
              style={{ top: "-1.75rem" }}
            >
              <p
                className="Pages-figureCaptionItem"
                style={{ top: "0.75rem" }}
              >{`2rem`}</p>
              <p
                className="Pages-figureCaptionItem"
                style={{ top: "0.75rem" }}
              >{`2.25rem`}</p>
              <p
                className="Pages-figureCaptionItem"
                style={{ top: "0.75rem" }}
              >{`1rem`}</p>
              <p
                className="Pages-figureCaptionItem"
                style={{ top: "1.25rem" }}
              >{`3rem`}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    <Paragraph>{`To create consistent layouts you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`use plenty white space between elements`}</ListItem>
      <ListItem>{`limit the use of keylines`}</ListItem>
    </BulletedList>
    <div className="Pages-figures">
      <figure className="Pages-figure">
        <div className="Pages-figureDemo Pages-figureDemo--thirds">
          <div className="Pages-figureDemoItem Pages-figureDemoItem--first" />
          <div className="Pages-figureDemoItem Pages-figureDemoItem--second" />
        </div>
        <figcaption className="Pages-figureCaption">
          {`Expands to two-thirds/one-third with gutter of 2rem`}
        </figcaption>
      </figure>
      <figure className="Pages-figure">
        <div className="Pages-figureDemo Pages-figureDemo--constrained">
          <div className="Pages-figureDemoItem" />
        </div>
        <figcaption className="Pages-figureCaption">
          {`Centered with maximum width of 28rem and shadow of 0.25rem`}
        </figcaption>
      </figure>
    </div>
  </Layout>
);

export default Pages;
