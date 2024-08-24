// const arr = [1,2,3,4]
// console.log(arr)

// const obj = {
//     name: "code",
//     roll: 1234,
//     func: function(){
//         console.log("hello")
//     },
//     obj2: {
//         firstname: "code",
//         lastname: "quotient"
//     },
//     arr : [1,2,3,4]
// }
// obj.func()
// console.log(obj.func)
// console.log(obj.obj2.lastname)

// console.log(obj.name)
// console.log(obj.arr[1])

// console.log(obj)

// const obj = {
//     name: "code",
//     roll: 1234,
//     "full name": "code quotient",
//     obj2: {
//         firstname: "code",
//         lastname: "quotient"
//     },
//     arr : [1,2,3,4]
// }

// console.log("abc" in obj)

// for(let key in obj){
//     console.log(obj[key])
// }
// obj.roll = 456
// obj.address = "abc street"
// delete obj.obj2
// console.log(obj)

// console.log(obj["obj2"]["firstname"])

//strings


// let str = "this is string in javascript"

// let arr = str.split("i")
// console.log(arr)
// let substr = str.slice(0,-2)
// console.log(substr)

// let substr = str.substring(1,3)
// console.log(substr)

// console.log(str.charAt(2))
// console.log(str.includes("z"))



// let arr = Array.from(str)
// console.log(arr)

// arr.forEach((value, index, array)=>{
//     console.log(value)
// })

// for(let char in str){
//     console.log(char)
// }

// for(let i = 0 ; i<str.length; i++){
//     console.log(str[i])
// }


// const obj = {
//     name: "himanshu",
//     age: 25,
//     obj2: {
//         name: "himanshu",
//     }
// }

// console.log(obj)

// delete obj.obj2

// console.log(obj)

// const obj = {
//     name: "divya",
//     roll: 1190,
//     func:function(){
//       console.log("this is sample function in object which is called as METHOD");
//     },
//     "full name":"divya aggarwal",
//     arr: ["cse",3,12,2003],
//     obj2:{
//       first:"hey",
//       second:"hello",
//     }
//   }
  
//   console.log(obj);
//   delete obj.obj2;
//   console.log(obj);


let obj = {
  name: "himanshu",
  roll: 123
}

console.log("abc" in obj)