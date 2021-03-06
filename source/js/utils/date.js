import format from 'date-fns/format';
import intervalToDuration from 'date-fns/intervalToDuration';
import {DAYS_MAP} from "./constants.js";
import {connectNounAndNumral} from "./utils.js";

const MONTHES = [`янв.`, `фев.`, ` мрт.`, `апр.`, `мая`, `июн.`, `июл.`, `авг.`, `сен.`, `окт.`, `нбр.`, `дек.`];
const DAYS_OF_WEEK = [`пн`, `вт`, `ср`, `чт`, `пт`, `сб`, `вс`];

/**
 * Получение времени на основе даты в формате HH:mm
 * @param {Date} date - Дата в unix формате
 * @return {String} Время события в формате HH:mm
 */
export const formatHoursMinutes = (date) => {
  return format(date, `HH:mm`);
};

/**
 * Получение времени на основе даты в формате D MMM ddd на русском языке
 * @param {Date} date - Дата в unix формате
 * @return {String} Дата события в формате D MMM ddd на русском языке
 */
export const formatDayMonth = (date) => {
  return `${format(date, `d`)} ${MONTHES[format(date, `M`)]} ${DAYS_OF_WEEK[format(date, `i`)]}`;
};

/**
 * Вычисление длительности пути в формате d h m на русском языке
 * @param {Date} departure - Дата отправления в unix формате
 * @param {Date} arrival - Дата прибытия в unix формате
 * @return {String} Длительность пути в формате d h m на русском языке
 */
export const getDistanceFull = (departure, arrival) => {
  const duration = intervalToDuration({
    start: departure,
    end: arrival
  });

  return `${duration.days > 0 ? duration.days + ` ${connectNounAndNumral(duration.days, DAYS_MAP)}` : ``}
    ${duration.hours > 0 ? duration.hours + ` ч` : ``} ${duration.minutes} мин`;
};
