// const number = 10;
// function fibonacci(number) {
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
// }
// fibonacci(10);

// function factorial (number) {
//     if(number == 0 || number == 1) {
//         return 1;
//     }
//     else {

//         let fact =1 ;
//         for (i=1; i<=number; i++) {
//             fact =fact * i;
//         }
//       return fact;
//     }
// }
// // let a =factorial(5);
// // console.log(a);
// console.log(factorial(5));

// function armstrong(number){
//     let i = number;
//     let sum=0;
//     let a;
//     while (number != 0) {
//          a = number%10;
//         //  console.log(a);
//          sum = sum + a*a*a;
//          console.log(sum)
//         number= Math.floor(number/10);
//         //  console.log(number)
//     }
//     if(i == sum){
//         return "It's a armstrong no."
//     }
//     else
//         return "Not a armstrong no."

// }
// console.log(armstrong(30))

// function pallindrome(number){
//     let i = number;
//     let sum=0;
//     let a;
//     while (number != 0) {
//          a = number%10;
//         //  console.log(a);
//          sum = sum * 10 + a;
//          console.log(sum)
//         number= Math.floor(number/10);
//         //  console.log(number)
//     }
//     if(i == sum){
//         return "It's a pallindrome no."
//     }
//     else
//         return "Not a pallindrome no."

// }
// console.log(pallindrome(1))

// function perfect (number) {
//     if(number==0){
//         return 0;
//     }
//     else {
//     fact=0;
//         for (i=1; i<number; i++){
//             if(number%i == 0){
//                fact = fact + i;
//             }

//         }
//         if(fact== number){
//             return "Perfect No.";

//         }
//         else
//         return "Not a perfect no.";
//     }
// }
//     console.log(perfect(5))

// let str1 = "Hello";

// let a = str1.split("");
//  let rev = a.reverse();
// let joinwords = rev.join("");

// console.log(joinwords)

//program to count number of keys/properties of an object.
// const teacher = {
//     name: 'sahil',
//     age: 20,
//     sub: ['physics','maths']
// };

// let count = 0;

// for (let key in teacher){
//     count++;
// }
// console.log(count)

//program to merge two arrays and remove duplicate items
// function mergeArrays(arr1, arr2) {

//     for(i=0; i<arr1.length ; i++){
//         count=0;
//         for(j=0; j<arr2.length; j++){
//             if (arr1[i]==arr2[j]) {
//                 count++;
//             }

//         }
//     }
// }

function getUnique(arr) {
  let uniqueArr = [];

  // loop through array
  for (let i of arr) {
    console.log(uniqueArr.indexOf(i));
    if (uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);
