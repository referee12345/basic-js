const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string") {
    let n = parseFloat(sampleActivity);
    if (n > 0 && n <= MODERN_ACTIVITY) {
      let b = 0.693 / HALF_LIFE_PERIOD;
      let v = Math.log(MODERN_ACTIVITY / Number(n)) / b;
      return Math.ceil(v);
    }
  }
  return false;
};
