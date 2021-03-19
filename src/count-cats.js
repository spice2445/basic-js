const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if(!matrix || !matrix.length) return 0;
  let f = 0;
  for(let elem of matrix){
    for(let count of elem){
      if(count === "^^") f++;
    }
  }
  return f;
  // throw new CustomError('Not implemented');
};
