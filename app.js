// class Customer{
//     name;
//     age;
//     address;

//     constructor(name,age,address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// }

// let customer ={
//     name: "Jone",
//     age: 24,
//     address: "Colombo",

//     father:{
//         name: "Rony",
//         age: 50,
//     },

//     items:["item1","item2","item3"]
// };
// console.log(customer.name);
// console.log(customer.father);
// console.log(customer.father.name);
// console.log(customer.items);
// console.log(customer.items[1]);



// let customer2 = {
//     name: "John",
//     age: 25,
//     address: "New York",
//     salary: 50000,
//     items: [
//         {
//             id: 1,
//             name: "item1",
//             price: 100,
//             variants: [
//                 {
//                     id: 1,
//                     name: "variant1",
//                     price: 10
//                 },
//                 {
//                     id: 2,
//                     name: "variant2",
//                     price: 20

//                 }
//             ]
//         }, {
//             id: 2,
//             name: "item2",
//             price: 200
//         }, {
//             id: 3,
//             name: "item3",
//             price: 300
//         }
//     ],
//     father: {
//         name: "Doe",
//         age: 50,
//         address: "New York"
//     }
// };
// // console.log(customer2.name);
// // console.log(customer2.age);
// // console.log(customer2.address);
// // console.log(customer2.salary);
// // console.log(customer2.items[2].name);
// // console.log(customer2.father.name);

// console.log(customer2.items[0].variants[1].price);

// console.log()


// document.write("<h2>Hello</h2>");

// console.log(document);

// let heading = document.getElementById("heading");

// heading.innerText = "ABC";

// let num = 0;
// function increment(){

//     heading.innerText = "A"+ ++num;
//     console.log("+ Clicked");

// }

// function decrement(){

//     heading.innerText = "A"+ --num;
//     console.log(" - Clicked");

// }


// function changeHeading(){
//     let txtInput = document.getElementById("inputName");
//     console.log(txtInput);
//     console.log(txtInput.value);
//     let heading =  document.getElementById("heading");
//     heading.innerText = txtInput.value;
// }



function addition() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let calculation = document.getElementById("calculation");
    calculation.innerText = Number(num1) + Number(num2);
    console.log(calculation);
}

function substraction() {
     let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let calculation = document.getElementById("calculation");
    calculation.innerText = Number(num1) - Number(num2);
    console.log(calculation);
}