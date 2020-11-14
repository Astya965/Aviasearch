import {useSelector, useDispatch} from "react-redux";
import {ActionCreator, getOffers, getCurrentFlights, getCurrentSort, getCurrentFilter} from "../store/reducer.js";

const useSearch = () => {
  const flights = useSelector(getCurrentFlights);
  const offers = useSelector(getOffers);
  const currentSort = useSelector(getCurrentSort);
  const dispatch = useDispatch();


  const onSortOptionClick = (evt) => {
    dispatch(ActionCreator.setCurrentSort(evt.target.value));
  };
  return {
    flights,
    offers,
    currentSort,
    onSortOptionClick,
  };
};

export default useSearch;
