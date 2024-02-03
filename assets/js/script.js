"use strict"

//#region Homeworks



// function checkNums(number){
//     if(number % 3 == 0 && number % 7 == 0){
//         return "number can be divisible"
//     }
//     return "number can not divisible"
// }

// console.log(checkNums(21));




// function factorial(number) {
//     let factorial = 1;
//     if(number > 0){
//         for (let i = 1; i <= number; i++) {
//             factorial *= i
//         }
//         return factorial;
//     }
// }

// console.log(factorial(5));




// function multiplicationOfEvenNums(numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if(numbers[i] % 2 == 0){
//             sum += numbers[i]**2;
//         }
//     }
//     return sum;
// }


// let array = [1,2,3,4,5];
// console.log(multiplicationOfEvenNums(array));




// function login(email,password){
//     if(email == "cavid@code.edu.az" && password == "12345"){
//         return "login success";
//     }
//     return "mail or password is wrong";
// }

// const email = "cavid@code.edu.az";
// const password = "12345";

// console.log(login(email,password));




// function sumOfOddNums(numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if(numbers[i] % 2 == 1){
//             sum += numbers[i];
//         }
//     }
//     return sum;
// }

// let arr = [1,2,3,4,5];

// console.log(sumOfOddNums(arr));


// function countOfEvenNums(numbers){
//     let count = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if(numbers[i] % 2 == 0){
//             count++
//         }
//     }
//     return count;
// }

// let arr = [1,2,3,4,5];

// console.log(countOfEvenNums(arr));

//#endregion


//#region Arrow-Recursive-Callback

// const sum = function(a,b){
//     return a + b;
// }


// const sum = (a,b) =>{
//     return a + b;
// }

// console.log(sum);


// function test(){
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }   
// }

// test(1,2,3,4,5)


// function test() {
//     console.log(this);
// }

// test();


// let stu = {
//     name: "Ilham",
//     surname: "Abasli",
//     age: 20,
//     fullName: () =>{
//         console.log(this)
//     },

//     fullData:function(){
//         console.log(this.name + " " + this.surname + " - " + this.age);
//     }
// }

// stu.fullName();
// stu.fullData();




// function showResult(num1,num2) {
//     let str = "Your result: "
//     let res = sum(num1,num2);

//     console.log(str + res);
// }


// function sum(a,b) {
//     return a + b;
// }

// showResult(5,6)



// function showNums(firstNum) {
//     console.log(firstNum);
//     let nextNum =  firstNum - 1;
//     if(nextNum > 0){
//         showNums(nextNum);
//     }
// }

// showNums(10)



// function getFactorial(num){
//     debugger
//     if(num === 0 || num === 1){
//         return 1;
//     }
//     return num * getFactorial(num - 1);
// }

// console.log(getFactorial(5));




// function sumNums(array,callback) {
//     let sum = 0;
//     for (const item of array){
//         if(callback(item)){
//             sum += item;
//         }
//     }
//     return sum;
// }


// function sumOfEven(item){
//     return item % 2 == 0;
// }

// function sumOfOdd(item){
//     return item % 2 == 1;
// }

// let arr = [1,2,3,4,5];
// console.log(sumNums(arr,sumOfOdd));

//#endregion