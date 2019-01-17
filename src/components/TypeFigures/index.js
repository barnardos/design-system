import React from "react";

import Figure from "../Figure";

import "./index.css";

const TypeFigures = () => (
  <div className="TypeFigures">
    <Figure caption="1rem / 1.125^2 (roughly 13px)">
      <div className="TypeFigures-figure TypeFigures-figure--slotMinus2">{`This content is for children and young people`}</div>
    </Figure>
    <Figure caption="1rem / 1.125^1 (roughly 14px)">
      <div className="TypeFigures-figure TypeFigures-figure--slotMinus1">{`This content is for children and young people`}</div>
    </Figure>
    <Figure caption="1rem (base size)">
      <div className="TypeFigures-figure TypeFigures-figure--slot0">{`This content is for children and young people`}</div>
    </Figure>
    <Figure caption="1rem * 1.125^1 (roughly 18px)">
      <div className="TypeFigures-figure TypeFigures-figure--slot1">{`This content is for children and young people`}</div>
    </Figure>
    <Figure caption="1rem * 1.125^2 (roughly 20px)">
      <div className="TypeFigures-figure TypeFigures-figure--slot2">{`This content is for children and young people`}</div>
    </Figure>
    <Figure caption="1rem * 1.125^3 (roughly 23px)">
      <div className="TypeFigures-figure TypeFigures-figure--slot3">{`This content is for children and young people`}</div>
    </Figure>
    <Figure caption="1rem * 1.125^4 (roughly 26px)">
      <div className="TypeFigures-figure TypeFigures-figure--slot4">{`This content is for children and young people`}</div>
    </Figure>
    <Figure caption="1rem * 1.125^5 (roughly 29px)">
      <div className="TypeFigures-figure TypeFigures-figure--slot5">{`This content is for children and young people`}</div>
    </Figure>
    <Figure caption="1rem * 1.125^6 (roughly 32px)">
      <div className="TypeFigures-figure TypeFigures-figure--slot6">{`This content is for children and young people`}</div>
    </Figure>
    <Figure caption="1rem * 1.125^7 (roughly 36px)">
      <div className="TypeFigures-figure TypeFigures-figure--slot7">{`This content is for children and young people`}</div>
    </Figure>
  </div>
);

export default TypeFigures;
