// person Object factory function
function person(firstName,lastName){
    return firstName + " "+ lastName;
}

let person1 = person("Imran","Ali");
console.log(person1);

//___________________________________________________________________

//person Object using Constructor function

function persona(firstName1,lastName1){
    this.firstName1;
    this.lastName1;
    return (firstName1+" "+lastName1);
}
person2=persona("Sophia","JAckson");
console.log(person2);

//or same method
function personb(firstName0,lastName0){
    this.firstName0=firstName0;
    this.lastName0=lastName0;
    return (firstName0+" "+lastName0);
}
person3=personb("Jagadeesh","Rocky");
console.log(person3);

//__________________________________________________________________________

//Change Brand Name

function changeBrandName(proposedBrand){
    this.brandName = proposedBrand;
    return proposedBrand
}
console.log(changeBrandName("Royal Blue"));

//or another method 

function changeBrandName1(proposedBrand1){
    
    return proposedBrand1;

}
console.log(changeBrandName1("Dolphin Blue"));
//_______________________________________________________________________________________

//Update Person's Address (factory function)
function Address(currentCity,currentState){
    
    return (currentCity+" "+currentState);
}
console.log(Address("Amritsar","Punjab"));

//or another method  (constructor)
function Address1(currentCity1,currentState1){
    this.currentCity1= currentCity1;
     this.currentState1=currentState1;
    return (currentCity1+" "+currentState1);
}
console.log(Address1("Bengaluru","Karnataka"));

//__________________________________________________________

//RAtio of number(constructor function)

function ratio(firstNumber,secondNumber){
    this.firstNumber=firstNumber;
    this.secondNumber=secondNumber;
    return firstNumber/secondNumber;
}
console.log(ratio(5,2));
//or method

function ratio1(firstNumber1,secondNumber1){
    this.firstNumber1;
    this.secondNumber1;
    return firstNumber1/secondNumber1;
}
console.log(ratio1(12,3));
//___________________________________________________________________________
