/**
 * @description 判断用户浏览器类型
 * @author Sroot
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
  isAndroid,
  isIOS,
  isAlipay,
  wechat,
  qq
};
