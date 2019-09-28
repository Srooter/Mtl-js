/**
 * @description 随机生成操作
 * @author Sroot
 * @version 0.0.1
 *
 */

const Mrandom = {
  /**
   * @description 随机生成字符串
   * @author Sroot
   * @version 0.0.1
   * @param {Array} typeArr 必传，生成字符串的类型。
   * @param {Number} num 选传，生成字符的长度。
   *
   * @returns {String} 随机字符串。
   *
   * @example
   *       let res = Mrandom.getRandom(['Uppercase','Number',"Lowercase","Symbol"],8);
   *       console.log(res)
   */
  getRandom: function(typeArr, num) {
    let str = "";
    let charStr = "";
    num = num || 6;
    typeArr.map(function(type) {
      switch (type) {
        case "Uppercase":
          charStr += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Lowercase":
          charStr += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Number":
          charStr += "0123456789";
          break;
        case "Symbol":
          charStr += "!@#$%^&*";
          break;
        default:
          break;
      }
    });
    for (let i = 0; i < num; i++) {
      let index = Math.round(Math.random() * (charStr.length - 1));
      str += charStr.substring(index, index + 1);
    }
    return str;
  }
};

export default Mrandom;
