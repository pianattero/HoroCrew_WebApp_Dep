import React from "react";
import "./DailyHoro.css";

export const DailyHoro = ({ horoscope }) => {
  return (
    <div className="p-5" id="daily">
      <div className="d-flex align-items-center justify-content-center mb-3">
        <h2 className="mb-0 px-2">Today's Horoscope</h2>
      </div>

      <div>
        <p>
          <strong>Mood</strong> {horoscope.mood} - <strong>Color</strong>{" "}
          {horoscope.color}
        </p>

        <p>{horoscope.description}</p>
      </div>

      <div className="mt-3">
        <h4>
          <em>To keep in mind..</em>
        </h4>

        <p>
          <strong>Stay close to</strong> {horoscope.compatibility}
        </p>
        <p>
          <strong>Lucky Number</strong> {horoscope.luckyNumber} -{" "}
          <strong>Lucky Time</strong> {horoscope.luckyTime}
        </p>
      </div>
    </div>
  );
};
