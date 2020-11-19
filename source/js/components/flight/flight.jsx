import React from "react";

import Leg from "../leg/leg.jsx";
import {ADULTS_MAP, CHILDREN_MAP} from "../../utils/constants.js";

const Flight = (props) => {
    const {flight} = props;
    const {price, legs} = flight;
    const {total, passengerPrices} = price;

    return flight ? (
      <li className="flights__item flight">

        <header className="flight__header">
          <img className="flight__img" src="https://via.placeholder.com/120x50" alt="Логотип компании" height="50" width="120"/>
          <div className="flight__price">
            <p className="flight__total">{total.amount} &#8381;</p>
            {passengerPrices.map((type) => {
              return (
              <p className="flight__passengers" key={`passenger-${type.passengerType.uid}`}>
                Стоимость для {type.passengerCount}
                {type.passengerType.uid === `ADULT` ? ` ${type.passengerCount === 1 ? ADULTS_MAP.one : ADULTS_MAP.many}`
                : ` ${type.passengerCount === 1 ? CHILDREN_MAP.one : CHILDREN_MAP.many}`}
              </p>
              );
            })}
          </div>
        </header>

        <ul className="flight_legs legs">
          {legs.map((leg) => {
            return (
              <Leg info={leg}
                key={leg.segments[0].airlineCode + leg.segments[0].flightNumber} />
            );
          })}
        </ul>
        <button className="flight__button">Выбрать</button>
      </li>

    ) : ``;
};

export default Flight;
