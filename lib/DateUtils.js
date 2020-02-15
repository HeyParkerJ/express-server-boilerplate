"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var startHour = ' 17:00 PDT';
var weekStartHour = ' 00:00 PDT';
var endHour = ' 23:59 PDT'; // End monday at 11:59pm

var weeks = [{
  week: 1,
  weekStartDate: (0, _moment["default"])('1 Sep 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('5 Sep 19' + startHour),
  gamesEndDate: (0, _moment["default"])('9 Sep 19' + endHour)
}, {
  week: 2,
  weekStartDate: (0, _moment["default"])('10 Sep 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('12 Sep 19' + startHour),
  gamesEndDate: (0, _moment["default"])('16 Sep 19' + endHour)
}, {
  week: 3,
  weekStartDate: (0, _moment["default"])('17 Sep 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('19 Sep 19' + startHour),
  gamesEndDate: (0, _moment["default"])('23 Sep 19' + endHour)
}, {
  week: 4,
  weekStartDate: (0, _moment["default"])('24 Sep 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('26 Sep 19' + startHour),
  gamesEndDate: (0, _moment["default"])('30 Sep 19' + endHour)
}, {
  week: 5,
  weekStartDate: (0, _moment["default"])('1 Oct 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('3 Oct 19' + startHour),
  gamesEndDate: (0, _moment["default"])('7 Oct 19' + endHour)
}, {
  week: 6,
  weekStartDate: (0, _moment["default"])('8 Oct 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('10 Oct 19' + startHour),
  gamesEndDate: (0, _moment["default"])('14 Oct 19' + endHour)
}, {
  week: 7,
  weekStartDate: (0, _moment["default"])('15 Oct 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('17 Oct 19' + startHour),
  gamesEndDate: (0, _moment["default"])('21 Oct 19' + endHour)
}, {
  week: 8,
  weekStartDate: (0, _moment["default"])('22 Oct 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('23 Oct 19' + startHour),
  gamesEndDate: (0, _moment["default"])('28 Oct 19' + endHour)
}, {
  week: 9,
  weekStartDate: (0, _moment["default"])('29 Oct 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('31 Oct 19' + startHour),
  gamesEndDate: (0, _moment["default"])('4 Nov 19' + endHour)
}, {
  week: 10,
  weekStartDate: (0, _moment["default"])('5 Nov 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('7 Nov 19' + startHour),
  gamesEndDate: (0, _moment["default"])('11 Nov 19' + endHour)
}, {
  week: 11,
  weekStartDate: (0, _moment["default"])('12 Nov 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('14 Nov 19' + startHour),
  gamesEndDate: (0, _moment["default"])('18 Nov 19' + endHour)
}, {
  week: 12,
  weekStartDate: (0, _moment["default"])('19 Nov 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('21 Nov 19' + startHour),
  gamesEndDate: (0, _moment["default"])('25 Nov 19' + endHour)
}, {
  week: 13,
  weekStartDate: (0, _moment["default"])('26 Nov 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('28 Nov 19' + startHour),
  gamesEndDate: (0, _moment["default"])('02 Dec 19' + endHour)
}, {
  week: 14,
  weekStartDate: (0, _moment["default"])('03 Dec 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('05 Dec 19' + startHour),
  gamesEndDate: (0, _moment["default"])('09 Dec 19' + endHour)
}, {
  week: 15,
  weekStartDate: (0, _moment["default"])('10 Dec 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('12 Dec 19' + startHour),
  gamesEndDate: (0, _moment["default"])('16 Dec 19' + endHour)
}, {
  week: 16,
  weekStartDate: (0, _moment["default"])('18 Dec 19' + weekStartHour),
  gamesStartDate: (0, _moment["default"])('22 Dec 19' + startHour),
  gamesEndDate: (0, _moment["default"])('23 Dec 19' + endHour)
}];

function isDateDuringGames(date) {
  var weekIsBetweenGames = false;
  weeks.forEach(function (week) {
    if ((0, _moment["default"])(date).isBetween(week.gamesStartDate, week.gamesEndDate)) {
      weekIsBetweenGames = true;
    }
  });
  return weekIsBetweenGames;
}

function determineWeekOfSubmission(date) {
  var isDateDuringGames = this.isDateDuringGames(date);
  var weekOfSubmission;
  console.log('isdateduringgames', isDateDuringGames);

  if (isDateDuringGames) {
    throw new Error('Not a valid submission time: ' + date);
  } else {
    weeks.forEach(function (week) {
      if ((0, _moment["default"])(date).isBetween(week.weekStartDate, week.gamesEndDate)) {
        weekOfSubmission = week.week;
      }
    });
  }

  console.log('week of submission', weekOfSubmission);
  return weekOfSubmission;
}

var _default = {
  isDateDuringGames: isDateDuringGames,
  determineWeekOfSubmission: determineWeekOfSubmission
};
exports["default"] = _default;