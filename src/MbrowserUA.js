/**
 * @description 判断用户浏览器类型
 * @author Yu-Root
 * @version 0.0.1
 * @returns {Boolean} true/false。
 *
 * @example
 *     //判断浏览器
 *     if(isAndroid||isIOS){
 *         // mobile
 *         if(wechat){
 *            //do something
 *         }else{
 *            //do something
 *            //location.replace("http://www.xxx.com")
 *     }else{
 *         // Pc
 *     }
 *
 */
let ua = navigator.userAgent,
  //IE浏览器（IE10与IE10以下版本）
  isOldIE = !!ua.match(/MSIE/i),
  //IE浏览器（IE11以上版本）
  isNewIE = !!ua.match(/Trident/i),
  //Edge 浏览器
  isEdge = !!ua.match(/Edge/i),
  //android终端
  isAndroid = !!ua.match(/Android/i),
  //ios终端
  isIOS = !!ua.match(/iPhone|iPad|iPod/i),
  //支付宝
  isAlipay = ua.match(/AlipayClient/i),
  //微信浏览器
  wechat = ua.includes("MicroMessenger"),
  //QQ浏览器
  qq = ua.includes("QQ");

export default {
  isOldIE,
  isNewIE,
  isEdge,
  isAndroid,
  isIOS,
  isAlipay,
  wechat,
  qq,
};
