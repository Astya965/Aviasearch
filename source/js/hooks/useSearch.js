import {useSelector, useDispatch} from "react-redux";
import {ActionCreator, getOffers, getCurrentFlights, getCurrentSort, getOffest} from "../store/reducer.js";

const useSearch = () => {
  const flights = useSelector(getCurrentFlights);
  const offers = useSelector(getOffers);
  const currentSort = useSelector(getCurrentSort);
  const offest = useSelector(getOffest);
  const dispatch = useDispatch();


  const onSortOptionClick = (evt) => {
    dispatch(ActionCreator.setCurrentSort(evt.target.value));
  };

  const onMoreButtonClick = () => {
    if (flights > offers) {
      dispatch(ActionCreator.incrementOffset());
    }
  };

  return {
    flights,
    offers,
    currentSort,
    onSortOptionClick,
    onMoreButtonClick
  };
};

export default useSearch;
