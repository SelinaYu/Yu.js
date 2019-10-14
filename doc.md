### **1) formatFloat(value,n)**

保留n位小数，不足补0

```
formatFloat(1000,2) // "1000.00"
```

### **2) isPhone(phone)**

判断是否是手机号

```
isPhone(12345678911) // false
```

### **3) formatDate(date, pattern)**

格式化日期，默认的格式是`yyyy-MM-dd HH:mm:ss`

```
formatDate(new Date()) // 2019-05-21 15:03:42
```

### **4) isCardNo(cardNo)**

是否是身份证号码

```
isCardNo(152221198605124879) // true
```

### **5) formatMoney(money,n)**

格式化金额，加逗号，`money` 为金额， `n` 保留几位小数

```
formatMoney(99999.666,2) // "99,999.67"
```

### **6) randNum(min, max)**

生成某个范围内的随机数

```
randNum(0,10) // 5
```

### **7) isEmptyObject(obj)**

判断一个对象是不是空对象，不是对象的默认返回false

```
let a = { name: 'Bob' };
isEmptyObject(obj) // false
```

### **8) handleCase(str,type)**

字符串的大小写转换，`type` 为可选值为1,2,3,4,5, 不传返回原字符串

- 1 : 首字母转成大写，剩下的小写
- 2 : 首字母转成小写，剩下的大写
- 3 : 大小写转换，大写变成小写，小写变成大写
- 4 : 全部大写
- 5 : 全部小写

```
handleCase('aBc', 3) // AbC
```

### **9) debounce(fn,time)**

防抖函数，在事件被触发`n`秒后再执行回调，如果在这`n`秒内又被触发，则重新计时。传入要防抖的函数`fn`,和时间`time`。

### **10） throttle(fn,time)**

节流函数，规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。传参和防抖函数一样

### **11) rollThrough(visible)**

解决滚动穿透的问题，`visible` 为布尔值，`true` 的时候表示弹框显示，滚动弹框，底层页面也进行了滚动。`false`表示弹框关闭，复原底层页面原来的状态。

### **12) parseURLParam(url)**

解析URL的参数 params 成对象,URL没有参数时，默认返回空对象。

```
let url = 'http://www.domain.com?name=yu&name=Bob&city=%E5%8C%97%E4%BA%AC'
parseURLParam(url);

// 输出
 {
   city: "北京",
   name: ["yu", "Bob"]
 }
```

### **13) isObject(val)**

判断数据是不是引用类型的数据 (例如： arrays, functions, objects, regexes, new Number())

```
isObject(123); // false
isObject({a: 123}); // true
```

### **14) dataURLtoBlob(dataurl)**

将 dataURL 转换成 Blob 对象
```
dataURL的形式如下：data:[<mediatype>][;base64],<data>
```
其中mediatype声明了文件类型，遵循MIME规则，如“image/png”、“text/plain”；之后是编码类型。


### **15) dataURLtoFile(dataurl)**

将 dataURL 转换成 File 对象

```
dataURL的形式如下：data:[<mediatype>][;base64],<data>
```
其中mediatype声明了文件类型，遵循MIME规则，如“image/png”、“text/plain”；之后是编码类型。


### **16) compressImg(img,option)**

压缩图片，option 对象有三个属性： maxWidth(压缩后的最大宽度), maxHeight(压缩后的最大高度), level(质量压缩)，option默认为
```
option = {
    maxWidth: 50,
    maxHeight: 50,
    level: 1
}
```

