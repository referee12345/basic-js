const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let ar=[];
  if(Array.isArray(arr)){
  for(let elem of arr){
    if(typeof elem=='string'){
      for(let i=0;i<elem.length;i++){
        if(elem[i]!=' '){
        ar.push(elem[i].toUpperCase());
        break
        }
      }
    }
  }
  return ar.sort().join('');
}
return false
};
