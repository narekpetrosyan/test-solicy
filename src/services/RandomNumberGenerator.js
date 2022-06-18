export default class RandomNumberGenerator {
  static checkIfExists(arr = [], num) {
    if (!arr.length) return -1;
    return arr.indexOf(num);
  }

  static generateNumber(oldArr = [], maxLimit = 1000) {
    const number = Math.floor(Math.random() * maxLimit);
    const checked = this.checkIfExists(oldArr, number);
    if (checked === -1) {
      return number;
    } else {
      this.generateNumber(oldArr, maxLimit * 10);
    }
  }
}
