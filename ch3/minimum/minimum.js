
min = function (x,y) {
    let returnValue;
    if (x>y) {returnValue = y;}
    if (x<y) {returnValue = x;}
    return returnValue;
}
console.log("The Minimum is:")
console.log(min(12,14));