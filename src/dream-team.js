const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!members || !members.length) return false;
  let firstLetters = [];

  members.map(str =>{
    if(typeof(str) === 'string' && str !== ''){
      firstLetters.push(str.trimLeft()[0].toUpperCase());
    }
  })
  return firstLetters.sort().join("")
};
