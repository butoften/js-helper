# js-helper
some useful tool class for javascript
##### @ArrayObjHelper：Usage

```var mArrayConvertion = new ArrayObjHelper();
<script src="ArrayObjHelper.js"></script>
<script>
	var demo = [];
    demo["key"] =1;
    console.log(JSON.stringify(demo));//when you do this,you will find the wrong result
    var mArrayObjHelper = new ArrayObjHelper();//or use ArrayObjHelper.instance()
    var newDemo = mArrayObjHelper.standardArray(demo);
    console.log(JSON.stringify(newDemo));//the result is ok
</script>
```
