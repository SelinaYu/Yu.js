(function  () {
  var Yu = Yu || {};
  /**
   * 保留 n 位小数，不足补0
   */
  Yu.formatFloat = function (value, n){
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