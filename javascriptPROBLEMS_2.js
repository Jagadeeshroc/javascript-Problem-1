//
//Predict the winner


function getWinner(averageSpeed1,averageSpeed2){
    return averageSpeed1>averageSpeed2 ? "RAcer1": "RAcer2";
}

let winner = getWinner(98.30,92.39);

console.log(winner);
   
        //or another method

let averageSpeed3= 90;
let averageSpeed4= 100;  

switch (true) { 
    case (averageSpeed3 > averageSpeed4):
        console.log("RAcer1");
        break;

    case (averageSpeed3 < averageSpeed4):
        console.log("RAcer2");
        break;

    default:
    console.log("its a TIE")
    break;

}
//---------------------------------------------


//Simple Calculator

let a= 2;
let b= 3;
let operator = "+" ;
 switch (operator) {
    case"+":
    console.log(a+b);
    break;
    case"-":
    console.log(a-b);
    break;
    case"*":
    console.log(a*b);
    break;
    case"/":
    console.log(a/b);
    break;
    default:
    console.log("invalid operator")
 }
 ///------------------------------------------------------------------------------

 //Calculate the Area of a Square//

 let n = 10;
 console.log(n*n);

 //or
 function square(n){
    return n*n
 }
 console.log(square(4));
 //__________________________________________________

 //Discounted Fare

 
 function Calculate(a,b){
    return a-(a*b)/100
    
 }
 let dis= Calculate(180,25);
 console.log(dis);
 //or another method 


 let totalNum1= 200;
 let discount1= 10;
 let discountFare1= totalNum1-(totalNum1*discount1)/100;
 console.log(discountFare1);
 ///_______________________________________________________________

 //Employee Details
 let name1 = "John";
 let job= "Project Manager";

 console.log(`name : ${name1}, role :${job}`); //not object
 console.log({ name: name1, role: job });


///or another method

 

let N= "Deepak";
let j= "software Developer";
let employee= (N,j)=>{
    return {name:N,role:j}
}
console.log(employee(N,j));
//___________________________________________________________________________

//Quote


console.log(`Make it work, make it right,make it fast.`);

//___________________________________________________________