# js-helper
some useful tool class for javascript

##### @ArrayObjHelper：Usage
```
<script src="ArrayObjHelper.js"></script>
<script>
    var demo = [];
    demo["key"] =1;
    console.log(demo);//you can see there is right associate array
    console.log(JSON.stringify(demo));//when you do this,you will find the wrong result
    var mArrayObjHelper = new ArrayObjHelper();//or use ArrayObjHelper.instance()
    var newDemo = mArrayObjHelper.standardArray(demo);
    console.log(JSON.stringify(newDemo));//the result is ok
</script>
```

在js里，本来是支持关联数组（键值数组）的，通过 console.log(demo);可以看到正确结果，但转json 的时候，则把关联数组的数据丢弃，我不知道这是一个json库的bug，还是我本人不知道的某个特性。不论如何，写了这么一个工具类将数组对象，转化成标准的格式，即如果是键值数组，则转化成对象，如果是索引数组，则保留数组格式。

In JS, it was supposed to support associative arrays (array of key values), through the console. log (demo); You can see the correct results, but when you convert to JSON, the data of the associative array will be lost, I don't know if this is a bug in a JSON library or a feature I don't know about. Anyway, write a tool class that converts an array object into a standard format, that is, if it is an array of key values, it is converted to an object, and if it is an indexed array, the array format is preserved.

再举个例子：
js端：发送json串 “{}” 给php

php端：
$a = json_decode("{}",true);
$b = json_encode($a);
var_dump($b);

结果为：
string(2) "[]"

此时，返回给js端的json串，意义就改变了，
如果不用我今天上传的方法，那么，不是js端需要手动人为判断，就需要php端手动判断，或者要求php端不允许使用 json_decode true，

那么问题来了，凭啥不让php人员使用decode  true呢，
于是这个工作推给了js，
而js的程序员又开始生气了，凭啥我给你的是空对象，你返回来的是空数组，
那么，这个锅谁来背呢？

##### @ValidateHelper：Usage
```
<script src="ValidateHelper.js"></script>
<script>
    var str = "";
    var mValidateHelper = new ValidateHelper();//or use ValidateHelper.instance()
    mValidateHelper.validateEmail(str);
    mValidateHelper.validateMobile(str);
    mValidateHelper.validateIntegerStr(str);
</script>
```

