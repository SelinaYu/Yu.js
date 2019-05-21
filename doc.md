### **formatFloat(value,n)**

保留n位小数，不足补0

```
formatFloat(1000,2) // "1000.00"
```

### **isPhone(phone)**

判断是否是手机号

```
isPhone(12345678911) // false
```

### **formatDate(date, pattern)**

格式化日期，默认的格式是`yyyy-MM-dd HH:mm:ss`

```
formatDate(new Date()) // 2019-05-21 15:03:42
```

### **isCardNo(cardNo)**

是否是身份证号码

```
isCardNo(152221198605124879) // true
```

### **formatMoney(money,n)**

格式化金额，加逗号，`money` 为金额， `n` 保留几位小数

```
formatMoney(99999.666,2) // "99,999.67"
```