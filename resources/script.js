/**
 * Specefications:
 * Mealt quantity = 400gr per adult, if duration more 6h, 650gr per adult
 * Beer = 1200 ml per adult, if duration 6h+, 2000ml
 * Coke/Water = 1000ml pr adult, if duration +6h, 1500ml
 * ****Child = 0,5 of any quantity (mealt or coke/water (---childe don't drink beer---)) ****
 */

//Consts mealts with more and less 6h hours:
const mealtWithLessSixHours = 400;
const mealtWithMoreSixHours = 650;

//Const beers with more and less 6h hours
const beerWithLessSixHours = 1200
const beerWithMoreSixHours = 2000;

//const Coke/Water with more and less 6h hours:
const cokeWithLessSixHours = 1000;
const cokeWithMoreSixHours = 1500;

let inputAdults = document.getElementById("adult");
let inputChild = document.getElementById("children");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result");

//results variables
var mealtQuantity;
var beerQuantity;
var cokeQuatity;

function calc(){

    //Getting Values
    let duration = inputDuration.value; 
    let adult = inputAdults.value;
    let child = inputChild.value;

    //solution with ternary operator:
    // mealtQuantity = (duration < 6) ? 400 * adult + (400/2 * child) : 650 * adult + (650/2 * child);

    //solution with if/else statement:
    if(duration < 6){
        mealtQuantity = mealtWithLessSixHours * adult + (mealtWithLessSixHours/2 * child);
        beerQuantity = beerWithLessSixHours * adult;
        cokeQuatity = cokeWithLessSixHours * adult + (cokeWithLessSixHours/2 * child);

    }else{
        mealtQuantity = mealtWithMoreSixHours * adult + (mealtWithMoreSixHours/2 * child);
        beerQuantity = beerWithMoreSixHours * adult;
        cokeQuatity = cokeWithMoreSixHours * adult + (cokeWithMoreSixHours/2 * child);
    }

    console.log(mealtQuantity);   
    console.log(beerQuantity);    
    console.log(cokeQuatity);                                       
}



function display(){
   result.innerHTML = `<p>${Math.ceil(mealtQuantity/1000)}kg of Delicious Meal</p>`;
   result.innerHTML += `<p> ${Math.ceil(beerQuantity/350)} can of Beer (Drink With Moderation)</p>`;
   result.innerHTML += `<p> ${Math.ceil(cokeQuatity/2000)} bottle of Cooke and Water (Cheers!) </p>`;
}