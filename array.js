// let arr=[1,2,3,4,5,5,6,7,8]
// let op=arr.findIndex((x,y)=>{return x>5})
// console.log(op)


// let arr=["hi","hello","12"]
// let op=arr.map(()=>{return "JS"+" hello"})
// console.log(op)

// let arr=["hi","hello","12"]
// let op=arr.forEach((value)=>{return "JS"+" hello"})
// console.log(op)

// let arr=[18,23,45,10,11,29];

// let op=arr.filter((x,y,z)=>{return x>=18})

// console.log(op)

// let arr=["java","javascript","html","react","nodejs"]

// let op=arr.filter((x,y,z)=>{return x.length>=5 })

// console.log(op)

// let arr = ["Java", "java", "Html", "css", "Css", "React", "react"];
// let op = arr.filter((x, y) => {
//   return x[0] == x[0].toUpperCase();
// });
// console.log(op);

// let arr = [3, 5, 2, 4, 7, 9];
// let op = arr.reduce((x, y , z) => {
//   console.log(x, y);
//   return "hello";
// });

// let arr = [3, 5, 2, 4, 7, 9];
// let op = arr.reduce((x, y , z) => {
// //   console.log(x, y);
//   return x+y;
// },10);
// console.log(op);

// let arr = [3, 5, 2, 4, 7, 9];
// let op = arr.reduceRight((x, y , z) => {
//     console.log(x, y);
//   return x*y;
// },10);

// console.log(op);


// let arr=[24,12,1,28,110,23,22,21];

// let op=arr.every((x,y)=>{return x>=18})
// console.log(op)

// // if every element in the array passes the condition of
// //  the test function then returns true otherwise returns false.

// let arr1=[23,12,14,16,17];

// let op1=arr1.some((x,y)=>{return x>18})
// console.log(op1);

// let arr=["blue","amazon","red","green","yello"];

// let op=arr.sort();

// console.log(op)

// let arr = [9, 18, 15, 23, 102, 789, 15, 23];

// let op = arr.sort((a, b) => {
//   return b - a;
// });

// console.log(op);


// let arr=[1,2,3,4,5];
// let op=arr.reverse();
// console.log(op)

let str="hello";

//op="olleh"


let op=str.split("").reverse().join("");
console.log(op);
