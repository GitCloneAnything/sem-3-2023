// let arr2 = ["two", "three", "four"]
// custom made iterators

// let arr = [1,2,3,4,5,6]

// function iterate(array,callback){
//     for(let i = 0; i<array.length; i++){
//         callback(array[i], i, array)
//     }
// }

// iterate(arr, function(value, index, array){
//     console.log(value)
// })

// forEach()

// let arr = [1,2,3,4,5,6]

// let forEachfunc = function(value, index, array){
//     console.log(value, index)
// }
// let arr = [1,2,3,4,5,6]

// arr.forEach(function (value, index, array){
//     array.pop()
//     console.log('hello')
// })

// map()

// let arr = [1,2,3,4,5,6]

// let arr2 = arr.map(function(value){
//     if(value % 2 == 0){
//         return value
//     }
// })

// console.log(arr2)

//filter()

// let arr = [1,2,3,4,5,6]

// let arr2 = arr.filter(function(value){
//     return true
//     // if(value % 2 == 0){
//     // }
// })

// console.log(arr2)


// const arr = Array.from({"name": "himanshu", "age": 24})
// console.log(arr)

// let str = "hello";
// const srr = str.split("")
// console.log(srr)


// const array = arr1.reduce((sum , value)=>{
    //     if(value % 2 == 0){
        //         return sum + value
        //     }
        // },0)
        
        
        const arr1 = [1,3,4,2,0]
        
        arr1.sort((value1, value2) => {
                return value2 - value1
        })
            
            console.log(arr1)

