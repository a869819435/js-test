'use strict';
function qj(){
    let x = 1;

    function qj2(){
        let y = x + 1;  // 2
    }
    let z =  y + 1; //Uncaught ReferenceError: y is not defined
}

var tt = 1;
function qj1(){
    let x = 1;
    function qj2(){
        let x = 'A';  // 2
        console.log('inner' + x); // innerA
    }
    qj2();
    console.log('outer' + x); // outer1
}

var xx = "xxx";
window.alert(xx);
window.alert(window.xx); // 默认所有的全局变量,都会自动绑定在window对象下

var old_alert = window.alert;

window.alert = function (){

};
//  发现alert()失效,因为alert()被重新定义了
window.alert(123);

// 恢复alert
window.alert = old_alert;
window.alert(456);

// 唯一全局变量
var Mynamespace = {};

//定义全局变量
Mynamespace.name = 'test';
Mynamespace.add = function (a,b){
    return a + b;
}

function aaa() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i + 1); // 这里i已经出了作用域但是人生效

    for (let j = 0; j < 10; j++) {
        console.log(j);
    }
    console.log(j + 1);  //报错
}

const PI = "3.14159";
console.log(PI);
// PI = '123'; 这里报错，表示PI是常量





