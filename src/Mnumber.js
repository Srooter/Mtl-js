/**
 * @description 数值操作。
 * @author Yu-Root
 * @version 0.0.1
 *
 */
const Mnumber = {
  /**
   * @description 补零。
   * @author Yu-Root
   * @version 0.0.1
   * @param {Number} number 必传，数字。
   * @returns {String} 数值字符串。
   *
   * @example
   *     let res = Mnumber.addXero(10);
   *     console.log(res)
   */
  addZero: function (number) {
    return (+number || 0) < 10 ? `0${number}` : `${number}`;
  },
  /**
   * @description 保留两位小数。
   * @author Yu-Root
   * @version 0.0.1
   * @param {Number} number 必传，数字。
   * @param {Boolean} number true/false。
   *                         1.true 保留两位小数并且四舍五入。
   *                         2.false 保留两位小数。
   * @returns {String} 数值字符串。
   *
   * @example
   *     let res = Mnumber.keepTwoOdecimal(10.335,true);
   *     console.log(res)
   */
  keepTwoOdecimal: function (number, isRound) {
    let num = +number || 0;
    return isRound ? Math.round(num * 100) / 100 + "" : Math.floor(num * 100) / 100 + "";
  },
  /**
   * @description 数值分割（10000 => 10,000）。
   * @author Yu-Root
   * @version 0.0.1
   * @param {Number} number 必传，数字。
   * @param {Number} digits 必传，位数。
   * @returns {String} 数值字符串。
   *
   * @example
   *     let res = Mnumber.splitNumber(10000,3);
   *     console.log(res)
   */
  splitNumber: function (number, digits) {
    let num = +number || 0;
    let pattern = `(?=(?!\\b)(\\d{${digits}})+$)`;
    let reg = new RegExp(pattern, "g");
    return (num + "").replace(reg, ",");
  },
  /**
   * @description 数值转换（10000 => 1W）。
   * @author Yu-Root
   * @version 0.0.1
   * @param {Number} number 必传，数字。
   * @returns {String} 数值字符串。
   *
   * @example
   *     let res = Mnumber.shortNumber(10000);
   *     console.log(res)
   */
  shortNumber: function (number) {
    let num = +number || 0;
    if (num >= 1000) {
      num = Math.round(num / 100) / 10 + "K";
    } else if (num >= 10000) {
      num = Math.round(number / 1000) / 10 + "W";
    } else if (num >= 1000000) {
      number = Math.round(num / 1000000) / 10 + "M";
    } else if (num >= 100000000) {
      num = Math.round(num / 100000000) / 10 + "B";
    }
    return num + "";
  },
};

export default Mnumber;
