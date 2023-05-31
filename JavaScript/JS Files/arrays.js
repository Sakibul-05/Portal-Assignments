// function supermarket(prices, n, k) {
//     // write code here
//     // do not console.log the answer
//     // return sorted array
//       prices.sort();
//       let buyingItems = prices.splice(2,k);
//       let sum =0;
  
//        for (let buyingItem of buyingItems) {
//            sum+=buyingItem;
//        }
//       return sum;
  
//     }
//     console.log(supermarket([4,1,2,3,5], 5, 3));

  //================Assignment Question ===============
// function findPair(array, k) {
   
//   const newArr = [];
//   array.sort();
//  for(let i=0; i<array.length-1; i++){
//    for(let j=i+1; j<array.length; j++){
//      if((array[i] + array[j]) === k){
//         newArr.push((i+1),(j+2));
//         return newArr;
//      }
//    }
//  }
 
// }
// console.log(findPair([1,1,3,2,2],3));

//=====================================================
//forEach(), map(), filter() => doesn't change original array.
//only sort() => change the origial array

////////////////// forEach ///////////////////////

// const arr = [2, 5, 4, 63, 2];
 
//forEach() takes callback function and inside it can take 3 parameters i.e. value,index,array and it doesn't return an array
// let newArr = []
//  arr.forEach((value,index,array)=>{ 
//      newArr.push(value+index);
// })
// console.log(newArr);
 
  

/////////////////// map() //////////////////////////
//map() method always return an array
// const arr = [8,5,6,7,2,9];
// const newArr = arr.map((value,index,array)=>{
//   return value*2;
// })
// console.log(newArr); //[16,10,12,14,4,18]


/////////////////////// filter() /////////////////////
//filter() method always return an array with true condition(mention inside callback function)
// const arr = [8,5,6,7,2,9];
// const newArr = arr.filter((value,index,array)=>{
//    return value%2==0; //here always boolean value return hobe
// })
// console.log(newArr); //[8,6,2] => becz filter that element which are even


//////////////////// sort() //////////////////
// const arr = [8,5,6,70,2,9];
// // arr.sort();
// // console.log(arr); //[2,5,6,70,8,9] => unexpected result
// //to resolve this one we can use compare function inside sort method
// arr.sort((a,b)=>{
//   return a-b;   //if b-a=>decending order
// })
// console.log(arr); //[2,5,6,8,9,70]

 