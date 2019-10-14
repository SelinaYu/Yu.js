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

/**
* 验证身份证号号码的方法
* @param cardNo 传入身份证号
* @return Boolean
*/
function isCardNo(cardNo) {
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (!reg.test(cardNo)) {
        return false;
    }
    return true;
}

/**
 * 格式化金额 加逗号
 * @param  s 金额
 * @param  n 小数点位数
 */
function formatMoney(s, n) {
    if (s === '') return s;
    n = n >= 0 && n <= 20 ? n : 2;
    s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
    var l = s.split('.')[0].split('').reverse(), r = s.split('.')[1];
    var t = '';
    for (var i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '');
    }
    return r ? t.split('').reverse().join('') + '.' + r : t.split('').reverse().join('');
}
/**
 * 生成某个范围内的随机数
 * 
 * @param  min 范围最小值
 * @param  max  范围最大值
 * @returns 
 */
function randNum(min, max) {
    return Math.floor( min + Math.random() * ((max + 1) - min))
}

/**
 * 判断是否是一个空对象
 * 
 * @param {any} obj 
 * @returns 
 */
function isEmptyObject(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj))
        return false;
    return !Object.keys(obj).length;
};

/**
 * 字符串大小写转换
 */
 
 function handleCase(str, type) {
     switch (type) {
        case 1: // 首字母转成大写
            return str.replace(/\b\w+\b/g, function(word){
                return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();  
            });
        case 2:// 首字母小写
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
        case 3: // 大写变小写，小写变大写（大小写变换）
            return toggleCase(str);
        case 4:// 全部大写
            return str.toUpperCase();
        case 5:// 全部小写
            return str.toLowerCase();
        default:
            return str;        
     }
     function toggleCase(str) {
        var itemText = "";
        str.split("").forEach(
            function (item) {
                if (/^([a-z]+)/.test(item)) {
                    itemText += item.toUpperCase();
                } else if (/^([A-Z]+)/.test(item)) {
                    itemText += item.toLowerCase();
                } else {
                    itemText += item;
                }
            });
        return itemText;
    }
 }
 /**
  * 防抖函数
  * 
  * @param {any} fn 
  * @param {any} time 
  * @returns 
  */
 function debounce(fn,time){
    let timer = null;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(() => fn(), time)
    }
}
/**
 * 节流函数
 * 
 * @param {any} event 
 * @param {any} time 
 * @returns 
 */
function throttle(event, time) {
    let pre = 0;
    let timer = null;
    return function (...args) {
      if (Date.now() - pre > time) {
        clearTimeout(timer);
        timer = null;
        pre = Date.now();
        event.apply(this, args);
      } else if (!timer) {
        timer = setTimeout(() => {
          event.apply(this, args);
        }, time);
      }
    }
  }
  /**
   * handle 滚动穿透
   * 
   * @param {any} visible 
   */
  function rollThrough(visible){
    let top = '';
    let bodyEl = document.querySelector('body');
    if (visible) {
      top = window.scrollY
      bodyEl.style.position = 'fixed'
      bodyEl.style.top = -top + 'px'
    } else {
      bodyEl.style.position = ''
      bodyEl.style.top = ''
      window.scrollTo(0, top) // 回到原先的top
    }
  }

  /**
   * 解析URL params成对象
   */
  function parseURLParam(url){
    let paramsObj = {};
    let urlParams = /.+\?(.+)$/.exec(url);
    if(!urlParams) { // url没有参数时
      return paramsObj; 
    }
    let paramsStr = urlParams[1];
    let paramsArr = paramsStr.split('&');
    paramsArr.forEach(param => {
        if(/=/.test(param)) {
            let [key,val] = param.split('=');
             val = decodeURIComponent(val); // 解码
            if(paramsObj.hasOwnProperty(key)) {
                paramsObj[key] = [].concat(paramsObj[key],val); // 重复的参数合并成数组
            } else {
              paramsObj[key] = val;
            }
        }
    });
    return paramsObj;
  }

  /**
   *  判断是不是引用类型的数据
   */
  function isObject(val){
      let type = typeof val;
      return type != null && (type === 'object' || type === 'function')
  }

  function dataURLtoBlob(dataurl) {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([ u8arr ], { type: mime });
  };
  function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([ u8arr ], filename, { type: mime });
  };
  

  function compressImg(img, option) {
    let opt = {
      maxWidth: 50,
      maxHeight: 50,
      level: 1   // 质量压缩
    };
    option = option || opt;
    let imgW = img.width;
    let imgH = img.height;
    let resizeW = imgW;
    let resizeH = imgH;
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    if (imgW > option.maxWidth || imgH > option.maxHeight) {
      let multiple = Math.max(imgW / option.maxWidth, imgH / option.maxHeight);  // 压缩比
      resizeW = imgW / multiple;
      resizeH = imgH / multiple;
    } else {
      return img;
    }
    canvas.width = resizeW;
    canvas.height = resizeH;
    context.drawImage(img, 0, 0, resizeW, resizeH);  // 尺寸压缩
    let base64 = canvas.toDataURL('image/png', option.level);
    let blob = dataURLtoFile(base64, 'image.png');
    console.log(blob);
    console.log(`压缩后大小${blob.size}`);
    return blob;
  };
  Yu.formatFloat = formatFloat;
  Yu.isPhone = isPhone;
  Yu.formatDate =  formatDate;
  Yu.isCardNo = isCardNo;
  Yu.formatMoney = formatMoney;
  Yu.randNum = randNum;
  Yu.isEmptyObject = isEmptyObject;
  Yu.handleCase = handleCase;
  Yu.debounce = debounce;
  Yu.throttle = throttle;
  Yu.rollThrough = rollThrough;
  Yu.parseURLParam = parseURLParam;
  Yu.isObject = isObject;
  Yu.dataURLtoBlob = dataURLtoBlob;
  Yu.dataURLtoFile = dataURLtoFile;
  Yu.compressImg = compressImg;
  
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