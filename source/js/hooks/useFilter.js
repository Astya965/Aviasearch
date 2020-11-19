import {useSelector, useDispatch} from "react-redux";
import {ActionCreator, getMaxPriceFilter, getMinPriceFilter} from "../store/reducer.js";

const useFilter = () => {
  const maxPrice = useSelector(getMaxPriceFilter);
  const minPrice = useSelector(getMinPriceFilter);
  const dispatch = useDispatch();

  const onMaxPriceFilterClick = (evt) => {
    dispatch(ActionCreator.setMaxPriceFilter(evt.target.value));
  };

  const onMinPriceFilterClick = (evt) => {
    dispatch(ActionCreator.setMinPriceFilter(evt.target.value));
  };

  const onCheckboxFilterClick = (elemClass, filterType) => {
    const filtersUnchecked = document.querySelectorAll(`.${elemClass}`);
    const carriersFilter = Array.from(filtersUnchecked).filter((filter) => !filter.checked).map((filter) => filter.value);
    dispatch(ActionCreator.setFilters({[filterType]: carriersFilter}));
  };

  return {
    maxPrice,
    minPrice,
    onMaxPriceFilterClick,
    onMinPriceFilterClick,
    onCheckboxFilterClick
  };
};

export default useFilter;
