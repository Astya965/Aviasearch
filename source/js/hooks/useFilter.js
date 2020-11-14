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

  return {
    maxPrice,
    minPrice,
    onMaxPriceFilterClick,
    onMinPriceFilterClick
  };
};

export default useFilter;
