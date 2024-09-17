//Wat is een function?
function myFunctionName() {
  console.log("hello :D");
}
myFunctionName(); //Dit is een call naar de functie, Dit betekent dat de functie uitgevoerd zal worden.

//hoe werken variabelen?
function myVariable() {
  console.log("Variables using 'let'");
  let x; //een variabel is een container voor data. Je definieert het door let of const
  console.log(x);
  x = 5; //nu geven we ons variabel een waarde
  console.log(x);
  //--------------------------
  console.log("Variables using 'const'");
  const y = 3; //we definieeren y en geven deze een waarde
  console.log(y);
  // y = 5
  // console.log(y);
  // waarom?
}
// myVariable();

//array? wat is dat??
function myArray() {
  const nameArray = ["Damiën", "Lucas", "Mischa"];
  console.log(nameArray);
}
// myArray()

//loops? Hoe werken ze en zijn ze hetzelfde?
function whileLoop() {
  const nameArray = ["Damiën", "Lucas", "Mischa"];
  let i = 0; //je index variabel kan elke naam hebben die je maar wilt. Het is namelijk een variabel
  //wel is het handig om hier normaal een i of index aan te geven
  while (i < nameArray.length) {
    console.log(nameArray[i]);
    //after code
    i++;
  }
}
// whileLoop()

//for loop, wat is het verschil?
function forLoop() {
  const nameArray = ["Damiën", "Lucas", "Mischa"];
  for (let index = 0; index < nameArray.length; index++) {
    console.log(index + " " + nameArray[index]);
  }
}
// forLoop()

//wat is een if statement? wat is een else statement? 
function ifElseStatement() {
  let x = 2;
  //if(condition){run code if condition is true}
  if (x == 2) {
    //== kijkt niet naar het datatype
    console.log(x + " is 2");
  }
  if (x === "2") {
    //=== kijkt of het datatype ook gelijk is
    console.log(x + " is '2'");
  } else {
    console.log(
      "het is geen '2' want x is van het datatype " + typeof(x) + "en niet " + typeof("2")
    );
  }
}
// ifElseStatement();

//wat is het verschil met een loop?         msNote: loops geven meer controle en flexibiliteit
function myForEach() {
  const nameArray = ["Damiën", "Lucas", "Mischa"];
  nameArray.forEach((name) => {
    console.log(name);
  });
}
// myForEach();

//objecten???  (mocht je dit stuk niet helemaal begrijpen, dan is dat nog niet erg, dit is meer gevorderd dan het vorige)
//              (probeer wel mee te doen, maybe leer je het al wel)
function myObject() {
  const obj = {
    firstName: "Damiën",
    lastName: "van den IJssel",
    age: 23,
  };
  console.log(obj.firstName);
  // let myName = obj[firstName]   Dit geeft een error
  let myName = obj["firstName"]; // Zie je het verschil met de lijn erboven?
  console.log("name is " + myName);
}
// myObject()

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
  //^ set de textcolor van je body naar de value van je property

  /*
   * document is het hele DOM object, zie het als al je html
   * getElementsByTagName('tagName') maakt een array van alle elementen met de aangegeven tagname
   * [0] pakt de eerste index van je array, je gebruikt over het algemeen maar 1 header dus deze hoort bij index 0
   * style pakt de style (crazy i know)
   * hierna specificeren we met backgroundColor welk css 'onderdeel' we aan willen passen
   */
  //   document.getElementsByTagName("header")[0].style.backgroundColor = "purple";
}
