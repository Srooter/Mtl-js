/**
 * @description 数值操作。
 * @author Sroot
 * @version 0.0.1
 *
 */
const Mnumber = {
  /**
   * @description 补零。
   * @author Sroot
   * @version 0.0.1
   * @param {Number} number 必传，数字。
   * @returns {String} 数值字符串。
   *
   * @example
   *     let res = Mnumber.addXero(10);
   *     console.log(res)
   */
  addXero: function(number) {
    return number < 10 ? `0${number}` : number;
  }
};

export default Mnumber;
