'use strict';
// 方式一
function abs(x){
    if (x >= 0){
        return x;
    }else {
        return -x;
    }
}
// 方式二(匿名函数。与java相比，它可以把结果返回给变量)
var abs1 = function(x){
    if (x >= 0){
        return x;
    }else {
        return -x;
    }
}

var abs2 = function(x){
    // 手动抛出异常[typeof 用于获取x的类型]
    if (typeof x !== 'number'){
        throw 'Not a number';
    }
    if (x >= 0){
        return x;
    }else {
        return -x;
    }
}


var abs3 = function(x,...rest){
    console.log("x => " + x);
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
    if (x >= 0){
        return x;
    }else {
        return -x;
    }
}