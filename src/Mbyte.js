/**
 * @description 字节操作。
 * @author Yu-Root
 * @version 0.0.1
 *
 */
const Mbyte = {
  /**
   * @description 获取字节大小。
   * @author Yu-Root
   * @version 0.0.1
   * @param {String} str 必传，字符串。
   *
   * @returns {Number} 字节大小。
   *
   * @example
   *     let res = Mbyte.getBtyeSize("abc");
   *     console.log(res)
   */
  getBtyeSize: function (str) {
    return new Blob([str]).size;
  },
};

export default Mbyte;
