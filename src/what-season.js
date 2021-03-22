const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!'
  if(Date.prototype.getMonth.call(date) >= 2 && Date.prototype.getMonth.call(date) <=4) return 'spring';
  if(Date.prototype.getMonth.call(date) >= 5 && Date.prototype.getMonth.call(date) <= 7) return 'summer';
  if(Date.prototype.getMonth.call(date) >= 8 && Date.prototype.getMonth.call(date) <= 10) return 'autumn';
  if(Date.prototype.getMonth.call(date) >= 0 && Date.prototype.getMonth.call(date) <= 1 || Date.prototype.getMonth.call(date) === 11) return 'winter';
};
