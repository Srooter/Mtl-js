/**
 * @description 过滤操作。
 * @author Yu-Root
 * @version 0.0.1
 *
 */
const Mfilter = {
  /**
   * @description 过滤肮脏字符串。
   * @author Yu-Root
   * @version 0.0.1
   * @param {String} str 必传，需要过滤的字符串。
   * @param {String} [type=""]  选传，截取类型。
   *                            1."filter" 将肮脏字符串转化为*显示。
   *                            2."check"  弹出提示，禁止输入肮脏字符串。
   *                            3.""       默认"filter"模式。
   *
   * @example
   *     let res = Mfilter.filterDirtyWords("cao ni ma","filter");
   *     console.log(res)
   */
  filterDirtyWords: function (str, type) {
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
  },
  /**
   * @description 脱敏字符串。
   * @author Yu-Root
   * @version 0.0.1
   * @param {String} str 必传，需要过滤的字符串。
   * @param {NUmber} start  必传，开始脱敏字符串的下标。
   * @param {NUmber} end  必传，结束脱敏字符串的下标。
   * @param {String} maskChar  必传，脱敏符号。
   *
   * @example
   *     let res = Mfilter.filterMaskString("19910088273", 2, 9, "*");
   *     console.log(res)
   */
  filterMaskString(str, start, end, maskChar) {
    if (str == null) {
      return "";
    }
    if (start < 0) {
      start = 0;
    }
    if (end > str.length) {
      end = str.length;
    }
    let maskLength = str.length - start - end;
    if (maskLength == 0) {
      return str;
    }
    let maskText = ''
    for (var i = 0; i < maskLength; i++) {
      maskText += maskChar;
    }
    return str.substring(0, start) + sbMaskString + str.substring(start + maskLength, str.length + end);
  },
  /**
   * @description 数组去重。
   * @author Yu-Root
   * @version 0.0.1
   * @param {Array} str 必传，需要去重数组。
   *
   * @returns {Array} 去重后数组。
   *
   * @example
   *     let res = Mfilter.filterArrayDuplicate([1,2,2,3]);
   *     console.log(res)
   */
  filterArrayDuplicate: function (array) {
    return [...new Set(array)];
  },
};

export default Mfilter;
