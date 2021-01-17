/**
 * @description 移动端操作。
 * @author Yu-Root
 * @version 0.0.1
 *
 */
const Mmobile = {
  /**
   * @description 是否允许触摸事件。
   * @author Yu-Root
   * @version 0.0.1
   *
   * @example
   *     Mmobile.initUseTouchEvents("abc");
   *
   */
  initUseTouchEvents: function () {
    if (
      /Android|webOS|iPhone|iPad|iPod/i.test(
        navigator.userAgent
      )
    ) {
      window.useTouchEvents = true;
    } else {
      window.useTouchEvents = false;
    }
  },
};

export default Mmobile;
