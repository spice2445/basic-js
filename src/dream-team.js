const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if(!members || !members.length) return false;
    let firstLetters = [];
     members.map(str => firstLetters.push(str[0]).toUpperCase())  
    return firstLetters.sort().join("");
};
