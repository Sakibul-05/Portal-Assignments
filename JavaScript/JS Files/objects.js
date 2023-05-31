// let object = {
//     name: "sakibul",
//     age: 24,

// }
// console.log(object["name"]) //sakibul
// console.log(object[name]) //undefined


let person = {
     "first name" : "sakibul",
     "last name" : "Islam",
     age: 24,
     fullName:  function(){
        return this["first name"] +" "+ this["last name"]
     },
}
//clone object into new object
let newArr = {...person}     
console.log(newArr);






//object destructuring
const employes ={
    empId: 123,
    empName: "sakibul",
    designation: "SDE"
}
const {empId, ...rest} = employes;
console.log(empId); //123
console.log(rest); //{empName:"sakibul", designation:"SDE"}


const obj1 = {
    key1: "value1",
    key2: "value2",
}
// const obj2 = {
//     key3: "value3",
//     key4: "value4",
// }

const obj2 = Object.create(obj1);
console.log(obj2);
// ============class=========
// class Student{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// let s1 = new Student("sakibul", 24);
// console.log(s1.name);
 


