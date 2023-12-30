const palindromes = function (words) {
    // let words = "A carb, a man, a maraca?!"
    // convert string to lower case
    words = words.toLowerCase();
    // remove anything that is not a letter or digit
    words = words.replace(/[^\w\']|_/g, "");
    let charArray = words.split('');   

    // console.log(charArray);
    let isPalindrome = true;
    for(let i = 0; i<(charArray.length/2)-1 ; i++){
        if(charArray[i] !== charArray[charArray.length-i-1]){
            isPalindrome = false;
            // console.log("set to false");
        }
        // console.table(charArray[i] === charArray[charArray.length-i-1], i);  
    }
    // console.log(isPalindrome);
    return isPalindrome;

};

// Do not edit below this line
module.exports = palindromes;
