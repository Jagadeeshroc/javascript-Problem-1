// Resolve with Pin
const myPromise= ()=>{
    return new Promise ((resolve,reject)=>{
        resolve(200);

    });
}
myPromise()
.then((fromResolve)=>{
    console.log(fromResolve);

});
//or method 
const myPromise1= ()=>{
    return new Promise ((resolve,reject)=>{
        resolve(240) ;
        });
        }
        myPromise1()
        .then((pin)=>{
            console.log(pin);
        });
//__________________________________________________________________________

//Reject with a Message 
const myPromise3=()=>{
    return new Promise ((resolve,reject)=>{
        reject("Request Rejected");
    });
}
myPromise3()
.catch((errorMessage)=>{
    console.log(errorMessage);
});
//or 
const myPromise4=()=>{
    return new Promise((resolve,reject)=>{
        reject("Resource Not Found");
    });
}
myPromise4()
.catch((ErrorMy)=>{
    console.log(ErrorMy);
});
//________________________________________________________________________________

//Validate User PIN
let pin= 9372;
const myPromise5=()=>{
    return new Promise((resolve,reject)=>{  
      

if(pin===9372){   
resolve("Success");
}
else{
    reject("PIN is Incorrect");
    }
    });
}
    myPromise5()
    .then((message1)=>{
        console.log(message1);
        })
        .catch((errors1)=>{
            console.log(errors1); 
    });
    //___


//or


//__________________________________________________________________________________

// Tree Planting

let usInput= true
let myPromise7=()=>{
    return new Promise((resolve,reject)=>{
        if (usInput){
            resolve("Tree Planted");
        }
        else{
            reject("Resource not available");
        }
    })
}
myPromise7()
.then((messages)=>{
console.log(messages);
})
.catch((error1)=>{
console.log(error1);
})
//or  modern method (async and await and try and catch)
let myPromise8 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});
async function myAsyncFunction() {
    try {
        let result = await myPromise8;  // Wait for the promise to resolve
        console.log(result);  // Will log "Operation successful!" if resolved
    } catch (error1) {
        console.log(error1);  // Will log "Operation failed!" if rejected
    }
}

myAsyncFunction();
//_____________________________________________________________________________________

//Search User

 const myPromise9= new Promise((resolve,reject)=>{
    let userName= "AhiRam";
    if (userName==="AhiRam"){
        resolve("User Found")
    } else{
        reject("User Not Found")
    }
 })

 async function USER() {
    try {
        let result5 = await myPromise9; 
        console.log(result5); // Wait for the promise to resolve
 }
    catch(error9){
        console.log(error9);
    }
 }
USER();

//or 
let userName4= "AhiRam";
let cons= userName4.includes("Rosy");
const myPromise10= new Promise((resolve,reject)=>{
    if (cons){
        resolve("User Found")
    } else{
        reject("User Not Found")
    }
 })

 async function USER1() {
    try {
        let result5 = await myPromise10; 
        console.log(result5); // Wait for the promise to resolve
 }
    catch(error6){
        console.log(error6);
    }
 }
USER1();


//__________________________________________________________________________________


//________________________________________________________________________________-
//Search Employee in a company 

let companyId= "PY234";
let employeeId= 293;

let  companies = [ {
    companyCode:"PY234",
    employees: [293, 730, 637]
  },
  {
    companyCode:"GR023",
    employees: [823, 563]
  },
  {
    companyCode:"HC754",
    employees: [511, 529, 943]
  },
  {
    companyCode:"PA439",
    employees: [276, 188, 333]
  },
  {
    companyCode:"CX536",
    employees: [356, 923]
  },
  {
    companyCode:"RD310",
    employees: [356, 901, 637]
  }

];

let myPromise15= new Promise((resolve,reject)=>{

    let findCompany= companies.find((items)=>{
        if(items.companyCode=== companyId){
            return true
        }
    });
    if (findCompany!= undefined && findCompany.employees.includes(employeeId)){
        resolve("Employee found");
        }
        else if (findCompany!=undefined && !findCompany.employees.includes(employeeId)){
            reject('Employee Not Found')
        }
        
        else{
            reject("company  Not found")
        }
})

async function USER2() {
    try {
        let result6 = await myPromise15; 
        console.log(result6); // Wait for the promise to resolve
 }
    catch(error8){
        console.log(error8);
    }
 }
USER2();

//___________________________________________________________________________________________--------
// Search User

let correctPin= 9372;
let userENter= 7777; 
let myPromise6=()=>{
    return new Promise((resolve,reject)=>{
       
        if (userENter===correctPin){
            resolve("Success");
            }
            else{
                reject("PIN is Incorrect");
            }   
    })
}
myPromise6()
.then((message1)=>{
    console.log(message1);
    })
    .catch((errors)=>{
        console.log(errors); 
});
