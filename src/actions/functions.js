export function getNextFourDays() {
 let date = new Date();
 let dateList = [];
 for (let i = 0; i < 4; i++) {
   dateList.push(date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear());
   date.setDate(date.getDate() + 1);
 }
 return dateList;
}

export function getNextFourDaysNames() {
 let date = new Date();
 let dateList = [];
 for (let i = 0; i < 4; i++) {
   dateList.push({
     weekday: getWeekDay(date),
     day: date.getDate(),
   });
   date.setDate(date.getDate() + 1);
 }
 return dateList;
}

export function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

export function getCalendar(month) {
  let date = new Date();
  let empty_day_list = [6,0,1,2,3,4,5];
  let calendar = [];
  date.setMonth(date.getMonth() + month);
  let current_month = date.getMonth();
  date.setDate(1);
  for (let i = 0; i < empty_day_list[date.getDay()]; i++) {
    calendar.push({id: date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ':' + i, name: ''});
  }
  while (date.getMonth() === current_month) {
    calendar.push({id: date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear(), name: date.getDate()});
    date.setDate(date.getDate() + 1);
  }
  return calendar;
}

export function getMonthAndYearDate(month) {
  let date = new Date();
  let month_list = ['Янв.', 'Фев.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Август', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'];
  date.setMonth(date.getMonth() + month);
  return month_list[date.getMonth()] + ' ' + date.getFullYear();
}