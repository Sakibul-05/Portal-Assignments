// console.log(document.getElementById("text").type.slice(1,3));
// let text = document.getElementById("text");
// text.name = "nothing"
// console.log(text.name);


const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    const name = document.getElementById("name");
    name.style.borderColor ="red";
    name.style.outline = "none"
})



// const input = document.getElementsByTagName("input");
// // console.log(input[0].id);
// // for(let i=0; i<input.length; i++){
// //     console.log(input[i])
// // }
 
//  const userInput = document.getElementById("name");
//  console.log(userInput);
//  userInput.setAttribute("type", "number")
//  console.log(userInput.getAttribute("type")); //number
 

// let rates = document.querySelectorAll(".user");
// console.log(rates);


// const rootNode = document.getRootNode();
// console.log(rootNode); //document
// const htmlNode = rootNode.childNodes
// console.log(htmlNode);// NodeList(2) [<!DOCTYPE html>, html]
// console.log(htmlNode[1]);  // NodeList(1) [html]
// const headNode = htmlNode[1].childNodes
// console.log(headNode); // NodeList(3) [head, text, body]


// const input = document.querySelectorAll("p .user");
// console.log(input[0]);
// console.log(input[0].className); //user
// console.log(input[0].type); //radio
// console.log(input[0].name); //rate
// console.log(input[0].value); //Very poor
// console.log(input[0].id); //very-poor


const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
li1.innerText = "Home";
li2.innerText = "About";
li3.innerText = "Contact Us";
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
li1.style.backgroundColor = "red";
li3.style.backgroundColor = "lightgreen"
// document.body.appendChild(ul);


