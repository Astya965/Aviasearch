import React from "react";

import Flight from "../flight/flight.jsx";
import useSearch from "../../hooks/useSearch.js";

const FlightsList = (props) => {
  const {flights} = props;
  const {offset, maxFlightsCount, onMoreButtonClick} = useSearch();
  console.log(flights)
  return flights.length >= 0 ? (
    <section className="main__flights flights">
      <ul className="flights__list">
        {flights.length > 0 ? flights.map((flight) => {
          return (
            <Flight flight={flight.flight} key={flight.flightToken} />
          );
        }) : <div className="flights__empty">Нам не удалось ничего найти. Попробуйте поменять настройки</div>}
      </ul>
      {maxFlightsCount === offset ?  `` : <button className="flights__button" onClick={onMoreButtonClick}>Показать ещё</button>}
    </section>
  ) : ``;
};

export default FlightsList;
