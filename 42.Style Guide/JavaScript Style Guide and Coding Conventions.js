/**
 * @file JavaScript Style Guide and Coding Conventions
 *
 * @author 张志杰 <zhangzhijie@atlasdata.com.cn>
 *     创建于 2017年06月05日
 *
 * @copyright (c) 2014-2017 海量云图（北京）数据技术有限公司
 */

//Variable Names
// use camelCase for identifier names
var firstName = "John";
var lastName = "Doe";

var price = 19.90;
var tax = 0.20;

var fullPrice = price + (price * tax);

//Spaces Around Operators
//Always put spaces around operators ( = + - * / ), and after commas
var x = y + z;
var values = ["Volvo", "Saab", "Fiat"];

//Code Indentation
//Always use 4 spaces for indentation of code blocks
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

//Statement Rules
//General rules for simple statements:
//    Always end a simple statement with a semicolon.
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

//General rules for complex (compound) statements:
//    Put the opening bracket at the end of the first line.
//    Use one space before the opening bracket.
//    Put the closing bracket on a new line, without leading spaces.
//    Do not end a complex statement with a semicolon.
function func() { //Functions
    return 1 + 1;
}

for (var i = 0; i < 5; i++) { //Loops
    x += i;
}

var time = 12, greeting = '';
if (time < 20) { //Conditionals
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

//Object Rules
//General rules for object definitions:

//Place the opening bracket on the same line as the object name.
//    Use colon plus one space between each property and its value.
//    Use quotes around string values, not around numeric values.
//    Do not add a comma after the last property-value pair.
//    Place the closing bracket on a new line, without leading spaces.
//    Always end an object definition with a semicolon.
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
