countBs("BBCjhdBBC");
function countBs(string) {
    let counter = 0;
    for (i = 0; i <= string.length; i++)
        if (string.charAt(i) == "B"){
            counter++;
        }
    console.log(counter)
}
countChars("Min bruger er kattehenning82", "e");

function countChars(string, char) {
    let counter = 0;
    for (i = 0; i <= string.length; i++)
        if (string.charAt(i) == char){
            counter++;
        }
    console.log(counter)
}