/**
 * @description 身份证获取信息。
 * @author Yu-Root
 * @version 0.0.1
 *
 */
const MIdInfo = {
  isCardNo: function (idNo) {
    let pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return pattern.test(idNo);
  },
  /**
   * @description 根据身份证获取出生日期。
   * @author Yu-Root
   * @version 0.0.1
   * @param {Number} idNo 必传，身份证号码。
   * @returns {String} 出生日期。 "yyyy-mm-dd"
   *
   * @example
   *     let res = MIdInfo.getBirthday(130503670401001);
   *     console.log(res);
   *
   */
  getBirthday: function (idNo) {
    if (!this.isCardNo(idNo)) {
      return;
    }
    let birthStr = "";
    switch (idNo.length) {
      case 15:
        birthStr = idNo.substring(6, 12);
        birthStr = `19${birthStr}`;
        birthStr = `${birthStr.substring(0, 4)}-${birthStr.substring(4, 6)}-${birthStr.substring(6)}`;
        break;
      case 18:
        birthStr = idNo.substring(6, 14);
        birthStr = `${birthStr.substring(0, 4)}-${birthStr.substring(4, 6)}-${birthStr.substring(6)}`;
        break;
      default:
        break;
    }
    return birthStr;
  },
  /**
   * @description 根据身份证获取性别。
   * @author Yu-Root
   * @version 0.0.1
   * @param {Number} idNo 必传，身份证号码。
   * @returns {String} 性别。 "男"/"女"
   * @example
   *     let res = MIdInfo.getSex(130503670401001);
   *     console.log(res);
   *
   */
  getSex: function (idNo) {
    if (!this.isCardNo(idNo)) {
      return;
    }
    let sexStr = "";
    switch (idNo.length) {
      case 15:
        sexStr = parseInt(idNo.substring(14, 1), 10) % 2 ? "男" : "女";
        break;
      case 18:
        sexStr = parseInt(idNo.substring(17, 1), 10) % 2 ? "男" : "女";
      default:
        break;
    }
    return sexStr;
  },
};

export default MIdInfo;
