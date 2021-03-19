/**
 * @description iframe操作，
 * @author Yu-Root
 * @version 0.0.1
 *
 */

import MbrowserUA from "./MbrowserUA";

const Mwindow = {
  /**
   * @description 禁止外部iframe嵌套。
   * @author Yu-Root
   * @version 0.0.1
   *
   * @example
   *     Mwindow.stopTopIframe()
   */
  stopTopIframe: function () {
    if (top.location != self.location) {
      top.location = self.location;
    }
  },
  /**
   * @description 禁止内部iframe运行。
   * @author Yu-Root
   * @version 0.0.1
   *
   * @example
   *     Mwindow.stopTopIframe()
   */
  stopTopIframe: function () {
    if (MbrowserUA.isOldIE || MbrowserUA.isNewIE) {
      window.frames.document.execCommand("Stop");
    } else {
      window.frames.stop();
    }
  },
};

export default Mwindow;
