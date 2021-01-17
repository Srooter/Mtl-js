/**
 * @description 随机生成操作。
 * @author Yu-Root
 * @version 0.0.1
 *
 */

const Mrandom = {
  /**
   * @description 随机生成字符串。
   * @author Yu-Root
   * @version 0.0.1
   * @param {Array} typeArr 必传，生成字符串的类型。
   * @param {Number} num 选传，生成字符的长度。
   *
   * @returns {String} 随机字符串。
   *
   * @example
   *       let res = Mrandom.getRandomStr(['Uppercase','Number',"Lowercase","Symbol"],8);
   *       console.log(res)
   */
  getRandomStr: function (typeArr, num) {
    let str = "";
    let charStr = "";
    num = num || 6;
    typeArr.map(function (type) {
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
  },
  /**
   * @description 随机数组排序。
   * @author Yu-Root
   * @version 0.0.1
   * @param {Array} arr 必传，生成字符串的类型。
   *
   * @returns {String} 随机排序后数组。
   *
   * @example
   *       let res = Mrandom.getRandomArrySort([1,2,3,4]);
   *       console.log(res)
   */
  getRandomArrySort(arr) {
    arr.sort(function () {
      return 0.5 - Math.random();
    });
  },
  if(!window.Float32Array) window.Float32Array = window.Array;
if(!window.Uint16Array) window.Uint16Array = window.Array;
};

export default Mrandom;
