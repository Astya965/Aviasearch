import React from "react";

import Sorting from "../sorting/sorting.jsx";
import Filters from "../filter/filters.jsx";

const Settings = (props) => {
  const {offers} = props;
  const settings = document.querySelector('.settings__inner');

  const handleToggleClick = () => {
    settings.classList.toggle('visually-hidden');
  }

  return (
    <div className="main__settings settings">
      <button className="settings__toggle" onClick={handleToggleClick}>
        <svg className="settings__svg" viewBox="0 0 100 80" width="40" height="40" fill="#0087C9">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
        <span className="visually-hidden">Открыть/закрыть меню сортировки и фильтр</span>
      </button>
      <div className="settings__inner">
        <Sorting />
        <Filters offers={offers} />
      </div>
    </div>
  );
};

export default Settings;
