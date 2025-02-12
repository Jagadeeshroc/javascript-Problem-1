// creating a copy of an array

let a= ["x","y","z"];
let b= [...a];
console.log(b);

let ab= [10,"true",1.5];
let ba= [...ab];
console.log(ba);

//______________________________________________________________________

// function calling with spread operator
productOf= 1;
function product(...args){
for(let i of args){
    productOf=productOf*i;
}    
return productOf;
    
}

console.log(product(...[2,4,6,8]));


productOf1 =1 ;
function product1(...arg){
    for (let i of arg){
        productOf1=productOf1*i;
    }
    return productOf1;
    
}
console.log(product1(...[1,2,3]));
//________________________________________________________________________________

// concatenate Array with spread opertor

let a1 = [2,3,4];
let a2 = [1,...a1,5];
console.log(a2);

let a3 = ["j","k"];
let a4 = [1,...a3,5];
console.log(a4);


//______________________________________________________________________

// concatenate Object with spread Operator
let model1= {'model':'Amaze'};
let engine ={'engineCapacity': 4000};
car= {...model1 , ...engine};
console.log(`${car.model} is powered with ${car.engineCapacity} cc engine.`);



let model3= {'model':'i10'};
let engine1 ={'engineCapacity': 3000};
car= {...model3, ...engine1};
console.log(`${car.model} is powered with ${car.engineCapacity} cc engine.`);


//__________________________________________________________________________

//Rest parameter
function handleFamily(...familyMembers){

let result = familyMembers.slice(0,2).join(" ");
let result2 = familyMembers.slice(2).join(",");
console.log(result);
console.log(result2);
}
let family= ["John","Martha","Nikky","Boby"];
handleFamily(...family);

    // another memthod//

let family1= ["Adam","Kary","ROBERT","Jessy","Harry"];
let result1 = family1.slice(0,2).join(" ");
let result3 = family1.slice(2).join(",");
console.log(result1);
console.log(result3);

//--------------------------------------------------------------

//OTP Message

let customerName="Raju";
let OTP = 89898;
resulto= `Hi! ${customerName}, your OTP is ${OTP}`;
console.log(resulto);

//another method

let customerName1="Sam";
let OTP1 = 49374;
resulto1= "Hi! " + customerName1 + " ,  your OTP is " + OTP1 ;
console.log(resulto1);

//---------------------------------------------------------------------------

//destructuring Arrays

sum=0;
function Add(a,b,...args){
    for (let i of args ){
        sum+=i;
    }
    return sum;

}
let nums=[1,2,3,4,5];
console.log(Add(...nums));


function Add(a,b,...args){
    let  sum = 0;
    for (let i of args ){
        sum+=i;
    }
    return sum;

}
let numsq=[632,9,828,601,599];
console.log(Add(...numsq));
//----------------------------------------------------------------

//Destructing Objects
let  UserDetails ={'username': 'marktonny', "email": 'marktonny@gmail.com'};
let {username,...rest} = UserDetails;
console.log(username);

// another method

let  UserDetails1 ={'username': 'Fernando', "email": 'fernandoFerrari@gmail.com'};

console.log(UserDetails1.username);

//-----------------------------------------------------------------------------

// final value Simple Interest

function calucalte (a,b=1,c=10){
    return a*(1+b*c/100);

}
let finalValue= calucalte(2000)
console.log(finalValue);

function calucalte (a,b=1,c=10){
    return a*(1+b*c/100);

}
let finalValue1= calucalte(1000,12,2)
console.log(finalValue1);


Import-Alias



