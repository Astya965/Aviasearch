export const OFFSET = 4;

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

export const DAYS_MAP = {
  one: `день`,
  few: `дня`,
  other: `дней`,
};

export const ADULTS_MAP = {
  one: `взрослого пассажира`,
  many: `взрослых пассажиров`,
};

export const CHILDREN_MAP = {
  one: `ребёнка`,
  many: `детей`,
};

export const TRANSFERS_MAP = {
  one: `пересадка`,
  few: `пересадки`,
  other: `пересадок`,
};
