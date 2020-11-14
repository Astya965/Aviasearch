import React from "react";

import Flight from "../flight/flight.jsx";

const FlightsList = (props) => {
  const {flights} = props;

  return (
    <section className="main__flights flights">
      <ul className="flights__list">
        {flights.slice(0, 11).map((flight) => {
          return (
            <Flight flight={flight.flight} key={flight.flightToken} />
          );
        })}
      </ul>
      <button className="flights__button">Показать ещё</button>
    </section>
  );
};

export default FlightsList;
