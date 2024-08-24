// let arr1 = [1,2,3,4,5]
// let arr2 = ["two", "three", "four"]

// function iterator(arr){
//     for(let i = 0; i<arr.length; i++){
//         console.log(arr[i])
//     }
// }

// iterator(arr2)


// let arr1 = [1,2,3,4,5]


// function customIterator(array, callback){
//     for(let i = 0; i< array.length; i++){
//         callback(arr1[i],i,array)
//     }
// }

// customIterator(arr1, function(value, index, arra){
//     console.log(index)
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
//         return  value
//     }
// })

// console.log(arr2)


// filter()

// let arr1 = [1,2,3,4,5,6]

// let arr2 = arr1.filter(function(value, index, array){
//     // if(value % 2 == 0){
//     //     return  value
//     // }
//     return true
// })

// console.log(arr2)



// let arr = [4,2,5,1,6,3,7];
// arr.sort(function(value1 , value2){
//     return value2 - value1
// })
// console.log(arr)