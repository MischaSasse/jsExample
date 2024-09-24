//Wat is een function?
function myFunctionName() {
  console.log("hello :D");
}
myFunctionName(); //Dit is een call naar de functie, Dit betekent dat alle code in de functie uitgevoerd zal worden.

//hoe werken variabelen?
function myVariable() {
  console.log("Variables using 'let'");
  let x; //een variabel is een container voor data. Je definieert het door let of const
  console.log(x);
  x = 5; //nu geven we ons variabel een waarde
  console.log(x);
  //Wat ook kan is gelijk een waarde geven wanneer je een variabel definieert.
  let z = "this is a string that has gotten a value when it was declared\n";
  console.log(z);

  //--------------------------
  console.log("Variables using 'const'");
  const y = 3; //we definieeren y en geven deze een waarde
  console.log(y);
  // y = 5
  // console.log(y);
  // waarom?
}
// myVariable();

//wat is een if statement? wat is een else statement?
function ifElseStatement() {
  let x = 2;
  //if(condition){run code if condition is true}
  if (x == 2) {
    //== kijkt niet naar het datatype
    console.log("== " + x + " is 2");
  }
  if (x === "2") {
    //=== kijkt of het datatype ook gelijk is
    console.log(x + " is '2'");
  } else {
    //run this code when if is false
    console.log(
      "=== het is geen '2' want x is van het datatype " + typeof (x) + "en niet " + typeof ("2")
    );
  }
}
// ifElseStatement();


/* EXERCISE:
* gebruik een if statement en 2 variabelen om het volgende te printen in je console:  2 + 3 = 5
* In je console.log mag je geen getallen gebruiken.
*/


//array? wat is dat??
function myArray() {
  const names = ["Damiën", "Lucas", "Mischa"];
  console.log(names);
}
// myArray()


/* EXERCISE:
* Maak een array met namen van mensen om je heen. 
* Laat de 2e naam van je array in je console zien 
*/




//loops? Hoe werken ze en zijn ze hetzelfde?
function whileLoop() {
  const names = ["Damiën", "Lucas", "Mischa"];
  let i = 0; //je begin variabel kan elke naam hebben die je maar wilt. Het is namelijk een variabel
             //wel is het handig om hier normaal een i of index aan te geven
  while (i < names.length) {
    console.log(names[i]);
    //after code
    i++;
  }
}
// whileLoop();

/* fhNote: 
* while loops worden vaak gebruikt voor als iets constant moet draaien,
* For loops voor als je door een array of iets dergelijks moet "iteraten" = door data structure heen lopen en informatie krijgen
* Ook als je een website maakt waar performance belangrijk is, is de loop die je gebruikt van belang.
* Bijvoorbeeld; for loops zijn ~3x sneller dan een .forEach() method op een array.
* Hou wel in je achterhoofd dat een .forEach() method veel leesbaarder is qua code, dus gebruik het als het een kleine array is
* of een aspect van de website dat niet vaak wordt gebruikt.
*/

//for loop, wat is het verschil?
function forLoop() {
  /* fhNote:
  * Deze syntax ziet er in het begin misschien wat moeilijk uit, maar het principe is erg simpel.
  * Een for loop is opgesplitst in 3 operaties, die je scheidt door middel van ';'.
  * In dit geval "let index = 0" maakt een nieuwe variabele aan specifiek voor deze loop. Een gebruikelijke naam is "i".
  * Deze variabele vergelijk je dan met een waarde om te kijken of het antwoord hiervan "true" is.
  * In dit geval: index < (is kleiner dan) de lengte van de array.
  * Zo lang als dit waar is, zal de derde operatie ook plaats vinden NADAT de code een keer gerund heeft.
  * Dit is altijd "i++". Hiermee hou je ook meteen bij hoeveel loops er zijn geweest.
  */

  const nameArray = ["Damiën", "Lucas", "Mischa"];
  for (let index = 0; index < nameArray.length; index++) {
    console.log(index + " " + nameArray[index]);
  }
}
// forLoop()

/* EXERCISE
* Gebruik een for loop om het volgende in je console te printen:
*    *
*    *
*    *
*    *
*    *
*    (5x een '*' onder elkaar) pro tip: Je browser console kan dit als *5 laten zien
*/

//wat is het verschil met een loop?         msNote: loops geven meer controle en flexibiliteit
function myForEach() {
  const names = ["Damiën", "Lucas", "Mischa"];
  names.forEach(name => {
    console.log(name);
  });
}
// myForEach();

//EXERCISE:
/*
* Maak een array genaamd fruitschaal en stop hier fruit in. (minimaal 4 unieke fruitsoorten) 
* Laat door middel van een foreach al het fruit in je console zien
*/

//EXERCISE 2:
/* 
* Laat nu elk stuk fruit zien in je console door middel van een loop
*/


//objecten???  (mocht je dit stuk niet helemaal begrijpen, dan is dat nog niet erg, dit is meer gevorderd dan het vorige)
//              (probeer wel mee te doen, maybe leer je het al wel)
function myObject() {
  const person = {
    firstName: "Damiën",
    lastName: "van den IJssel",
    age: 23,
  };
  // let myName = obj[firstName]   Dit geeft een error
  let name = person["firstName"]; // Zie je het verschil met de lijn erboven?
  console.log("name is " + name);
}
// myObject()


/*EXERCISE
* Maak een object genaamd auto. Dit object moet de volgende properties hebben:
* Merk, Kleur, Stoelverwarming, Aantal wielen
* Laat eerst in je console je hele auto zien. 
* Laat hierna alleen de kleur zien
*/




//Wat is een return?
function returnFunction() {
  for (let i = 0; i < 5; i++) {
    if (i == 3) {
      return i;
    }
  }
  return 1
}
//Wat is het verschil tussen return en break?

//functie in een andere functie aanroepen
function functionCallInAFunction() {
  let number = returnFunction();
  console.log(number);
}
// functionCallInAFunction()

//argumenten (args) en parameters (params)
function sum(param1, param2) {
  console.log(param1,"+",param2,"=");
  return param1 + param2;
}
// console.log(sum(4,6))  //wanneer je een functie aanroept en deze waardes meegeeft, dan heten dit argumenten


// HOE WORDT DIT TOEGEPAST?? Read below :>

function changeTextColor() {
  let currentTextColor = document.body.style.color;
  const colorMap = {
    "": "red", //"" is de default, Standaard heeft body geen tekstkleur. undefined/"" heeft als kleur zwart
    red: "blue",
    blue: "yellow",
    yellow: "red",
  };
  document.body.style.color = colorMap[currentTextColor];
  //^ set de textcolor van je body naar de waarde die correspondeert aan de ingegeven property

  /* msNote:
   * document is het hele DOM object, zie het als al je html
   * getElementsByTagName('tagName') maakt een array van alle elementen met de aangegeven tagname
   * [0] pakt de eerste index van je array, je gebruikt over het algemeen maar 1 header dus deze hoort bij index 0
   * style pakt de style (crazy i know)
   * hierna specificeren we met backgroundColor welk css 'onderdeel' we aan willen passen
   */

  document.getElementsByTagName("header")[0].style.backgroundColor = "purple";
}
// changeTextColor()


//hoe worden objecten dan toegepast?
function objectLiteral(){

  function User(first,last,email,pass){
    this.firstName=first,
    this.lastName=last,
    this.email=email,
    this.password=pass
  }
  
  let person = new User("mischa","sasse","random@email.com","randomPassword")
  let person2 = new User("damien","bigboi","random@email2.com","randomPassword2")
  console.log(person,"\n",person2);
}
// objectLiteral()