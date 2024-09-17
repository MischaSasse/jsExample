//een array is aangegeven met '= []'
/* let arr = ["this is an array with 1 element"]

* //een object is aangegeven met '= {}'
* let obj = {
*     firstname: "damien",
*     role: "student",
*     enrollmentYear: 2024
* }

* for (const properties in obj){
*     console.log(properties); //dit pakt de propertynamen van het object   
*     console.log(obj[properties]); //dit pakt de waardes van de properties
*     console.log("-----");//om gwn even wat spacing aan te geven
* }
*/


function myObject() {
    const obj = {
        firstName: "Damiën",
        lastName: "van den IJssel",
        age: 23,
    };
    console.log(obj.firstName);
    // let myName = obj[firstName]   Dit geeft een error
    let myName = obj["firstName"] // Zie je het verschil met de lijn erboven?
    console.log("name is "+myName);
    
}
// myObject()

function myArray() {
    let nameArray = ["Damiën", "Lucas", "Mischa"];
    nameArray.forEach((name) => {
    console.log(name);
  });
}
// myArray()

function forLoop() {
  let nameArray = ["Damiën", "Lucas", "Mischa"];
  for (let index = 0; index < nameArray.length; index++) {
      console.log(index + " " + nameArray[index]);
    }
}
// forLoop()

function whileLoop() {
    let nameArray = ["Damiën", "Lucas", "Mischa"];
    let i = 0; //je index variabel kan elke naam hebben die je maar wilt. Het is namelijk een variabel
    //wel is het handig om hier normaal een i of index aan te geven
    while (i < nameArray.length) {
        console.log(nameArray[i]);
    //after code
    i++;
}
}
// whileLoop()

// HOE WORDT DIT TOEGEPAST?? Read below :>

function changeTextColor() {
  let currentTextColor = document.body.style.color;
  const colorMap = {
    "": "red",  
    red: "blue",
    blue: "yellow",
    yellow: "green",
  };
  document.body.style.color = colorMap[currentTextColor]; //set de textcolor van je body naar de value van je property
  //   document.getElementsByTagName('header')[0].style.backgroundColor = "purple"
}