// let f1 = () =>{
    
//     let promise = new Promise( (resolve,reject) =>{
//       setTimeout( ()=>{
//         console.log('data......');
//         resolve();
//       },3000)
//     })
//     promise.then( (data) => {
//         console.log('Promise is resolve')
//       })
//       .catch( (error) =>{
//         console.log('Error',error)
//       }) 
   
//  }
 
// f1()



// second task 


// const filterObject = () =>{
//     return 'Hello';
// }

// console.log(typeof filterObject);



//third task 


// () => {
//     console.log('javascript.....')
// }


// 4 task

// let userData ={
//     name : 'Yasir Bajwa',
//     age : 22,
//     edu : 'BSCS'
// }

// delete userData.age;

// console.log(userData)





// 5 task

// var val1 = 10;

// if(true){
 
//     var val2 = 20;
//     let val3 = 30;


// }

// console.log(val1,val2,val3);

// 6 task

// console.log(console.log())
// undefined



// 7 task
// separate integer from array using filter or map
// let arr = ['a','2',3,'b',10];

// console.log(arr);

// var numbers = arr.filter( item => {
//        console.log(item)
// })
// function numbersOnly(value) {
//     if (typeof (value) === 'number') {
//         return value;
//     }
// }

// var numbers = arr.filter(numbersOnly);
// console.log(numbers)

// const myArr = ['Prihodi 23456 danaci 34 razhodi 23455 I drugi.'];
// filtered = myArr[0].replace(/\D+/g, ' ').trim().split(' ').map(e => parseInt(e));
// console.log(filtered);




//Task number 8
// Remove duplicate number from array

// var arr = [11,2,11,4,3,2,4,3,1,5,6];
// console.log(arr.sort((a,b) => a-b));
// var updateArr = arr.filter( (item,index)  => arr.indexOf(item) == index);
// console.log(updateArr.sort());


// Remove duplicate character from array


// let arr = 'Hello ll How';
// console.log(arr);
// let newArr = arr.split('');
// console.log(newArr);
// let updateArr = [... new Set(newArr)];

// console.log(updateArr);

// task number 10


// let arr = [1,4,3,0,2,5,6];

// let data = arr.map( (a) => a * 2).filter( (b) => b == 0 );
// console.log(data);

// task number 11

// let arr = [ 4,3.5,3,6,2];

// let newArr = arr.filter( a => a > 3);
// console.log(newArr)

// task number 12

// let test = (a,b, ...args) => {
 
//     a = a + 5;
//     b++;

//     return a + b+ args.reduce( (a,b) => a + b, 0);

// }
// console.log(test(2,7,10,5,2))


// task number 13

// let arr = [1]
// let user = [
         
//     arr.join(),
//     'Hello Pakistan',
//     ...arr,
//     10
// ]
// console.log(user)


// task number 14


// let arr = ['c','z','a','d'];

// let obj = {

//     name : 'Yasir',
//     newArr : arr.sort()
// }

// console.log(...obj.arr)

// error

// task number 15




// let lang = 'JS';
// let lang = 'Python'

// function test(){
//     let lang = 'Python'
// }

// test();
// console.log(lang)


// task number 16


// let test = (a, b = 10) => {

//     return 10;
//     return a + b;

// }

// let value = test(20,50);
// console.log(value)



// task number 17


// let test = 'JS';

// if(true){

//     var test = 'Python';
// }

// console.log(test);

//error


// task number 18

// function test (){

//     new Promise( (resolve,reject) =>{
//         setTimeout( () =>{
//             console.log('Line number 1...')
//         },1000);
//         console.log('Line number 2...')
//     })

// }

// test();
// console.log('Line number 3...')



// let test = () => {

//     let promise = new Promise( ( resolve,reject)  => {
 
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then( (data) =>{
//             resolve(data)
//         })
//         .catch( ( err) =>{
//             reject(err)
//         })  

//     })

//     promise.then( (data) =>{
//         console.log('Result',data);
//     })
//     .catch( (error) =>{
//         console.log(error);
//     })
// }

// test()




// task number 19

// let a = 0.1;
// let b = 0.2;

// console.log(a+b);

//output will be 0.30000000000000004

// task number 20


// let a = 10;

// switch (a) {
//     case 10:
//         console.log('Output is 10');
        
//         break;
//         case 20:
//             console.log('Output is 20');
            
//             break;
//     default:
//         console.log('Output is 30');

//         break;
// }

// task number 20


// for ( var i = 0 , j = 10 ; i < 5; i++ , j+=2){
//     console.log(i+j)
// }


// var a= 10;

// if(a =20){
//     console.log('work')
// }


//task number 21

// var test = function test(){
//     console.log(test === test);
// }
// test()

//output is true

// function test(){
//     return {
//         a : 10,
//         b: 20,
//         c = 10 + 15
//     }
// }
// console.log(test())

// error at c

// task number 22


// var date1 = new Date(2020,5,13);
// var date2 = new Date(2020,05,13);
// var date3 = new Date('2020/05/13');
// var date4 = new Date('20/5/13');

// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);




// var a = '10';
// var b = a;
// var c = b + 20;

// console.log(c + b);

// // output 102010


// var a = '10';
// var b = Number(a);
// var c = b + 20;

// console.log(c + b);

// // output 40


// function test(){
//    var a;
//    a++
//     return a + 5;
// }

// console.log(test())

//output is NaN


//task number 24

// function test(){
// return 9;
// missing above lines

// }
// let a = test();

// console.log( (a + 1) == 10)


//task number 25

// var a = 1;
// var b = a = typeof b;
// console.log(a);

//output is undefined


// var a = true + false;
// var b = 1 +true;

// console.log( a > b)


//task number 26


// function test(){

//     if(true){
//         const a = 10;
//     }
//     return a;
// }
// console.log(test())

//task number 27


// var a = ( null == undefined);
// var b = ( null == '');
// var c = ( null == 0);

// console.log(a);  //true
// console.log(b);  //fasle
// console.log(c);  //fasle


//task number 28

// let a = 2;
// let b = 4;

// console.log( a + (--b + a) + b++);


//task number 28


// function test(){

//     return 10;
// }

// console.log( typeof test())


//task number 29


// var arr = [10,20,30];

// arr[5] = 50;
// arr.push(40)
// console.log(arr[4])

//output is undefined.


//task number 28


// console.log('Javascript ' instanceof String);
// console.log(new Array(3).toString()); // ,,
// console.log([1] + [] + 'javascript'.split('')); //1j,a,v,a,s,c,r,i,p,t
// console.log('1' - '1'); //0


//task number 28

// var arr = [1,2,3,4];
// arr.length = 0;
// arr.push(0);

// console.log(arr)

//task number 29


function test(...args){
    return args.reduce( (current,carry) =>{
        return current - -carry
    },0)
}

console.log(test(10,20))
console.log(test(10,-10))
console.log(test(5,8))
console.log(test(0,0))

