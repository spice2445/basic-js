const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chains:[],
  getLength() {
    return this.chains.length
  },
  addLink(value) {
    this.chains.push(`( ${value !== undefined ? value : ''} )`)
    return this;
  },
  removeLink(position) {
    if(position <= 0 || position >= this.chains.length)
    {
      this.chains = []
      throw new Error()
    }
    this.chains.splice(position -1, 1)
    return this
  },
  reverseChain() {
    this.chains.reverse()
    return this
  },
  finishChain() {
    let str = '';
    for(const chain of this.chains){
      str += `${chain}~~`
    }
    this.chains = []
    str = str.slice(0, -2)
    return str
  }
};

module.exports = chainMaker;
