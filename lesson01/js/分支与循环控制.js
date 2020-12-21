'use strict';
let arr = [1,2,3,4,56];
// arr.name = "123";  // 早期的漏洞
arr.forEach(function (value){
    console.log(value);
});

for (const arrKey in arr) {
    console.log(arr[arrKey]);
}

for (const number of arr) {
    console.log(number);
}