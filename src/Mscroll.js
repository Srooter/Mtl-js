/**
 * @description 滚动操作
 * @author Sroot
 * @version 0.0.1
 *
 */
const Mscroll = {
  /**
   * @description 滚动到顶部
   * @author Sroot
   * @version 0.0.1
   *
   * @example
   *     Mscroll.scrollToTop();
   */
  scrollToTop: function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  /**
   * @description 滚动到某元素
   * @author Sroot
   * @version 0.0.1
   * @param {String} str 必传，字符串。
   *
   * @returns {Number} 字节大小。
   *
   * @example
   *     Mscroll.scrollToEL('#sdiv');
   */
  scrollToEL: function(el) {
    let element = document.querySelector(el);
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default Mscroll;