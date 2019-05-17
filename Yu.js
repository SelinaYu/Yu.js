(function  () {
  var Yu = Yu || {};
  const PHONE_PATTERN = /^1[3|4|5|7|8][0-9]{9}$/; // 手机号正则

  /**
   * 保留 n 位小数，不足补0
   */
  function formatFloat(value, n){
    var f = Math.round(value*Math.pow(10,n))/Math.pow(10,n);
    var s = f.toString();
    var rs = s.indexOf('.');   
    if (rs < 0) {     
        s += '.';   
    } 
    for(var i = s.length - s.indexOf('.'); i <= n; i++){
      s += "0";
    }
    return s;
  }


  /**
   * 是否是手机号
   */
  function isPhone(phone){
    if (PHONE_PATTERN.test(phone)) {
      return true;
    }
    return false;
  }
  
  /**
   * 格式化日期
   */
  function formatDate(date, pattern){
    if (!(date instanceof Date)) return {msg: `${date} is not a date object`};
    var formatstr = (pattern = pattern || "yyyy-MM-dd HH:mm:ss");
    if (pattern != null && pattern != "") {
        //设置年
        if (formatstr.indexOf("yyyy") >= 0) {
            formatstr = formatstr.replace("yyyy", date.getFullYear());
        }
        else if (formatstr.indexOf("yy") >= 0) {
            formatstr = formatstr.replace("yy", (date.getFullYear() + "").substr(2));
        }

        //设置月
        if (formatstr.indexOf("MM") >= 0) {
            var month = date.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            formatstr = formatstr.replace("MM", month);
        }
        //设置日
        if (formatstr.indexOf("dd") >= 0) {
            var day = date.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            formatstr = formatstr.replace("dd", day);
        }
        //设置时 - 24小时
        var hours = date.getHours();
        if (formatstr.indexOf("HH") >= 0) {
            if (month < 10) {
                month = "0" + month;
            }
            formatstr = formatstr.replace("HH", hours);
        }
        //设置时 - 12小时
        if (formatstr.indexOf("hh") >= 0) {
            if (hours > 12) {
                hours = hours - 12;
            }
            if (hours < 10) {
                hours = "0" + hours;
            }
            formatstr = formatstr.replace("hh", hours);
        }
        //设置分
        if (formatstr.indexOf("mm") >= 0) {
            var minute = date.getMinutes();
            if (minute < 10) {
                minute = "0" + minute;
            }
            formatstr = formatstr.replace("mm", minute);
        }
        //设置秒
        if (formatstr.indexOf("ss") >= 0) {
            var second = date.getSeconds();
            if (second < 10) {
                second = "0" + second;
            }
            formatstr = formatstr.replace("ss", second);
        }
    }
    return formatstr;  
  }

  Yu.formatFloat = formatFloat;
  Yu.isPhone = isPhone;
  Yu.formatDate =  formatDate;

  
  /**
   * 客户端 window.Yu = Yu;
   * 服务端 exports.Yu = Yu
   * nodeType 是为了确保 module 和 exports 不是HTML元素
   */
  if(typeof exports !== 'undefined' && !exports.nodeType){
    if(module !== 'undefined' && !module.nodeType && module.exports){
      exports = module.exports = Yu; 
    }
    exports.Yu = Yu;
  } else {
    window['Yu'] = Yu;
  }
  

})()