
window.germanDayFinder = {
  germanDays: [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ],
  
  getTodayInGerman: () => {
    var date = new Date();
    var dayName = days[date.getDay()];
  
    return dayName;
  },
  
  getMonthAsStringWithPadding: () => {
    var date = new Date();
    var month = date.getMonth();
    var monthStr = month.toLocaleString();
    monthStr = monthStr.padStart(2, "0");
  
    return monthStr;
  },
  
  getYearAsString: () => {
    var date = new Date();
    var year = date.getFullYear();
    var yearStr = year.toLocaleString().substring(2, 3);
  
    return yearStr;
  }
}
