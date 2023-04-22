import React from "react";
import "./AboutSunSign.css"

export const AboutSunSign = ({ signData }) => {
  return (
    <div >
      <h2>{signData.name}</h2>
      <div>
        <h5>Basics:</h5>
        <p>{signData.date_range}</p>
        <p>{signData.compatibility}</p>
        <p>{signData.element}</p>
        <p>{signData.ruling_planet}</p>
        <p>{signData.symbol}</p>
        <p>{signData.strengths}</p>
        <p>{signData.weaknesses}</p>
      </div>
      <div>
        <h5>About:</h5>
        <p>{signData.about}</p>
      </div>
      <div>
        <h5>Love:</h5>
        <p>{signData.love}</p>
      </div>
      <div>
        <h5>Career:</h5>
        <p>{signData.career}</p>
      </div>
    </div>
  );
};
