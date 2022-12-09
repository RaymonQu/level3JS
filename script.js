function initialize(){
    diceTable = document.getElementById("dicetable");
    rollDice();
}

function rollDice(){
    var numRolls = getRandomInteger(25, 100);
}

function getRandomInteger(a, b){
    
    return Math.floor((Math.random() * b) + a)
}


console.log(getRandomInteger(25, 100));