/**
 * @file JavaScript Best Practices
 *
 * @author 张志杰 <zhangzhijie@atlasdata.com.cn>
 *     创建于 2017年06月06日
 *
 * @copyright (c) 2014-2017 海量云图（北京）数据技术有限公司
 */

//Declarations on Top
// Declare at the beginning
var firstName, lastName, price, discount, fullPrice;

// Use later
firstName = "John";
lastName = "Doe";

price = 19.90;
discount = 0.10;

fullPrice = price * 100 / discount;

// Declare at the beginning
var i;

// Use later
for (i = 0; i < 5; i++) {
}

//Initialize Variables
// Declare and initiate at the beginning
var firstName = "",
    lastName = "",
    price = 0,
    discount = 0,
    fullPrice = 0,
    myArray = [],
    myObject = {};

//Never Declare Number, String, or Boolean Objects
var x = "John";
var y = new String("John");
(x === y) // is false because x is a string and y is an object.

var x = new String("John");
var y = new String("John");
(x == y) // is false because you cannot compare objects.

//Don't Use new Object()
var x1 = {};           // new object
var x2 = "";           // new primitive string
var x3 = 0;            // new primitive number
var x4 = false;        // new primitive boolean
var x5 = [];           // new array object
var x6 = /()/;         // new regexp object
var x7 = function () {
}; // new function object

//Use === Comparison
0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false

//Use Parameter Defaults
function func(x, y) {
    if (y === undefined) {
        y = 0;
    }
}

//End Your Switches with Defaults
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Unknown";
}