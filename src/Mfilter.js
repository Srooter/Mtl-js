/**
 * @description 字符串操作
 * @author Sroot
 * @version 0.0.1
 *
 */
const Mfilter = {
  /**
   * @description 过滤肮脏字符串
   * @author Sroot
   * @version 0.0.1
   * @param {String} str 必传，需要过滤的字符串。
   * @param {String} [type=""]  选传，截取类型。
   *                                     1."filter" 将肮脏字符串转化为*显示。
   *                                     2."check"  弹出提示，禁止输入肮脏字符串。
   *                                     3.""       默认"filter"模式。
   *
   * @example
   *     let res = Mfilter.filterDirtyWords("cao ni ma","filter");
   *     console.log(res)
   */
  filterDirtyWords: function(str, type) {
    var filterWords = ["dumb", "cao", "操"];
    var rgx = new RegExp(filterWords.join("|"), "gi");
    switch (type) {
      case "filter":
        str.replace(rgx, "*");
        break;
      case "check":
        rgx.test(str) ? alert("请文明用语") : str;
        break;
      default:
        str.replace(rgx, "*");
        break;
    }
    return str;
  }
};

export default Mstr;
