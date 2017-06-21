/**
 * @file JavaScript Object Methods
 *
 * @author 张志杰 <zhangzhijie@atlasdata.com.cn>
 *     创建于 2017年06月21日
 *
 * @copyright (c) 2014-2017 海量云图（北京）数据技术有限公司
 */

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById("call-with-()").textContent = person.fullName();

document.getElementById("call-without-()").textContent = person.fullName;

document.getElementById("to-upper-case").textContent = person.firstName.toUpperCase();
