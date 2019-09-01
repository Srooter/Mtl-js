/**
 * @description url操作。
 * @author Sroot
 * @version 0.0.1
 *
 */
const Murl = {
  /**
   * @description url跳转。
   * @author Sroot
   * @version 0.0.1
   * @param {String} url 必传，需要跳转的路径。
   *
   * @example
   *     Murl.goRedirect("./text.html");
   */
  goRedirect: function(url) {
    window.location.href = url;
  },
   /**
   * @description 获取当前完整url地址。
   * @author Sroot
   * @version 0.0.1
   *
   * @example
   *     Murl.getCurrAllPath();
   */
  getCurrAllPath:function(){
    return window.document.location.href
  },
   /**
   * @description 获取当前主机地址。
   * @author Sroot
   * @version 0.0.1
   *
   * @example
   *     Murl.getHostPath();
   */
  getHostPath:function(){
    return `${document.location.protocol}//${document.location.host}`
  },
  /**
   * @description 获取url上的参数。
   * @author Sroot
   * @version 0.0.1
   * @param {String} paramName 必传，参数名。
   * @returns {String} 参数值。
   *
   * @example
   *     let res = Murl.getUrlParam("name");
   *     console.log(res);
   */
  getUrlKey: function(paramName) {
    return (
      decodeURIComponent(
        (new RegExp("[?|&]" + paramName + "=" + "([^&;]+?)(&|#|;|$)").exec(
          location.href
        ) || [, ""])[1].replace(/\+/g, "%20")
      ) || null
    );
  },
  /**
   * @description 移除url上的参数。
   * @author Sroot
   * @version 0.0.1
   * @param {String} paramName 必传，参数名。
   * @returns {String} 参数值。
   *
   * @example
   *     let res = Murl.removeURLParam("name");
   *     console.log(res);
   */
  removeURLParam: function(paramName) {
    let url = document.location.href;
    let urlparts = url.split("?");
    if (urlparts.length >= 2) {
      let prefix = encodeURIComponent(paramName) + "=";
      let pars = urlparts[1].split(/[&;]/g);
      for (let i = pars.length; i-- > 0; ) {
        if (pars[i].lastIndexOf(prefix, 0) !== -1) {
          pars.splice(i, 1);
        }
      }
      url = urlparts[0] + (pars.length > 0 ? "?" + pars.join("&") : "");
      window.history.pushState("", document.title, url);
    } else {
      window.history.pushState("", document.title, url);
    }
  }
};

export default Murl
