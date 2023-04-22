import { Collapse, Text } from "@nextui-org/react";
import React from "react";
import "./AboutSunSign.css";
import { SunIcon } from "./SunIcon";

export const AboutSunSign = ({ signData }) => {
  return (
    <div className="p-5">
      <div className="d-flex align-items-center justify-content-center mb-3">
        <i className="bi bi-sun px-1"></i>
        <h2 className="mb-0 px-2">{signData.name}</h2>
        <i className="bi bi-sun px-1"></i>
      </div>

      <div>
        <h4>BASICS</h4>
        <p>
          <strong>Date Range </strong>
          {signData.date_range}
        </p>
        <p>
          <strong>Ruling Planet </strong>
          {signData.ruling_planet}
        </p>
        <p>
          <strong>Element </strong>
          {signData.element}
        </p>
        <p>
          <strong>Symbol </strong>
          {signData.symbol}
        </p>
        <p>
          <strong>Compatibility </strong>
          {signData.compatibility}
        </p>
        <p>
          <strong>Strengths </strong>
          {signData.strengths}
        </p>
        <p>
          <strong>Weaknesses </strong>
          {signData.weaknesses}
        </p>
      </div>
      <Collapse.Group>
        <Collapse title="About" arrowIcon={<SunIcon />}>
          <Text>{signData.about}</Text>
        </Collapse>
        <Collapse title="Love" arrowIcon={<SunIcon />}>
          <Text>{signData.love}</Text>
        </Collapse>
        <Collapse title="Relationship" arrowIcon={<SunIcon />}>
          <Text>{signData.relationship}</Text>
        </Collapse>
        <Collapse title="Health" arrowIcon={<SunIcon />}>
          <Text>{signData.health}</Text>
        </Collapse>
        <Collapse title="Career" arrowIcon={<SunIcon />}>
          <Text>{signData.career}</Text>
        </Collapse>
        <Collapse title="Nature" arrowIcon={<SunIcon />}>
          <Text>{signData.nature}</Text>
        </Collapse>
      </Collapse.Group>
    </div>
  );
};
