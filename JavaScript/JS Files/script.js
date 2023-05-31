// "use strict";
// var a ="name"
// console.log(a)
// a = "saki"
// console.log(a) //saki
// console.log(a/1) //NaN
// var namemy = "Sakibul" 
// console.log(namemy);  //Sakibul
// var a = 10 - "4"; 
// console.log(a);  // 6 -->bug
// console.log( typeof(a));  //number 
// console.log("Java " + "      " + "Script"); //Java       Script
// console.log("4" + 5); //45
// var b = "4" - 10;
// console.log(b);  // -6  --> bug
// console.log(typeof (b))  //number
// console.log("sakibul" - "islam") //NaN --> Not a Number
// console.log(true + true); // 2 -->becz true=1 ; false=0
// console.log(isNaN("sakibul")) //true
// console.log(isNaN(364)); //false
//========Comparison Operator(==,===) ===========
// console.log(NaN = NaN); //NaN
// console.log(NaN == NaN); //false
// console.log(NaN === NaN); //false
// console.log(isNaN(NaN)); //true
// var x = 5;
// var y =5;
// console.log("is x and y is same: "+ x == y); //false
// console.log("is x and y is same: "+ (x == y)) // is x and y is same: true



// let num = 10;
// console.log(num++); //10
// console.log(num); //11

// let num = 10;
// console.log(++num); //11
// console.log(num); //11


// let num = 10;
// num++; //10
// ++num; //12
// --num; //11
// num--; //11
// ++num; //11
// console.log(num); //11

// value swapping
// let a = 10;
// let b = 5;
// let temp = a; //10
// a = b; // 5
// b = temp; // 10
// console.log(a , b); // 5 10

// let x = 5;
// let y = "5";
// console.log(x==y); //true -->Only value check
// console.log(x===y); //false -->value + data type check


//============ function =============
// function add( a, b) {
//     return (a+b);
// }
 
// let x = parseInt(prompt("Enter value of a:")) -->by default prompt() takes string type i.e. parseInt() method used to covert String to Number data type
// let y = parseInt(prompt("Enter value of b:"))
// console.log(add(x,y)); //call add() function

// var i, j;
// for(i=0, j=10; i<5; ++i){
//     console.log("Hello");
// }

 
// var a = 1;
// function b(){
//      a = 10;
//      return;
//      function a(){}
// }
// b();
// console.log(a);  //1

// var a = 1;
// function b(){
//     a = 78;
//     return;
//     function a(){}
// }
// b()
// console.log(a)

// function multiply(a, b) {
//     return a*b;
// };
// console.log(multiply);  //ƒ multiply(a, b) {return a*b;}


// function demo( ) {
//     console.log(x);
//     var x = 10;
    
// }
// demo();   //undefined

// let n =24;
// let l = 0, r = 100, ans = n;
// while(l<=r){
//     let mid = Math.floor((l+r)/2);
//     if(mid*mid<=n){
//         ans = mid;
//         l = mid + 1;
//     }
//     else{
//         r = mid - l;
//     }
// }
// console.log(ans);


// let num = 10;
// const increaseNumber = () => num++;
// const increasePassedNumber = number => number++;
// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);
// console.log(num1);
// console.log(num2);

// function compareMemebers(p1, p2=p) {
//     if(p1 !== p2){
//         console.log("Not the same!");
//     }else{
//         console.log("They are the same!");
//     }
// }
// const p = {name: 'Lydia'};
// compareMemebers(p);


// function test(a,b,c){
//     console.log(a + b*c);
// }
// test(2,3);


// function a(){
//     console.log("Inside a");
//     function b(){
//         console.log("Inside b");
//     }
// }
// a();

// if(""){
//     console.log("true")
// }else{
//     console.log("false");
// }

// if(-1){
//     console.log("true");
// }else{
//     console.log("false");
// }

// var a = "A";
// console.log(65 - a); //NaN

// console.log(1 - "1"); //11

// console.log(65 + "H");

// function test(a, b){
//     console.log(a + b);
// }
// test(2,3,4);

// console.log(null == undefined); //true

// var a;
// console.log(a + "b");


// var x = "apple"; 
// var y = function () { 
//     if(x == "false"){ 
//         console.log("first"); 
//     } 
//     if(!x){ 
//         console.log("second"); 
//     } 
//     var x = "banana" 
// }; 
// y();
 
// let score = undefined;
// if(score){
//     console.log("if block run")
// }else{
//     console.log("else block run")
// }

// let month = 13;
// switch (month) {
//     case 1:
//         console.log(31);
//         break;
//     case 2:
//         console.log(30);
//         break;    
//     case 3:
//         console.log(31);
//         break;    
//     case 4:
//         console.log(30);
//         break;    
//     case 5:
//         console.log(31);
//         break;    
//     case 6:
//         console.log(30);
//         break;    
//     case 7:
//         console.log(31);
//         break;    
//     case 8:
//         console.log(31);
//         break;    
//     case 9:
//         console.log(30);
//         break;    
//     case 10:
//         console.log(31);
//         break;    
//     case 11:
//         console.log(30);
//         break;    
//     case 12:
//         console.log(31);
//         break;    

//     default:
//         console.log("You have enter invalid month")
//         break;
// }
// debugger;
// let x = 0;
// do {
//     console.log(x);
//     x++;
// } while (x<=10);

 
// let x = 0;
// while(x<=10){
//     console.log(x);
//     ++x;
// }

// 1-10 table
// for(let num =1; num<=10; num++){

//     let multiply = 1;
//     while(multiply<=10){
//         console.log(num + " x "+ multiply + " = "+ (num*multiply));
//         multiply++;
//     }
// }

// function sumOfTwoNumbers(a,b){
//     return a + b;
// }
// // sumOfTwoNumbers(19,8)
// let result = sumOfTwoNumbers(20,78,8, 28);
// console.log(result);

 
// console.log(a);
// let a;

// let i = 0;
// for(i=0; i<10 || (i*=2); i+=2){
//     i++;
//     console.log("Inside Loop");
// }
// console.log(i);

// if(null){
//     console.log("Inside if");
// }else{
//     console.log("Inside else");
// }

//============= Sum of Digits =========
// let n = 2826;
//we need to find => 2+8+2+6 =18
/*
Bruitforce ===>>> 
console.log(23%10) //3
console.log(parseInt(23/10)) //2
*/
// let sum = 0;
// while(n!=0){
//     let digit = n%10;
//     sum += digit;
//     n = parseInt(n/10);
// }
// console.log(sum); //18



// =============== Palindrom ==========
// let n = 3765673;
// let number = n; // because n will be be update if we use directly
// let reverseOfN = 0;
// while(number!==0){
//     let digit = number%10;
//     reverseOfN = reverseOfN*10 + digit;
//     number = parseInt(number/10);
// }
// console.log(reverseOfN)
// console.log(typeof reverseOfN)
// if(n === reverseOfN){
//     console.log("Number is Palindrom");
// }else{
//     console.log("Number is not Palindrom");
// }



// ================= Function ===========
// function callMe(a,b){
//     console.log(a,b);
// }
// function callMe(a,b,c){
//     console.log(a,b,c);
// }
// callMe(2,4);
// callMe(2,3,4);


// ============== Array ===========
// let arr = [3,8,9];
// function pushAtBegining(a){
//     arr[arr.length] = a;
//     for(let i=arr.length-1; i>0; i--){
//         let temp = arr[i];
//         arr[i] = arr[i-1];
//         arr[i-1] = temp;
//     }
// }
// console.log(arr);
// pushAtBegining(30);
// console.log(arr);

// let arr = [3,8,4,2,6];
// //         0 1 2 3 4
// let index = 2;
// let number = 10;
// arr[arr.length] = 10;
// for(let i = arr.length-1; i>index; i--){
//     let temp = arr[i];
//     arr[i] = arr[i-1];
//     arr[i-1] = temp;
// }
// console.log(arr);


// const students = {
//     name: "Sakibul",
//     section: "A",
//     rollNo : 21,
//     friends: ["Rohan", "Soumya", "Emraj"],
//     isVegitarian: false,
//     meritalStatus: "Single",
//     address: {
//         vill: "Dakshin Jianda",
//         po: "Sagarbarh",
//         dist: "Purba Medinipur",
//         state: "WB",
//         pin: 722251
//     }
// }
 
// console.log(students.address["pin"]);
// console.log(students.address.dist.toUpperCase());

// let a = 20;
// function callme(){
//     let a = 30;
//     console.log(a);
//     console.log(b);
// }
// callme();
// let b = 90;


// let z = function(){
//     console.log("Inside the function");
// }
// z();

// let a = 20;
// function sum(){
//     let a = 10;
//     console.log(a);
//     let z = function(){
//         return a;
//     }
//     return z;
// }
// let c = sum();
// console.log(c());
// console.log(a);


// let sum = function(a,b,c){
//     return{
//         getSumTwo:function(){
//             return a + b;
//         },
//         getSumThree: function(){
//             return a+b+c;
//         }
//     }
// }
// let store = sum(3,4,5);
// console.log(store.getSumTwo());
// console.log(store.getSumThree());

// let a = 20;
// function one(two,a){
//     let func = function(a){
//         two();
//     }
//     return func;
// }
// let x = function(){
//     console.log(a+3);
// }
// let result = one(x,a+2);
// result();


// let a = 20;
// let sum = function(){
//     let b = 30;
//     let sub = function(){
//         return a + b;
//     }
//     return sub;
// }

// console.log(a); //20
// console.log(sum());
// let store = sum();
// console.log(store());


// let b = 200;
// function callme(b){
//     let a=  900;
//     return function(){
//         console.log(a+b);
//     }
// }
// let store = (callme(2*b));
// store();


// =========callback==========
// let x = function(a){
//     console.log(a());
// }
// let a = function(){
//     let a = 20;
//     return a;
// }
// x(a);



// let a = 20;
// let b = 30;
// let sum2 = function(para){
//     console.log(para(a,b));
// }
// let sum = function(a,b){
    
//     return a+b;
// }
// //  console.log(sum(a,b))
// sum2(sum);


// let arr = [2,3,4,2,5,67,0]
// arr.map(function(e,i,a){
//     console.log(i,e,a)
    
// })

/************************* Palindrom *****************/
// const str = "sakikas"
// const isPalindrom = function(data){
//     let startPointer =  0;
//     let endPointer =  str.length-1;
//     while(startPointer<endPointer){
//         if(data[startPointer] === data[endPointer]){
//             startPointer++;
//             endPointer--;
//         }else{
//             return false;
            
//         }
//     }
//     return true;
// }

// if(isPalindrom(str)){
//     console.log("Yes");
// }else{
//     console.log("No");
// }

// ==============================================

// const num = 12345;
// const newNum = num.toString();
// for(let i =0; i<newNum.length; i++){
//     console.log(Number(newNum[i]), typeof Number(newNum[i]));
// }

// function callme(a,b){
//     a[0] = 29;
//     b = 90;
// }
// let x = [2,3,4,5];
// let y = 80;
// callme(x,y);
// console.log(x,y); //[29,3,4,5] 80

// const person = {
//     firstName: "Sakibul",
//     lastName: "Islam",
//     age: 25,
//     DOB: "16/03/1998",
//     fullName: ()=>{
//         return (this.firstName + " " + this.lastName);
//     }
// }
// console.log(person.fullName())

 
//  let obj = {
//     0: "name",
//     1: 23,
//     name: "sakibul"
    
//  }
// //  console.log(obj[0]); //name
// // //  console.log(obj.0); // error
// // console.log(obj["0"]); //name
// // console.log(obj[name]); //undefined

 
// function isTargetPresent(array,target){
//     for(let i=0; i<array.length; i++){
//         if(array[i] === target){
//             return i;
//         }
//     }
//     return "target not found"
// }
// let arr = [2,3,4,1,4,7,9];
// console.log(isTargetPresent(arr,1));


/****************** Rest Parameter ************/
// let summAll = (...restParameter)=>{
//     // console.log(restParameter[0]); //it will store as an array 
//     let sum = 0;
//     for (const element of restParameter) {
//         sum+=element;
//     }
//     return sum;
// }
// console.log(summAll(2,3,4,5,6,7,8));

// ==================object distructuring=========

// const person = {
//     firstName: "Sakibul",
//     lastName: "Islam",
//     age: 25,
//     DOB: "16/03/1998",
// }

// const {firstName, lastName:var2} = person;  //ekhane jeta key seta rakhte hobe ,,but if u want to assign it another veriable then you can write lastName:var2
// console.log(var2);

