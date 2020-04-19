/**
 * @description xss注入，基本的xss防御，
 * @author Sroot
 * @version 0.0.1
 *
 */
const Mxss = {
  /**
   * @description html编码。
   * @author Sroot
   * @version 0.0.1
   * @param {String} html 必传，需要编码的html。
   *
   * @example
   *     let res= Mxss.htmlencode("<script>alert(1)</script>")
   *     console.log(res)
   */
  htmlencode: function (s) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(s));
    return div.innerHTML;
  },
  /**
   * @description html转码。
   * @author Sroot
   * @version 0.0.1
   * @param {String} url 必传，需要解码的html。
   *
   * @example
   *     let res= Mxss.htmldecode("&lt;script&gt;alert(1)&lt;/script&gt;")
   *     console.log(res)
   */
  htmldecode: function (s) {
    let div = document.createElement("div");
    div.innerHTML = s;
    return div.innerText || div.textContent;
  },
};

export default Mxss;