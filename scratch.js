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

function changeTextColor(){
    let currentStyle = document.body.style.color
    console.log(currentStyle);
    
    const colorMap = { //zie hoe een map ook een object is?
        "":"red",      //een map heeft standaard een base-case
        red: "blue", 
        blue: "yellow",
        yellow: "red"
    }
    document.body.style.color = colorMap[currentStyle] //set de textcolor van je body naar de value van je property
}