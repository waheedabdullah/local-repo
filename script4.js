// function hello() {
//  console.log("hello")
// }

// setTimeout(hello,4000)




// asynchronous //

// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// console.log("three");
// console.log("four");




// function greet(h){
//    console.log("Hello " + h);
// }

// function welcomeUser(c, greet){
//    c(greet);
// }

// welcomeUser(greet, "abdullah");





// function myadd(n) {
//     console.log("my father name was ." + n) 
// }


// function mylook(n, myadd){
//     n(myadd);
// }
// mylook(myadd, "abdul waheed")







// function sum(a,b) {
//     console.log(a+b)
// }


// function calculator(a,b,sum) {
// sum(a, b)
// }                                                                              
         
// calculator(1,2,sum)


 

// nesting 

// let age = 19;
// if(age>=18) {
//      if(age >= 60) {
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// }  else {
//     console.log("child")
// }



// for (let i = 1; i<5; i++) {
//     for(let j=0; j<5; j++){
//     console.log(j);
//     }
// }




// function getData(dataId,getNextData) {

// setTimeout(() => {
//     console.log("data", dataId);
//     if(getNextData) {
//         getNextData();
// }
// },4000);
// }

// getData(1, () => {
//     getData(2,() => {
//         getData(3);
//     });
// })





// let promise = new Promise((resolve, reject)=> {
//     console.log("i am a promise");
//     reject("success");
// });






// function getData(dataId,getNextData) {
//     return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//             // reject("error");
//             if(getNextData) {
//                 getNextData();
//         }
//         },5000);
// });    
// }    




// const getPromise = () => {
    
//      new Promise((resolve, reject)=> {
//         console.log("i am a promise");
//         resolve("success");
//     });
        
// }   






// resolve k liye then h 


// const getPromise = () => {
    
//    return new Promise((resolve, reject)=> {
//         console.log("i am a promise");
//         resolve("success");
//     });
// };


// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// });






// // catch k liye reject h 

// const getPromise = () => {
    
//    return new Promise((resolve, reject)=> {
//         console.log("i am a promise");
//         // resolve("success")
//         reject("error");
//     });
// };


// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled :",res);
// });


// promise.catch((err) => {
//     console.log("rejected",err);
// });





// function asyncFunc() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//         console.log("data1");
//         resolve("success"); 
// },4000); 
// });
// }


// console.log("fetching data1....")
// let p1 = asyncFunc();
// p1.then((res) => {
//    console.log(res)
// });





function getData(dataId) {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
   },2000);
});    
}    



// Async-await
(async function () {
    console.log("getting data1.....")
    await getData(1);
    console.log("getting data2.....")
    await getData(2);
    console.log("getting data3.....")
    await getData(3);
    console.log("getting data4.....")
    await getData(4);
    console.log("getting data5.....")
    await getData(5);
})();
















