'use strict';

var DateBetween = function DateBetween(startDate, endDate, day_desc, hour_desc, min_desc, sec_desc) {
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var distance = endDate - startDate;

  if (distance < 0) {
    return "count down date expired";
  }

  var days = Math.floor(distance / day);
  var hours = Math.floor(distance % day / hour);
  var minutes = Math.floor(distance % hour / minute);
  var seconds = Math.floor(distance % minute / second);

  var day_description;
  var hour_description;
  var min_description;
  var sec_description;

  if (days == 1) {
    day_description = day_desc;
  } else {
    day_description = day_desc;
  }

  if (hours == 1) {
    hour_description = hour_desc;
  } else {
    hour_description = hour_desc;
  }

  if (minutes == 1) {
    min_description = min_desc;
  } else {
    min_description = min_desc;
  }

  if (seconds == 1) {
    sec_description = sec_desc;
  } else {
    sec_description = sec_desc;
  }

  var between = days + day_description;
  between += hours + hour_description;
  between += minutes + min_description;
  between += seconds + sec_description;

  return between;
};

module.exports = DateBetween;
