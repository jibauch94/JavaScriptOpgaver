console.log("Hi There");

let size = 8;
let character = "";
character += "\n";

for(i = 1; i <= size; i++){
    for(j = 1; j <= size; j++){
        if (((j + i) % 2 == 0)){character += " ";}
    else {character += "#";}
    }
    character += "\n";
}

console.log(character);