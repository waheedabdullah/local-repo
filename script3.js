// const student = {
//      fullName : "adullah",
//      marks : 94.4,
//      printMarks : function() {
//            console.log("marks = ", this.marks);
//      }

// };




// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%")
//     },
// };


// const karanArjun =  {
//     salary : 50000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     }
// }


// karanArjun.__proto__= employee;





class ToyotaCar {
constructor(brand, mileage) {
    console.log("creating new object"); 
    this.brand = brand;
    this.mileage = mileage;
}



    start() {
        console.log("start");
    }

    stop() {
        console.log("stop")
    }

    // setBrand(brand) {
    //     this.brandName = brand;
    // }
}



let fortuner = new ToyotaCar("fortuner","10");
console.log(fortuner);
// fortuner.setBrand("fortuner");








