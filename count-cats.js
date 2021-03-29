const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count=0;
  for(let ar of arr){
    for(let elem of ar){
      if(elem=='^^'){
        count++
      }
    }
  }
  return count
};
