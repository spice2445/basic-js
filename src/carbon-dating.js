const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== 'string') return false;
  let activity = Number(sampleActivity);
  if(activity === undefined || isNaN(activity) || activity <=0 || activity > 15) return false;
  const k = Math.LN2 / HALF_LIFE_PERIOD
  const b = Math.log(MODERN_ACTIVITY / activity) / k;
  return Math.ceil(b)
};
