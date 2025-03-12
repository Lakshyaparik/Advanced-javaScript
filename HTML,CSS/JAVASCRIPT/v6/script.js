let array=["heelo","my","name","lakshya",12,true,{name:"lak"},function hello(){console.log("hello fun");
}]
console.log(array[7]);
console.log(array.length);

const newarray=array;

newarray[3]='theeit is';
console.log(array);

console.log(array.indexOf('name'));
console.log(array.includes('name'));
array.push(45);
console.log(array);
array.unshift("school");
console.log(array);
array.pop();
console.log(array);
array.sort();
const there=array.slice(2,7)
console.log(there);



