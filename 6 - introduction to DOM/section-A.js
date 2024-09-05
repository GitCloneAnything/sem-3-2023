// accessing html element/tag

// let head = document.querySelector("h1"); // first occurence return 
// console.log(head)
// console.dir(head)
// head.innerText = "Document object model"

// let head = document.querySelectorAll("h1")
// console.log(head) // all element

// ALL METHODS FOR ACCESSING ELEMENTS

// let head = document.querySelector("h1"); // first occurence return 
// let head = document.querySelectorAll("h1")
// document.getElementById("") on basis of id
// document.getElementsByClassName("")
// document.getElementsByTagName("")


// innerText and innerHTML

// let div = document.getElementById("container")
// console.log(div);

// // textual content + tags
// console.log(div.innerHTML);
// // textual content
// console.log(div.innerText);

// div.innerHTML += "<button>click</button>"

// changing attribute
// let div = document.getElementById("container")
// div.setAttribute("class", "box");

// CHANGING STYLES

// let div = document.getElementById("container")
// console.dir(div)
// div.style.color = "white"
// div.style.backgroundColor = "black"

// TASK 

// let para = document.querySelectorAll("p");
// let head = document.querySelector("h1");
// // console.log(head)
// // console.log(para)
// let sum = 0;

// for(let value of para){
//     sum += parseInt(value.innerText)
// }

// head.innerText = sum

