const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!members || !members.length) return false;
  let str = '';
  for(const elem of members){
    if(typeof(elem) === "string") continue;
    str += elem.trim().toUpperCase()[0]
  }
  return str.split("").sort().join("")
};
