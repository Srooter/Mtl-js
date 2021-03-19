/**
 * @description 字符串操作
 * @author Yu-Root
 * @version 0.0.1
 *
 */
const Mstr = {
  /**
   * @description 截取字符串。
   * @author Yu-Root
   * @version 0.0.1
   * @param {String} str 必传，需要截取的字符串。
   * @param {String} interceptstr 必传，截取某字符。
   * @param {String} [interceptType=""]  选传，截取类型。
   *                                     1."front" 截取某字符前面的字符串。
   *                                     2."end"   截取某字符后面的字符串。
   *                                     3.""      不截取字符串。
   * @returns {String} 截取后的字符串。
   *
   * @example
   *     let res = Mstr.getInterceptstr("aaaaa|dasdsdasda","|","front");
   *     console.log(res)
   */
  getInterceptstr: function (str, interceptstr, interceptType) {
    let index = str.lastIndexOf(interceptstr);
    switch (interceptType) {
      case "front":
        str = str.substring(0, index);
        break;
      case "end":
        str = str.substring(index + 1, str.length);
        break;
      default:
        break;
    }
    return str;
  },
  /**
   * @description 清除字符串的空格、回车、换行符。
   * @author Yu-Root
   * @version 0.0.1
   * @param {String} str 必传，需要清除的字符串。
   * @returns {String} 清除后的字符串。
   *
   * @example
   *     let res = Mstr.cleanSpace("aaa  aa   ");
   *     console.log(res)
   */
  cleanSpace: function (str) {
    return str.replace(/[\r\n]/g, "").replace(/\s/g, "");
  },
};

export default Mstr;
