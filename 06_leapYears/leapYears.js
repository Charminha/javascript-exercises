const leapYears = function(year) {
    // check if divisible by 4
    if (year%4 == 0) {
        // non-century years divisble by 4 are leap years
        if (year%100 != 0) return true;
        // century years divisible by 400 are leap years
        else if (year%400 == 0) return true;
        // century years that aren't divisible by 400 aren't leap years
        else return false;
    }
    // years not divisible by 4 are definitely not leap years
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
