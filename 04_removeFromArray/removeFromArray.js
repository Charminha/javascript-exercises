const removeFromArray = function(array) {
    // Looping through arguments object
    for (let i = 0; i < arguments.length; i++){
        // each argument is compared with each array element
        for (let j = 0; j < array.length; j++){
            // identical elements are removed using splice()
            if (array[j] === arguments[i]){
                array.splice(j, 1);
            }
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
