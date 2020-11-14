import format from 'date-fns/format';
import intervalToDuration from 'date-fns/intervalToDuration'

const MONTHES = [`янв.`, `фев.`, ` мрт.`, `апр.`, `мая`, `июн.`, `июл.`, `авг.`, `сен.`, `окт.`, `нбр.`, `дек.`];
const DAYS_OF_WEEK = [`пн`, `вт`, `ср`, `чт`, `пт`, `сб`, `вс`];

/**
 * Получение времени на основе даты в формате HH:mm
 * @param {Number} date - Дата в unix формате
 * @return {String} Время события в формате HH:mm
 */
export const formatHoursMinutes = (date) => {
  return format(date, `HH:mm`);
};

/**
 * Получение времени на основе даты в формате D MMM ddd на русском языке
 * @param {Number} date - Дата в unix формате
 * @return {String} Дата события в формате D MMM ddd на русском языке
 */
export const formatDayMonth = (date) => {
  return `${format(date, `d`)} ${MONTHES[format(date, `M`)]} ${DAYS_OF_WEEK[format(date, `i`)]}`;
};

export const getDistanceFull = (departure, arrival) => {
  const duration = intervalToDuration({
    start: departure,
    end: arrival
  });

  return `${duration.days > 0 ? duration.days + ` день` : ``} ${duration.hours > 0 ? duration.hours + ` ч` : ``} ${duration.minutes} мин`;
  // Тут тоже неплохо завести словарь
};
