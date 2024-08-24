// let arr1 = [1,2,3,4,5,6]
// let arr2 = ["one", "two", "three"]


// function myIterator(arr){
//     for(let i = 0; i<arr.length; i++){
//         console.log(arr[i])
//     }
// }

// myIterator(arr2)


// custom iterator

// let arr1 = [1,2,3,4,5,6]

// function myIterator(array, callback){
//     for(let i = 0; i < array.length; i++){
//         callback(array[i],i)
//     }
// }

// myIterator(arr1, function(value, index){
//     console.log(value * 2)
// })

// forEach()

// let arr1 = [1,2,3,4,5,6]

// arr1.forEach(function(value, index, array){
//     array.pop()
//     console.log("hello")
// })

// map()

// let arr1 = [1,2,3,4,5,6]

// let arr2 = arr1.map(function(value, index, array){
//     if(value % 2 == 0){
//         return value
//     }
// })

// console.log(arr2)

// filter()

// let arr1 = [1,2,3,4,5,6]

// let arr2 = arr1.filter(function(value, index, array){
//     // if(value % 2 == 0){
//     //     return true
//     // }
//     return true
// })

// console.log(arr2)

// sort the given array
let arr = [3,1,5,2,5,0,7]

arr.sort(function(value1 , value2){
    return value2 - value1
})

console.log(arr)

