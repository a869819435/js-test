'use strict';

console.log(typeof 123);
// number
console.log(typeof '123');
// string
console.log(typeof true);
// boolean
console.log(typeof []);
// object
console.log(typeof {});
// object
console.log(Math.abs);
// function
console.log(undefined);
// undefined


let now = new Date(); // 获取当前日期
console.log(now.getFullYear()); // 年
console.log(now.getMonth() + 1); // 月(月份从0开始)
console.log(now.getDate()); // 日
console.log(now.getDay()); // 星期数
console.log(now.getHours()); // 时
console.log(now.getMinutes()); // 分
console.log(now.getSeconds()); // 秒
console.log(now.getTime()); // 时间戳(全世界统一时间1970-1.1到现在的毫秒数)
console.log(new Date(now.getTime())); // 时间戳转时间

console.log(now.toLocaleDateString());
console.log(now.toUTCString());
console.log(now.toJSON("yyyy-MM-dd"));

let user = {
    name: "123"
    ,age: 3
    ,sex: '男'
}

// 对象转化为json格式
console.log(JSON.stringify(user));
// 字符串转化为对象
console.log(JSON.parse('{"name":"123","age":3,"sex":"男"}'));



let person = {
    name: '???'
    ,age: 10
    ,run: function (){
        console.log(this.name + "run");
    }
}

let xiaoMing = {
    name: "小明"
}

// 原型对象
xiaoMing.__proto__ = student;

let Bird = {
    run: function (){
        console.log(this.name + "fly");
    }
}
// 改变小明的原型（类似继承）
xiaoMing.__proto__ = Bird;



