import React from "react";

import Flight from "../flight/flight.jsx";
import useSearch from "../../hooks/useSearch.js";

const FlightsList = (props) => {
  const {flights} = props;
  const {onMoreButtonClick} = useSearch();

  return (
    <section className="main__flights flights">
      <ul className="flights__list">
        {flights.slice(0, 11).map((flight) => {
          return (
            <Flight flight={flight.flight} key={flight.flightToken} />
          );
        })}
      </ul>
      <button className="flights__button" onClick={onMoreButtonClick}>Показать ещё</button>
    </section>
  );
};

export default FlightsList;
