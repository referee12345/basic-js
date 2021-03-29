const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let ar=[];
  for(let i=0;i<arr.length;i++){
    if(arr[i]=='--discard-next'){
      if(i+1<arr.length){
        i++;
        continue
      }
    }
    else if (arr[i] == '--discard-prev') {
      if (i - 1 > 0 && arr[i-2] !== '--discard-next') {
        ar.pop();
      }
    }
    else if (arr[i] == '--double-next'){
      if(i+1< arr.length){
      ar.push(arr[i+1])
      }
    }
    else if(arr[i] == '--double-prev'){
      if (i - 1 > 0 && arr[i-2] !== '--discard-next'){
      ar.push(arr[i-1])
      }
    }
    else{
      ar.push(arr[i])
    }
  }
  
  return ar
};