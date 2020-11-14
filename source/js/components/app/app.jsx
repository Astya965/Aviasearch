import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {ActionCreator} from "../../store/reducer.js";

import Settings from "../settings/settings.jsx";
import FlightsList from "../flights-list/flights-list.jsx";

import useSearch from "../../hooks/useSearch.js";
import * as data from "../../mocks/flights.json";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionCreator.loadFlights(data.result.flights));
    dispatch(ActionCreator.loadOffers(data.result.bestPrices));
  }, [dispatch]);

  const {flights, offers} = useSearch();

  return offers || flights.length > 0 ? (
    <section className="main">
      <Settings offers={offers} />
      <FlightsList flights={flights} />
    </section>
  ) : ``;
};

export default App;
