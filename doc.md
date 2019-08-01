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