'use strict';
console.log("a");
console.log('a\'');

console.log("\' \n \t \u4e2d(unicode编码) \x41(Ascll字符)");
// 多长字符串
var a =`hello
?
pppp
gggg
`;
// 模板字符串
let name = 'ywq';
let age = 3;
let msg = `您好呀,${name}`;

let student = "student";
console.log("---------字符串长度----------");
console.log(student.length);

console.log("---------字符串不可以变性,定义好后不可以再赋值----------");
console.log(student[0])
// student[0] = 1; // 严谨模式下报错
console.log(student);

console.log("---------大小写转化----------");
student.toLocaleLowerCase();
student.toLocaleUpperCase();

console.log("---------获取字符换位置----------");
console.log(student.indexOf('t'));
console.log("---------截取字符串{属于包含前不包含后面 [...) }----------");
console.log(student.substring(1,3));


/** 数组 */
console.log("===数组===");
let arr = [1,2,3,4,5,6];
console.log("---------数组长度方法----------");
console.log(arr.length);
console.log("---------数组长度变小的时候，会丢失数据，变大扩容----------");
arr.length = 10;
console.log(arr.length);

/*数组元素获取索引下标*/
console.log("---------数组元素获取索引下标----------");
console.log(arr.indexOf(2));

console.log("---------`slice()  截取数组的部分数组，类似string的substring,也是[)----------");
console.log(arr.slice(1,5));

console.log("---------`可以使用指定方法完成栈和队列\n" +
    "push() [尾进],pop() [尾出]\n" +
    "unshift(头进) [],shift() [头出]`----------");
console.log(arr.push('b'));
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.unshift('b'));
console.log(arr);
console.log(arr.shift());
console.log(arr);


console.log("---------排序----------");
console.log(arr.sort());
console.log(arr);

console.log("---------元素反转----------");
console.log(arr.reverse());
console.log(arr);

console.log("---------拼接[不会改变元素组，采用临时数组]----------");
console.log(arr.concat(['a','b','c']));
console.log(arr);

console.log("---------链接符join[打印拼接数组，使用特定的字符串链接]----------");
arr.reverse();
console.log(arr.join('-'));

console.log("---------多维数组----------");
let arr2 = [[1,2],[3,4],["5","6"]];
console.log(arr2[1][1]);


/** 对象 */
console.log("===对象===");
console.log("---------定义一个person对象---------");
// 键值对描述属性，多属性使用逗号隔开最后一个不用,任意的键是字符串,值都是对象
let person = {
    name: "ywq"
    ,age: 3
    ,email: "132456@qq.com"
    ,score: 0
};
console.log(person);
console.log("1.对象的属性赋值和取值");
console.log((person.name = '???'));
console.log(person["name"]);
console.log(person.name);
console.log("2.使用不存在的属性，不会报错，会输出undefined");
console.log(person.haha);
console.log("3.动态增删属性");
console.log("person.haha = \"haha\";");
console.log((person.haha = "haha"));
console.log("delete  person.haha;");
delete  person.haha;
console.log("4.判断属性名、函数名是否在对象中");
console.log("\"age\" in person");
console.log("age" in person);
console.log("'toString' in person");
console.log('toString' in person);
console.log("5.判断对象中是否有属性名、函数名");
console.log(person.hasOwnProperty('toString'));

for (let personKey in person) {
    console.log(personKey + ": ")
    console.log(person[personKey]);
}
