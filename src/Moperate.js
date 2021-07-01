/**
 * @description 设备操作。
 * @author Yu-Root
 * @version 0.0.1
 *
 */
const Moperate = {
  /**
   * @description 禁用鼠标右键。
   * @author Yu-Root
   * @version 0.0.1
   *
   * @example
   *     let res = Moperate.stopMouseMenu();
   */
  stopMouseMenu: function () {
    document.oncontextmenu = function () {
      return false;
    };
  },
};

export default Moperate;
