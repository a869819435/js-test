'use strict';
// 创建一个map
let map = new Map([['tom',100],['jack',90],['???',95]]);
// 获取map中的值
let name = map.get('tom');
console.log(name);
// 新增或者修改map的值
map.set('admin',112);
console.log(map.get('admin'));
// 删除map的值
map.delete('admin');
console.log(map);
// 遍历map
for (let mapElement of map) {
    console.log(mapElement);
}
for (const mapKey in map) {
    console.log(mapKey + ": " + map.get(mapKey));
}

// 创建一个set,自动去重
let set = new Set([1,3,1,1,1]);
// 新增一个值
set.add(2);
console.log(set);
// 删除一个值
set.delete(2);
console.log(set);
// 判断是否有这个值
console.log(set.has(3));
console.log(set);
// 遍历set
for (let number of set) {
    console.log(number);
}
