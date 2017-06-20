/**
 * @file JavaScript Object Properties
 *
 * @author 张志杰 <zhangzhijie@atlasdata.com.cn>
 *     创建于 2017年06月20日
 *
 * @copyright (c) 2014-2017 海量云图（北京）数据技术有限公司
 */

var person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};

console.log(person.firstName + " is " + person.age + " years old.");

console.log(person["firstName"] + " is " + person["age"] + " years old.");

var txt = '';
for (x in person) {
    txt += person[x];
}
console.log(txt);

person.nationality = "English";

txt = '';
for (x in person) {
    txt += person[x];
}
console.log(txt);

delete person.age;
delete person["nationality"];

txt = '';
for (x in person) {
    txt += person[x];
}
console.log(txt);