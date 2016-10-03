/**
 * @author Smith, Sierra (sjsmith8147@gmail.com)
 * @Verson 0.0.1
 * @Summary Project 1 || created 09.19.2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let  numBathrooms, numBedrooms, numCars, numTotal;
const basePrice = 50000,
    baseBedroom = 17000,
    baseBathroom = 12500,
    baseCars = 6000;

function main(){
    setNumBathrooms();
    setNumBedrooms();
    setNumCars();
    setnumTotal();
    printnumTotal()
}

main()

function setNumBathrooms (){
    numBathrooms = PROMPT.question('\n How many Bathrooms?');
}

function setNumBedrooms (){
    numBedrooms = PROMPT.question('\n How many Bedrooms?');
}

function setNumCars(){
    numCars = PROMPT.question ('\n How Many Cars in the Garage?');
}

function setnumTotal(){

    numTotal = basePrice + (baseBedroom * numBedrooms) + (baseBathroom * numBathrooms) + ( baseCars * numCars)
}

function printnumTotal() {
    console.log(` \n The total price is $${numTotal}`);
}