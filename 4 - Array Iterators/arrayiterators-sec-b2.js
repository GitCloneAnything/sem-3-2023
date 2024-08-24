// let arr = [1,2,3,4,5,6]
// let arr2 = ["one", "two", "three"]

// custom iterators

// function myIterator(array, func){
//     for(let i = 0; i < array.length; i++){
//         func(array[i],i)
//     }
// }


// myIterator(arr, function(value, index){
//     if(value % 2 == 0){
//         console.log(value)
//     }
// })

//forEach()

// let arr = [1,2,3,4,5,6]

// arr.forEach(function(value, index, array ){
//     // console.log(value, index, array)
//     array.pop()
//     console.log("hello")
// })

// map()

// let arr = [1,2,3,4,5,6]

// let arr2 = arr.map(function(value, index){
//     if(value % 2 == 0){
//         return value
//     }
// })

// console.log(arr2)


// filter()

// let arr = [1,2,3,4,5,6]

// let arr2 = arr.filter(function(value, index){
//     // if(value % 2 == 0){
//     //     return true
//     // }
//     return true
// })

// console.log(arr2)

// let arr = [3,2,4,1,6,0]
// arr.sort(function(value1, value2){
//     return value2 - value1
// })
// console.log(arr)


let arr = [1, "one", true, "three", "four"]

function countString(array){
    let count = 0
    array.forEach(function(value, index){
        if(typeof value === "string"){
            count ++
        }
    })
    return count;
}

console.log(countString(arr))
