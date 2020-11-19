import React from "react";
import * as uniq from "lodash.uniq";

import {formatHoursMinutes, formatDayMonth, getDistanceFull} from "../../utils/date.js";
import {TRANSFERS_MAP} from "../../utils/constants.js";
import {connectNounAndNumral} from "../../utils/utils.js";

const Leg = (props) => {
  const {segments} = props.info;

  const departureDate = new Date(segments[0].departureDate);
  const arrivalDate = new Date(segments[segments.length - 1].arrivalDate);

  const companies = segments.map((segment) => {
    return segment.airline.caption;
  });

  const uniqCompamies = uniq(companies);

  return segments.length > 0 ? (
    <li className="legs__item leg">
      <div className="leg__route">
        {segments[0].departureCity ? segments[0].departureCity.caption : ``},&#160;
        {segments[0].departureAirport ? segments[0].departureAirport.caption : ``}
        <span className="leg__aeroportID">
          ({segments[0].departureAirport.uid})
          <span className="leg__arrow">&#8594;</span>
        </span>
        {segments[segments.length - 1].arrivalCity ? segments[segments.length - 1].arrivalCity.caption : ``},&#160;
        {segments[segments.length - 1].arrivalAirport ? segments[segments.length - 1].arrivalAirport.caption : ``}
        <span className="leg__aeroportID">
          ({segments[segments.length - 1].arrivalAirport.uid})
        </span>
      </div>

      <div className="leg__time-info">
        <div className="leg__departure">
          <span className="leg__time">{formatHoursMinutes(departureDate)} </span>
          <span className="leg__date">{formatDayMonth(departureDate)} </span>
        </div>
        <span className="leg__duration">{getDistanceFull(departureDate, arrivalDate)}</span>
        <div className="leg__arrival">
          <span className="leg__time">{formatHoursMinutes(arrivalDate)} </span>
          <span className="leg__date">{formatDayMonth(arrivalDate)} </span>
        </div>
      </div>

      <div className="leg__transfers">
        <span className="leg__transfers-text">
          {segments.length > 1 ? `${segments.length -1} ${connectNounAndNumral(segments.length - 1, TRANSFERS_MAP)}`: `Прямой рейс`}
        </span>
      </div>

      <div className="leg__company">Рейс {uniqCompamies.length > 1 ? `выполняют` : `выполняет`}: {uniqCompamies.join(`, `)}</div>
    </li>
  ) : ``;
};

export default Leg;
