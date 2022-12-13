function isLandscape(width, height){
    return width > height;
}

function techChal(input){
        if(isNaN(input)){
            return "not a number";
        }
        else if(input % 5 && input % 3){
            return "Brooklyn Tech";
        }
        else if(input % 3){
            return "Brooklyn";
        }
        else if(input % 5){
            return "Tech";
        }
        return input; 
}

console.log(techChal("wtf"));