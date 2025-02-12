
// Advanced Technologies
function AdvancedTechnologies(technoloy1,technoloy2,technoloy3){
    this.technoloy1= technoloy1;
    this.technoloy2=technoloy2;
    this.technoloy3=technoloy3;

    return (technoloy1,
        technoloy2,
        technoloy3 ) ;
    
    
}
let technology= new AdvancedTechnologies('Artificaial Intelligence','Virtual Reatlity','Cyber Security');
console.log(technology);

//or method

function AdvancedTechnologies1s(technoloyy1,technoloyy2,technoloyy3){
    this.technoloyy1=technoloyy1;
    this.technoloyy2=technoloyy2;
    this.technoloyy3=technoloyy3;

    return (technoloyy1,
        technoloyy2,
        technoloyy3 ) ;
    
    
}
let technologyy= new AdvancedTechnologies1s('Data science','Machine Learning','Augmented Reality');
console.log(technologyy);
//__________________________________________________________________________________

//Spacecraft Launch (using  class
class Isro{
    constructor(name){
        this.name=name;
    }
    launchSpacecra(){
        return `${this.name} Launched`
    }
}
let isro= new Isro('Chandrayaan-2');
console.log(isro.launchSpacecra());



//or method'

function  spacecraftName1(nam) {
    this.nam=nam;
    spacecraftName1.prototype.launchSpacecraft1= function(){
         console.log( `${this.nam} Launched`);
    
}
}

const spacecraft2 = new spacecraftName1("mangalyaan");
spacecraft2.launchSpacecraft1();
//_______________________________________________________________________________________

//Area and Perimeter of Rectangle

class Rectangle{
    constructor(length1,breadth){
        this.length1=length1;
        this.breadth=breadth
    }
    area(){
        console.log( this.length1*this.breadth);
    }
    permeter(){
        console.log( 2* (this.length1+this.breadth));
    }    

}
let rectangle= new Rectangle(10,50);
rectangle.area();
rectangle.permeter();

//or method
let length= 10;
let breadth1= 20;
console.log( length*breadth1);
console.log(2*(length+breadth1));

   


//_______________________________________________________________________________-

//Wage per Hour

function empolyee(income,workingHour){
    return income/workingHour
}
console.log(empolyee(120,6))

//or method
let income1= 5000;
let workingHour1=20;
console.log(income1/workingHour1);
//________________________________________________________________________________

//Bride and Groom
function Marriage(couple){
    this.bride= couple.bride;
    this.groom= couple.groom;
    this.family= function(){
        console.log(`Mr & Mrs  ${this.groom}`);
    };
}
let couple= {"bride":"sita","groom":"Ram"}
let marriage= new Marriage(couple);
marriage.family();

//or method
let bride= "sita";
let groom= "Rocky";
console.log(`Mr & Mrs ${groom}`);