const fibonacci = function(a) {
    // if a is a string convert to number
    if (typeof a === "number"){
        a = Number(a);
    }
    // doesn't accept negatives
    if (a < 0) {
        return "OOPS";
    }

    // return element at index (starting from 1) a from fibonacci series 1, 1, 2, 3
    let fiboArray = [1, 1];
    // add as many fibonacci number to the array as we need for the given index
    // loop starts at 2, so array isn't expanded if asked for index 1 or 2
    for (let i = 2; i<a; i++){
       newNumber = fiboArray[fiboArray.length-1] + fiboArray[fiboArray.length-2];
       fiboArray.push(newNumber);
    }
    return fiboArray[a-1];

    //does

};

// Do not edit below this line
module.exports = fibonacci;
