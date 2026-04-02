// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked")
//     let a = 25;
//     a++;
//     console.log(a); //26
// }


// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log("you are inside div")
    
// }




// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);// type ajaye gi click
//     console.log(e.target);// target matlab  matlab is jaga 
//     console.log(e.clientX, e.clientY);
// }




//  let div = document.querySelector("div");

//  div.onmouseover = (e) => {
//     console.log(e);
//      console.log(e.type);// type ajaye gi click
//      console.log(e.target);// target matlab  matlab is jaga 
//      console.log(e.clientX, e.clientY);
// }

 

// event listener //;

//  let btn1 = document.querySelector("#btn1");

//  btn1.addEventListener("click", (evt) => {
//   console.log("button1 was clicked");   
//   console.log(evt);
//   console.log(evt.type)                                                         
//  });



// btn1.addEventListener("click", () => {
//   console.log("button1 was clicked - handler2");                                                            
//  });



// .removaddEventListener // 

// btn1.addEventListener("click", () => {
//   console.log("button1 was clicked - handler1");                                                            
//  });

//  const handler2 = () => {
//      console.log("button was clicked - handler2");
//     };
    
//     btn1.addEventListener("click", handler2);



// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler3");                                                            
// });



// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler4");                                                            
// });

// btn1.removeEventListener("click",handler2);



// //practice q1 ;

// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode =  "light";

// modeBtn.addEventListener("click", () => {
// if(currMode === "light") {
//     currMode  = "dark";
//     // document.querySelector("body").style.backgroundColor = "black";
//     body.classList.add("dark");
//     body.classList.remove("light");
// }else {
//     currMode = "light"
//     // document.querySelector("body").style.backgroundColor = "white";
//     body.classList.add("light");
//     body.classList.remove("dark")
// }
// console.log(currMode);
// });



// self practice ; 


let newbtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

newbtn.addEventListener("dblclick", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
}else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
}
console.log(currMode);
});















