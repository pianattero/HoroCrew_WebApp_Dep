import React from "react";
import "./TarotInfo.css"

export const TarotInfo = ({ tarot }) => {
  return (
    <div className="m-3">
      <h3>
        {tarot.name} || {tarot.sequence}
      </h3>
      <p>{tarot.desc}</p>
      <p>{tarot.rdesc}</p>
    </div>
  );
};
