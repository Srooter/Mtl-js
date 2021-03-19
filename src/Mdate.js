/**
 * @description 时间操作。
 * @author Yu-Root
 * @version 0.0.1
 *
 */
const ONE_SEC = 1000;
const ONE_MIN = 1000 * 60;
const ONE_HOR = 1000 * 60 * 60;
const ONE_DAY = 1000 * 60 * 60 * 24;
const SVN_DAY = 1000 * 60 * 60 * 24 * 7;

const Mdate = {
  /**
   * @description 获取天数前后的时间。
   * @author Yu-Root
   * @version 0.0.1
   * @param {Number} [day="1"] 必传，天数（正数为几天后，负数为几天后）。
   * @returns {Number} 时间戳。
   *
   * @example
   *     let res = Mdate.setDate(1);
   *     console.log(res);
   */
  setDate(day) {
    return Date.now() + day * ONE_DAY;
  },
  /**
   * @description 获取当前时间毫秒数。
   * @author Yu-Root
   * @version 0.0.1
   * @returns {Number} 毫秒数。
   *
   * @example
   *     let res = Mdate.getCurTime();
   *     console.log(res);
   */
  getCurTime: function () {
    return new Date().getTime();
  },
  /**
   * @description 秒数转化毫秒数。
   * @author Yu-Root
   * @version 0.0.1
   * @param {Number} [time="1567326088"] 选传，时间戳。
   * @returns {Number} 时间戳。
   *
   * @example
   *     let res = Mdate.getMilliseconds(1567326088);
   *     console.log(res);
   */
  getMilliseconds: function (time) {
    return parseInt(time) * ONE_SEC;
  },
  /**
   * @description 时间转化时间戳。
   * @author Yu-Root
   * @version 0.0.1
   * @param {String} [time="2019/01/01 20:30:00"] 选传，标准时间。
   * @returns {Number} 时间戳。
   *
   * @example
   *     let res = Mdate.getTimestamp("2019/01/01 20:30:00");
   *     console.log(res);
   */
  getTimestamp: function (time) {
    return new Date(time).getTime() / ONE_SEC;
  },
  /**
   * @description 时间格式化为yyyy-mm-dd。
   * @author Yu-Root
   * @version 0.0.1
   * @param {Number} [time="1567326088"] 必传，时间戳。
   * @returns {String} 标准时间。"yyyy-mm-dd"
   *
   * @example
   *     let res = Mdate.getYMD(1567326088);
   *     console.log(res);
   */
  getYMD: function (time) {
    var defaultTime = new Date(this.getMilliseconds(time));
    return `${defaultTime.getFullYear()}-${defaultTime.getMonth() + 1}-${defaultTime.getDate()}`;
  },
  /**
   * @description 时间格式化为yyyy-mm-dd hh:mm。
   * @author Yu-Root
   * @version 0.0.1
   * @param {Number} [time="1567326088"] 必传，时间戳。
   * @returns {String} 标准时间。"yyyy-mm-dd hh:mm"
   *
   * @example
   *     let res = Mdate.getYMDHM(1567326088);
   *     console.log(res);
   */
  getYMDHM: function (time) {
    var defaultTime = new Date(this.getMilliseconds(time));
    return `${defaultTime.getFullYear()}-${defaultTime.getMonth() + 1}-${defaultTime.getDate()} ${defaultTime.getHours()}:${defaultTime.getMinutes()}:${defaultTime.getSeconds()}`;
  },
  /**
   * @description 时间格式化为XX前。
   * @author Yu-Root
   * @version 0.0.1
   * @param {Number} [time="1567326088"] 必传，毫秒数。
   * @returns {String} 时间。"xx前"
   *
   * @example
   *     let res = Mdate.getDateFront(1567326088);
   *     console.log(res);
   */
  getDateFront: function (createtime) {
    const nowtime = this.getCurTime();
    const distance = nowtime - createtime;
    if (distance < ONE_SEC * 2) {
      return "刚刚";
    } else if (distance < ONE_MIN) {
      return parseInt(distance / ONE_SEC, 10) + "秒前";
    } else if (distance < ONE_HOR) {
      return parseInt(distance / ONE_MIN, 10) + "分钟前";
    } else if (distance < ONE_DAY) {
      return parseInt(distance / ONE_HOR, 10) + "小时前";
    } else if (distance < SVN_DAY) {
      return parseInt(distance / ONE_DAY, 10) + "天前";
    } else {
      return this.getYMDHM(createtime);
    }
  },
};

export default Mdate;
