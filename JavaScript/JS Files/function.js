// let work = ()=>{

// }
// console.log(work()); //undefined==>when function doesn't return anything and if we are trying to invoke that function and print it, then we will get undefined as an output


//=======function inside function===========
// function myFunction(){

//     const fun1 = function(){
//         console.log("Inside the fun1");
//     }

//     function fun2(params) {
//         return params*2;
//     }

//     const fun3 = (a,b,c)=>{
//         return a+b+c;
//     }

//     console.log("Inside myFunction");
//     fun1();
//     console.log(fun2(2));
//     return fun3; 

// }
// let store = myFunction();  
// console.log(store(2,3,4)); //9

//===========function return function=============

// function mul(a){
//    return (b)=>{
//     return function(c){
//       return a*b*c;
//      }
//   }
   
// }
// console.log(mul(1)(5)(2));
//=====================================================

//=================== rest parameter ============
// const addNumbers = (a,b,...c)=>{  //...c => c=[3,4,5,6,7]
//     //addNumbers = (...c) =>I can do like this so that every parameters comes under array
//     //If you want to check that c is an array or not
//     console.log(Array.isArray(c)); //true
//     let sum =0;
//     for (const element of c) {
//         sum+=element;
//     }
//     return a+b+sum; //28
// }

// console.log(addNumbers(1,2,3,4,5,6,7)); //28
//=================================================

//=============Can we access var outside function?=====
//as var is function scope so we can't access var decleared veriable outside function scope
// function myFun(){
//     var a = 20;
//     //also we can't access let/const decleared veriable outside function
//     return a;
// }
// console.log(myFun())//20
// console.log(a); //error: a is not defined
//after error porer line code execute hoi? => No

//===================================================
 
//=======why undefined print when log a function======
// function mainFun(){
//     const childFun1 = ()=>{
//         var b = 10;
//         console.log(b);
       
//     }
//     return childFun1;
// }
// let child = mainFun() //=>child = ()=>{var b=10; console.log(b)}
// console.log(child); //here we can see the output that child returns a function so i can call it
// child(); //10 print korbe
// console.log(child()); //10 print korbe sathe undefined o print korbe ==> karon child function doesn't return anything 
//=====================================================


//================= callback ===================
/*
What is callback? 
When we pass a function as a parameter in another function i.e. callback function
*/

  //================Example-1================
// function parentFun(callbackFun){
//     let a = 20;
//     return callbackFun(a*2); //40
// }
// function childFun(a){
    
//     return a;
// }
// console.log(parentFun(childFun)); //40


  //===================Example-2=============
// const parameterSum = (callback,...restParameters)=>{
//     let x = restParameters;
//     return callback(x); //27 =>fun1([2,3,4,5,6,7,3])

// }
// const fun1 = (a)=>{
//     let sum = 0;
//     for (const element of a) {
//         sum+=element;
//     }
//     return sum;
// }

// let store = parameterSum(fun1, 2,3,4,5,6,7,3);
// console.log(store); //27
//===================================================

//=================== call() ===================

//======Example-1
// const person1 = {
//   name: "sakibul",
//   age: 24,
//   about: function (){
//     console.log(`His/Her name is ${this.name} and age is ${this.age}`);
//   } 
// }
// const person2 = {
//   name: "sultana",
//   age: 23,
   
// }
// person1.about.call(person2); //sultana 23
// person1.about.call(person1); //sakibul 24
// person1.about.call(); //undefined

/////////// Example-2
// function myFun(){
//   console.log(this );
// }
// const person = {
//   name: "sultana"
// }
// window.myFun.call(person)
// myFun.call(person);






//================== apply()==================
// const person ={
//   fullName: function(city,pinCode){
//     return `${this.firstName} ${this.lastName} and city:${city}, pin:${pinCode}`;
//   }
// }
// const person1 ={
//   firstName: "Sakibul",
//   lastName: "Islam",
// }

// let details = person.fullName.apply(person1, ["Medinipur", 721151]); //apply() method er khetre arguments hisabe array nite hobe
// console.log(details); //Sakibul Islam and city:Medinipur, pin:721151



const user = {
  name: "sakibul",
  age: 24,
  about: function(){
    return this;
  }
}
 let store = user.about() ;
 console.log(store );
