export const SortType = {
  TO_HIGH_PRICE: `to-high`,
  TO_LOW_PRICE: `to-low`,
  FLIGHT_DURATION: `flight_duration`,
};

export const SORTS = [
  {
    type: SortType.TO_HIGH_PRICE,
    text: `по возрастанию цены`,
  },
  {
    type: SortType.TO_LOW_PRICE,
    text: `по убыванию цены`,
  },
  {
    type: SortType.FLIGHT_DURATION,
    text: `по времени в пути`,
  },
];
