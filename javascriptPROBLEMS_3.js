//Passenger ticket confirmation status

let firstPassenger ="Madhav";
let firstStatus = true;
let secondPassenger = "Amith";
let secondStatus= false;
console.log({name:firstPassenger , isTicketConfirmed:firstStatus});
console.log({name:secondPassenger , isTicketConfirmed:secondStatus});
//or another method

function passengerDE(secondPassenger1,secondStatus1){
    return{name:secondPassenger1 , isTicketConfirmed:secondStatus1}
}
let details= passengerDE("laith",true);
let details1= passengerDE("Pratheek",true);
console.log(details);
console.log(details1);

//________________________________________________________________________________________

//User Online status

function User(name, isTicketConfirmed) {
    this.username = name;
    this.isOnline = isTicketConfirmed;
}

// Creating instances of Passenger using the constructor function
let details3 = new User("Raghav", true);
let details4 = new User("viskhas", true);

// Logging the details
console.log(details3);
console.log(details4);

function User(name1, isTicketConfirmed1) {
    this.username = name1;
    this.isOnline = isTicketConfirmed1;
}

// Creating instances of Passenger using the constructor function
let details5 = new User("Amrutha",false);
let details6 = new User("Priya", true);

// Logging the details
console.log(details5);
console.log(details6);
//____________________________________________________________________________

//Person Object Using FActory Function

function fullName(firstName,secondName){
    return firstName+" "+ secondName

}
console.log(fullName("Tom","chandler"));

//or another method

let a= "Ashley";
let b = "Miller";
console.log(a+" "+b);

//___________________________________________________________________________________________

//person Object using arrow Function

function PersonNameQ(FirstNameQ,SecondNameQ){
   this.getFullName=()=>`${FirstNameQ} ${SecondNameQ}`;
}
let person=(new PersonNameQ("Kylie","Grant"));
console.log(person.getFullName());

//or another method

//person Object Using Constructor Function

function PersName(FName,SName){
    //assign pproperties to the instance

    this.FName= FName;
    this.SName=SName;
     //define a method to get the fullname\
    this.GFname= function(){
        return `${this.FName} ${this.SName}`;
    };
}
     //create a new instance of PersName
let personQ= new PersName("John","Allister");
   //output the Full name
   console.log(personQ.GFname());

   //______________________________________________________________________________________________________


//FIND year

let date= 'july-24-2021';
let date1 = new Date(date);
console.log(date1.getFullYear());


let cal= '1945-8-10';
let cal1= new Date(cal);
console.log(cal1.getFullYear());
//__________________________________________________________________________

//Reschedule Event

let dates1= new Date();
dates1.setDate(12);
dates1.setMonth(2);
dates1.setFullYear(2022);
let formattedDate = dates1.toISOString().split('T')[0];
console.log(formattedDate);
//see here one line  
console.log(`${dates1.getDate()}-${dates1.getMonth() + 1}-${dates1.getFullYear()}`);

 //another method
let dates12= new Date();
dates12.setDate(20);
dates12.setMonth(7);
dates12.setFullYear(2021);
console.log(`${dates12.getDate()}-${dates12.getMonth() + 1}-${dates12.getFullYear()}`);

//______________________________________________________________________

//Expiry Date
let manufacturingDate = new Date("2020-01-21");
let monthsToExpiry = parseInt("8");
let expiryDate = new Date(manufacturingDate.getFullYear(),monthsToExpiry+manufacturingDate.getMonth(),manufacturingDate.getDate())
console.log(`${expiryDate.getDate()}-${expiryDate.getMonth() + 1}-${expiryDate.getFullYear()}`);

let manufacturingDate1 = new Date("2021-11-12");
let monthsToExpiry1 = parseInt("2");
let expiryDate1= new Date(manufacturingDate1.getFullYear(),monthsToExpiry1+manufacturingDate1.getMonth(),manufacturingDate1.getDate())
console.log(`${expiryDate1.getDate()}-${expiryDate1.getMonth() + 1}-${expiryDate1.getFullYear()}`);

//___________________________________________________________________________________________//