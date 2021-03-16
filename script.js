/**
 * * Q1.  30 Marks
 * * Create a self executing function that returns an object describing an animal of your choice.
 * * Ensure your animal object contains the following information
 * * -weight
 * * -covering
 * * -length
 * * -diet
 * * -predators
 * * -habitat
 * * -source information web page
 * 
 * * Your object needs to contain at least:
 * * -1 array containing 3 or more entries
 * * -1 or more strings
 * * -1 or more numbers
 * * -1 or more booleans
 */

let rabbit = {
    scientificName : "Oryctolagus cuniculus",
    approxWeightInKg : 3,
    covering : "rabbit fur",
    minimumLengthInCm :20,
    diet : "omnivore",
    predators : ["owls", "hawks", "eagles", "falcons", "wild dogs"],
    food : "Bell peppers",
    maleRabbitIsDoe : false,
    lifeSpanInYears : 9,
    layEggs : false,
    sourceReference:"https://www.livescience.com/28162-rabbits.html#:~:text=Rabbits%20are%20small%20mammals%20with,whiskers%20and%20distinctive%20long%20ears.&text=Rabbits%20and%20hares%20are%20in,Lepus%3B%20all%20others%20are%20rabbits.",
};

(() => {
    return rabbit;
})();

/**
 * * Q2. 20 marks
 * * Create a function expression that takes the output of question 1 and
 * * loops backwards through the array in the object console logging each time. 
 */

function reverseLoop(){
    for (i = rabbit.predators.length-1; i >= 0; i--){
        console.log(rabbit.predators[i])
    }
};
reverseLoop();



/**
 * * Q3. 25 marks
 * * Create a fat arrow function that takes in the output of question 1 and
 * * returns a string in the following format: The __animalName__ lives in __habitat__ and has a covering of __covering__.
 * * Ensure that your function is a single line.
 */

let singleLineString = (object) => {
    console.log(`The ${object.scientificName} lives in ${object.habitat} and has a covering of ${object.covering}.`);
}
singleLineString(rabbit);









/**
 * * Q4. 25 marks
 * * Create a function declaration that takes in the output of question 1, and loops through
 * * all of it's values, console logging each individual key:value pair.  
 * * To answer this question review how to loop through an object.
 */