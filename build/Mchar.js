/**
 * @description 字符串操作
 * @author Sroot
 * @version 0.0.1
 *
 */
const Mchar = {
  /**
   * @description 截取字符串
   * @author Sroot
   * @version 0.0.1
   * @param {String} char 必传，需要截取的字符串。
   * @param {String} interceptChar 必传，截取某字符。
   * @param {String} [interceptType=""]  选传，截取类型。
   *                                     1."front" 截取某字符前面的字符串。
   *                                     2."end"   截取某字符后面的字符串。
   *                                     3.""      不截取字符串。
   * @returns {String} 截取后的字符串。
   *
   * @example
   *     let res = Mchar.getInterceptChar("aaaaa|dasdsdasda","|","front");
   *     console.log(res)
   */
  getInterceptChar: function(char, interceptChar, interceptType) {
    let index = char.lastIndexOf(interceptChar);
    switch (interceptType) {
      case "front":
        char = char.substring(0, index);
        break;
      case "end":
        char = char.substring(index + 1, char.length);
        break;
      default:
        break;
    }
    return char;
  },
  /**
   * @description 清除字符串的空格
   * @author Sroot
   * @version 0.0.1
   * @param {String} char 必传，需要清除的字符串。
   * @returns {String} 清除后的字符串。
   *
   * @example
   *     let res = Mchar.cleanSpace("aaa  aa   ");
   *     console.log(res)
   */
  cleanSpace: function(char) {
    return char.replace(/\s/g, "");
  }
};

export default Mchar;
