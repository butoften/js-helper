/*
 +----------------------------------------------------------------------+
 | butoften                                                               |
 +----------------------------------------------------------------------+
 +----------------------------------------------------------------------+
 | Author: haowu  <vip@butof.com>                        |
 | Date: 2017/7/10                                       |
 +----------------------------------------------------------------------+
 zh：常用验证方法
 en：Common validate methods
 */
var ValidateHelper = (function () {
    function ValidateHelper() {
    }
    /**
     * @des-zh：验证邮箱地址
     * @des-en：validate email str
     * @param $emailStr
     */
    ValidateHelper.prototype.validateEmail = function (emailStr) {
        //let reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]/;
        var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+$/;
        if (reg.test(emailStr)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @des-zh：验证手机号
     * @des-en：validate mobile number str
     * @param mobileStr
     */
    ValidateHelper.prototype.validateMobile = function (mobileStr) {
        var reg = /^1[34578]\d{9}$/;
        if (reg.test(mobileStr)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @des-zh: 验证字符串是否为纯数字符串
     * @des-en: verify that the string is a int string
     * @param str
     */
    ValidateHelper.prototype.validateIntegerStr = function (str) {
        if (/^\d+$/.test(str)) {
            return true; //纯数字
        }
        return false; //非纯数字
    };
    /**
     * @desc-zh：单例模式
     * @desc-en：support singleton mode
     */
    ValidateHelper.instance = function () {
        if (!ValidateHelper.isHaveInstance) {
            ValidateHelper.isHaveInstance = true;
            ValidateHelper.mInstance = new ValidateHelper();
            return ValidateHelper.mInstance;
        }
        else {
            return ValidateHelper.mInstance;
        }
    };
    ValidateHelper.isHaveInstance = false;
    return ValidateHelper;
}());
//# sourceMappingURL=ValidateHelper.js.map