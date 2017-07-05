/*
 +----------------------------------------------------------------------+
 | butoften                                                               |
 +----------------------------------------------------------------------+
 +----------------------------------------------------------------------+
 | Author: haowu  <vip@butof.com>                        |
 +----------------------------------------------------------------------+
 zh：用于将关联数组（键值数组）转化成标准的对象格式，防止 键值数组在转json串的时候数据丢失
 en：Used to convert an associative array (a key-value array) to a standard object format, preventing the data loss of a key-value array when the JSON string is transferred
 */
var ArrayObjHelper = (function () {
    function ArrayObjHelper() {
    }
    /**
     * @param arg
     * @returns {boolean}
     * @des-zh：判断是否是数组
     * @des-en：Determine whether an array
     */
    ArrayObjHelper.prototype.isArray = function (arg) {
        if (typeof arg === 'object') {
            return Object.prototype.toString.call(arg) === '[object Array]';
        }
        return false;
    };
    /**
     * @param arg
     * @returns {boolean}
     * @des-zh：判断是否是对象
     * @des-en：Determine whether an object
     */
    ArrayObjHelper.prototype.isObject = function (arg) {
        if (typeof arg === 'object') {
            return Object.prototype.toString.call(arg) === '[object Object]';
        }
        return false;
    };
    /**
     * @param array
     * @returns {boolean}
     * @des-zh：判断是否为关联数组（键值数组/对象数组）
     * @des-en：Determines whether an associative array (a key-value array/object array)
     */
    ArrayObjHelper.prototype.isAssociateArray = function (array) {
        var This = this;
        if (This.isArray(array)) {
            var leftArray = [];
            for (var key in array) {
                leftArray.push(key);
            }
            var rightArray = [];
            for (var i = 0; i < array.length; i++) {
                rightArray.push(i);
            }
            if (leftArray.toString() == rightArray.toString()) {
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @param array
     * @returns {array}
     * @des-zh：将数组标准化，防止 转json串时，出现  var demo = []; demo['key'] = 1; JSON.Stringify(demo);结果为空的情况
     * @des-en：Standardize the array to prevent the JSON string from appearing, var demo = []; demo['key'] = 1; JSON.Stringify(demo); results are empty
     */
    ArrayObjHelper.prototype.standardArray = function (array) {
        var This = this;
        if (This.isAssociateArray(array)) {
            array = This.converAssociateArrayToObject(array);
        }
        for (var key in array) {
            var value = array[key];
            var newValue = void 0;
            if (This.getLengthOfObjArray(value)) {
                newValue = This.standardArray(value);
                array[key] = newValue;
            }
        }
        return array;
    };
    /**
     * @param array
     * @returns {object}
     * @desc-zh：将关联数组（键值数组）转化为对象
     * @desc-en：Converts an associative array (an array of key values) to an object
     */
    ArrayObjHelper.prototype.converAssociateArrayToObject = function (array) {
        var obj = {};
        for (var key in array) {
            obj[key] = array[key];
        }
        return obj;
    };
    /**
     * @param objArray
     * @returns {number}
     * @desc-zh：获取关联数组（键值数组/对象数组）的长度
     * @desc-en：Gets the length of the associative array (the key-value array/object array)
     */
    ArrayObjHelper.prototype.getLengthOfObjArray = function (objArray) {
        if (this.isArray(objArray) || this.isObject(objArray)) {
            var len = 0;
            for (var key in objArray) {
                len++;
            }
            return len;
        }
        else {
            return 0;
        }
    };
    /**
     * @desc-zh：单例模式
     * @desc-en：support singleton mode
     */
    ArrayObjHelper.instance = function () {
        if (!ArrayObjHelper.isHaveInstance) {
            ArrayObjHelper.isHaveInstance = true;
            ArrayObjHelper.mInstance = new ArrayObjHelper();
            return ArrayObjHelper.mInstance;
        }
        else {
            return ArrayObjHelper.mInstance;
        }
    };
    ArrayObjHelper.isHaveInstance = false;
    return ArrayObjHelper;
}());
//# sourceMappingURL=ArrayObjHelper.js.map