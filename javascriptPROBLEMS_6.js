// sting Slicing
let word= "The Amazing SpiderMan";
console.log(word.slice(12, 18));

// or method
 let word1= "I Love Riding Bicycle";
let word2= word1.slice(16,21);
console.log(word2)
//______________________________________________________--

//Split the string
let string= "LAptop,Smartphone,Headset";
string1= string.split(",");
console.log(string1);

//or another method

let string2="Static-Responsive-Dynamic";
console.log(string2.split("-"))

//______________________________________________________________________

//Trim the string

let a= "      Javascript";
let b=a.length;
let c= a.trim();
console.log(b)
console.log(c.length);
//or method

let a1 = "Hello      World    ";
console.log(a1.length);
console.log(a1.trim().length);

//______________________________________________________--

//Ends with a substring

const one = "Iron man";
console.log(one.endsWith("man"));
//or

const B= "The athelate is running";
  const C = B.endsWith("swim");
  console.log(C);
  //______________________________________________________________________________

  //String Staring with Vowel
  let str = "India";
  let vowels = ["a","e","i","o","u"];
  let lowerstr = str.toLowerCase();
  if (lowerstr.startsWith("a")|| lowerstr.startsWith("e")||  lowerstr.startsWith('i') || lowerstr.startsWith('o') || lowerstr.startsWith('u')){
    console.log("true");  // If the string starts with a vowel, print true
  } 
  else {
    console.log("false"); // If it doesn't, print false
  }
//or method (here we use includes() and tenary Operator)
let str1 = "Cold water is refreshing on a hot day ";
let vowels1 = ["a", "e", "i", "o", "u"];
let lowerstr1 = str1.toLowerCase();

console.log(vowels1.includes(lowerstr1[0]) ? "true" : "false");
//_______________________________________________________________________________________________________________________________________________________________-

//Array of substrings in Uppercase
let sente= "The Twilight Saga";
let Array= sente.toUpperCase().split(" ")
console.log(Array);
//
let sente1= "the sidewalk goes through the park";
let Array1= sente1.split(" ");
let Array2= Array1.map(word => word.toUpperCase());
console.log(Array2);

//____________________________________________________________________________________
// concatenate Strings

let firstW= "Hawali";
let secondW= "Islands";
let thirdW= firstW.concat(secondW);
console.log(thirdW.length);
//or 
let first= "gray wolf";
let second= "slimy worm";
let third= first + second;
console.log(third.length);
//_________________________________________________________________________________
//Whether string includes
let str2 = "JavaScript";
console.log(str2.toLowerCase().includes("script"));
//or 
let wordd= "gray wols"
console.log(wordd.includes("wolf"));
//__________________________________________________________________________________________________________
//substring starts with given string and use substring
let index= "White microwave";
console.log(index.substring(0,5).startsWith("White"));
//or 
let index1="The jaguar was looking for food";
console.log(index1.substring(4,10).startsWith("Jag"));
console.log(index1.substring(0,5).startsWith("The"));
//__________________________________________________________________________________________--
// find and Replace
let strA = "The cup is on the table";
let strB = strA.replace("is", "was");
console.log(strB);
//or 


const inputString = "Cheetah, the fastest land animal";
const searchString = "cheetah" ;
const replaceString = "amel";
if ((inputString.indexOf(searchString))%2===0){
    console.log(inputString.replace(searchString,replaceString))
}
else{
    console.log(inputString)
}
//_____________________________________________________________________________________