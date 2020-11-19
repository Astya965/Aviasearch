import {createSelector} from "reselect";
import {SortType, OFFSET} from "../utils/constants.js";
import * as uniq from "lodash.uniq";

const initialState = {
  flights: [],
  offset: OFFSET,
  currentSort: SortType.TO_HIGH_PRICE,
  filters: {
    maxPriceFilter: null,
    minPriceFilter: null,
    segmentsNumberFilter: [],
    carriersFilter: []
  }
};

const ActionType = {
  LOAD_FLIGHTS: `LOAD_FLIGHTS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  INCREMENT_OFFSET: `INCREMENT_OFFSET`,
  SET_CURRENT_SORT: `SET_CURRENT_SORT`,
  SET_FILTERS: `SET_FILTERS`,
};

export const ActionCreator = {
  loadFlights: (flights) => ({
    type: ActionType.LOAD_FLIGHTS,
    payload: flights,
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),

  setCurrentSort: (sort) => ({
    type: ActionType.SET_CURRENT_SORT,
    payload: sort,
  }),

  incrementOffset: (offset) => ({
    type: ActionType.INCREMENT_OFFSET,
    payload: offset,
  }),

  setFilters: (filters) => ({
    type: ActionType.SET_FILTERS,
    payload: filters,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FLIGHTS:
      return {...state, flights: action.payload};

    case ActionType.LOAD_OFFERS:
      return {...state, offers: action.payload};

    case ActionType.INCREMENT_OFFSET:
      return {...state, offset: state.offset + action.payload};

    case ActionType.SET_CURRENT_SORT:
      return {...state, currentSort: action.payload};

    case ActionType.SET_FILTERS:
      return {...state, filters: {
        ...state.filters,
        ...action.payload,
      }};

    default: return state;
  }
};

export const getOffers = (state) => {
  return state.offers;
}

export const getCurrentSort = (state) => {
  return state.currentSort;
};

export const getFilters = (state) => {
  return state.filters;
};

export const getOffest = (state) => {
  return state.offset;
}

export const getFlights = (state) => {
  return state.flights;
};

// Не забыть потом добавить getCurrentFilter
export const getCurrentFlights = createSelector(
  getFlights,
  getOffest,
  getCurrentSort,
  getFilters,
  (flights, offset, currentSort, filters) => {

    let result = flights.slice();

    if (filters.segmentsNumberFilter.length > 0) {
      result = result.filter((item) => {
        const transfersArray = item.flight.legs.map((leg) => leg.segments.length - 1);
        return filters.segmentsNumberFilter.reduce((flag, filter) => {
          return flag & !transfersArray.includes(+filter)}, true);
      });
    }

    if (filters.carriersFilter.length > 0) {
      result = result.filter((item) => {
        const carriersArray = item.flight.legs.reduce((array, leg) =>
          array.concat(leg.segments.map((segment) => segment.airline.uid)), []);
        const uniqCarriers = uniq(carriersArray);

        return filters.carriersFilter.reduce((flag, filter) => {
          return flag & !uniqCarriers.includes(filter)}, true);
      });
    }

    if (filters.minPriceFilter > 0) {
      result = result.filter((item) => {
        return +item.flight.price.total.amount >= +filters.minPriceFilter;
      });
    }

    if (filters.maxPriceFilter > 0) {
      result = result.filter((item) => {
        return +item.flight.price.total.amount <= +filters.maxPriceFilter;
      });
    }

    switch (currentSort) {
      case SortType.TO_HIGH_PRICE:
        result = result.sort((a, b) => (a.flight.price.total.amount - b.flight.price.total.amount));
        break;
      case SortType.TO_LOW_PRICE:
        result = result.sort((a, b) => (b.flight.price.total.amount - a.flight.price.total.amount));
        break;
      case SortType.FLIGHT_DURATION:
        result = result.sort((a, b) => (
          a.flight.legs.reduce((sum, leg) => {return sum + leg.duration}, 0) - b.flight.legs.reduce((sum, leg) => {return sum + leg.duration}, 0)));
        break;
    }

    return result.slice(0, offset);
  }
);


