  
const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = (type === true || type === undefined) ? 'direct' : 'reverse';
  }
  encrypt(message, key) {

    let messageArr = message.toUpperCase().split('');

    let key_init_arr = key.toUpperCase().split(''),
        key_arr = [],
        offset = 0;

    for (let i=0; i< messageArr.length; i++){

      if (messageArr[i].charCodeAt(0) >= 65 &&
          messageArr[i].charCodeAt(0) <= 90) {
        key_arr.push(key_init_arr[(i + offset) % key_init_arr.length])
        messageArr[i] = String.fromCharCode((key_arr[i].charCodeAt(0) + messageArr[i].charCodeAt(0) - 130)%26 + 65)
      } else {
        key_arr.push(' ')
        offset -= 1
      }
    }

    return (this.type === 'direct') ? messageArr.join('') : messageArr.reverse().join('')
  }    
  decrypt(encryptedMessage, key) {

    let encryptedMessageArr = encryptedMessage.toUpperCase().split('');

    let key_init_arr = key.toUpperCase().split(''),
        key_arr = [],
        offset = 0;

    for (let i=0; i< encryptedMessageArr.length; i++){
      if (encryptedMessageArr[i].charCodeAt(0) >= 65 &&
          encryptedMessageArr[i].charCodeAt(0) <= 90) {
      key_arr.push(key_init_arr[(i + offset) % key_init_arr.length])
        if (encryptedMessageArr[i].charCodeAt(0) >= key_arr[i].charCodeAt(0) ){
          encryptedMessageArr[i] = String.fromCharCode(  (-key_arr[i].charCodeAt(0) + encryptedMessageArr[i].charCodeAt(0))%26 + 65 )
        } else {
          encryptedMessageArr[i] = String.fromCharCode(  91 - (key_arr[i].charCodeAt(0) - encryptedMessageArr[i].charCodeAt(0)) )
        }
      } else {
        key_arr.push(' ')
        offset -= 1
      }
    }
    return (this.type === 'direct') ? encryptedMessageArr.join('') : encryptedMessageArr.reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
