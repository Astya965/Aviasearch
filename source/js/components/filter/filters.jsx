import React from "react";

import useFilter from "../../hooks/useFilter.js";
import * as uniqBy from "lodash.uniqby";

const Filters = (props) => {
    const {ONE_CONNECTION, DIRECT} = props.offers;
    const allFlights = DIRECT.bestFlights.concat(ONE_CONNECTION.bestFlights);
    const allFlightPrices = allFlights.sort((a, b) => {
      return Number(a.price.amount) - Number(b.price.amount);
    });
    const allUniqFlightPrices = uniqBy(allFlightPrices, `carrier.uid`);

    const {onMaxPriceFilterClick, onMinPriceFilterClick, onCheckboxFilterClick} = useFilter();

    return (
      <section className="settings_item filters">
        <h3 className="filters__title">Фильтровать</h3>
        <ul className="filters__list">
          <li className="filters__item filter">
            <ul className="filter__list">
              <li className="filter__option">
                <input className="filter__input filter__input--segments" id="segmet-1" type="checkbox" name="segments-count" value="1" defaultChecked
                  onChange={() => onCheckboxFilterClick(`filter__input--segments`, `segmentsNumberFilter`)} />
                <label className="filter__label" htmlFor="segmet-1"> - 1 пересадка</label>
              </li>
              <li className="filter__option">
                <input className="filter__input filter__input--segments" id="segmet-0" type="checkbox" name="segments-count" value="0" defaultChecked
                  onChange={() => onCheckboxFilterClick(`filter__input--segments`, `segmentsNumberFilter`)} />
                <label className="filter__label" htmlFor="segmet-0"> - без пересадок</label>
              </li>
            </ul>
          </li>
          <li className="filters__item filter">
            <h4 className="filter__title">Цена</h4>
            <div className="filter__inner">
                <label className="filter__label" htmlFor="lowest-price">От</label>
                <input className="filter__input" id="lowest-price" type="nubmer" name="lowest-price" placeholder="0" onChange={onMinPriceFilterClick} />
                <label className="filter__label" htmlFor="highest-price">До</label>
                <input className="filter__input" id="highest-price" type="nubmer" name="highest-price" placeholder="1000000" onChange={onMaxPriceFilterClick} />
            </div>
          </li>
          <li className="filters__item filter">
            <h4 className="filter__title">Авиакопании</h4>
            <ul className="filter__list">
              {allUniqFlightPrices.map((option) => {
                return (
                  <li className="filter__option" key={option.carrier.uid}>
                    <input className="filter__input filter__input--carrier" id={`airline-${option.carrier.caption}`} type="checkbox" name="airline" value={option.carrier.uid} defaultChecked
                      onChange={() => onCheckboxFilterClick(`filter__input--carrier`, `carriersFilter`)} />
                    <label className="filter__label" htmlFor={`airline-${option.carrier.caption}`}>
                      <div className="filter__company">
                         - {option.carrier.caption.length > 20 ? `${option.carrier.caption.slice(0, 12)}...` : option.carrier.caption}
                      </div>
                      <div className="filter__price">от {option.price.amount.slice(0, -3)}р.</div>
                    </label>
                  </li>
                );
              })}
            </ul>


          </li>
        </ul>
      </section>
    );
};

export default Filters;
