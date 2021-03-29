const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnSpeedSeconds = turnsSpeed / (60 * 60);
  let turns = 2 ** disksNumber - 1;
  let sec=Math.floor(turns / turnSpeedSeconds)
  return {turns, sec}
};
