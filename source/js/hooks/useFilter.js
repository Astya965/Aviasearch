import {useDispatch} from "react-redux";
import {ActionCreator} from "../store/reducer.js";

const useFilter = () => {
  const dispatch = useDispatch();

  const onMaxPriceFilterClick = (evt) => {
    dispatch(ActionCreator.setFilters({maxPriceFilter: evt.target.value}));
  };

  const onMinPriceFilterClick = (evt) => {
    dispatch(ActionCreator.setFilters({minPriceFilter: evt.target.value}));
  };

  const onCheckboxFilterClick = (elemClass, filterType) => {
    const filtersUnchecked = document.querySelectorAll(`.${elemClass}`);
    const carriersFilter = Array.from(filtersUnchecked).filter((filter) => !filter.checked).map((filter) => filter.value);
    dispatch(ActionCreator.setFilters({[filterType]: carriersFilter}));
  };

  return {
    onMaxPriceFilterClick,
    onMinPriceFilterClick,
    onCheckboxFilterClick
  };
};

export default useFilter;
