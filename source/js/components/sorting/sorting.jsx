import React from "react";

import {SORTS} from "../../utils/constants.js";
import useSearch from "../../hooks/useSearch.js";

const Sorting = () => {
    const {currentSort, onSortOptionClick} = useSearch();

    return (
      <section className="settings_item sorting">
        <h3 className="sorting__title">Сортировать</h3>
        <ul className="sorting__list">
          {SORTS.map((option) => {
            return (
              <li className="sorting__option" key={`option-${option.type}`}>
                <input className="sorting__input" id={option.type} type="radio" name="sorting-type"
                  value={option.type} defaultChecked={currentSort === option.type ? `checked` : ``}
                  onClick={onSortOptionClick} />
                <label className="sorting__label" htmlFor={option.type}> - {option.text}</label>
              </li>
            );
          })}
        </ul>
      </section>
    );
};

export default Sorting;
