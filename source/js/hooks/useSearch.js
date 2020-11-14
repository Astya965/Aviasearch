import {useSelector, useDispatch} from "react-redux";
import {ActionCreator, getOffers, getCurrentFlights, getCurrentSort, getOffest, getFlights} from "../store/reducer.js";
import {OFFSET} from "../utils/constants.js";

const useSearch = () => {
  const flights = useSelector(getCurrentFlights);
  const maxFlightsCount = useSelector(getFlights).length;
  const offers = useSelector(getOffers);
  const currentSort = useSelector(getCurrentSort);
  const offest = useSelector(getOffest);
  const dispatch = useDispatch();


  const onSortOptionClick = (evt) => {
    dispatch(ActionCreator.setCurrentSort(evt.target.value));
  };

  const onMoreButtonClick = () => {
    if (maxFlightsCount >= offest + OFFSET) {
      dispatch(ActionCreator.incrementOffset(OFFSET));
    } else {
      dispatch(ActionCreator.incrementOffset(maxFlightsCount - offest));
    }
  };

  return {
    flights,
    maxFlightsCount,
    offers,
    currentSort,
    onSortOptionClick,
    onMoreButtonClick
  };
};

export default useSearch;
