function initialize(){
    diceTable = document.getElementById("dicetable");
    rollDice();
}

function rollDice(){
    var numRolls = getRandomInteger(25, 100);
    for(var i = 0; i < numRolls; i++){
        var dieRoll = getRandomInteger(1, 6);
        var newRow = diceTable.insertRow();
        var newCell = newRow.insertCell();
        newCell.innerHTML = "Roll " + (i + 1);
        
        newCell = newRow.insertCell();
        newCell.innerHTML = dieRoll;
    }
}

function getRandomInteger(a, b){
    
    return Math.floor((Math.random() * b) + a)
}


console.log(getRandomInteger(25, 100));