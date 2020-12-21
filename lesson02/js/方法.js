'use strict'
let ywq = {
    name: 'ywq'
    ,birth: 1999
    // 方法
    ,age: function (){
        // 今年 - 出生年
        let year = new Date().getFullYear();
        return year - this.birth;
        // this指对象本身（this始终指向调用它的对象）
    }
}

function getAge(){
    // 今年 - 出生年
    let year = new Date().getFullYear();
    return year - this.birth;
    // this指代是的window,但是window没有这个变量，所以报错了
    // 使用getAge.apply(ywq1,[]);改变this指代对象之后就不会报错
}

let ywq1 = {
    name: 'ywq'
    ,birth: 1999
    // 方法
    ,age: getAge
}

getAge.apply(ywq1,[]);
// 代表this指向了ywq1对象，参数为空，这时候调用getAge就不会报错了


