const findTheOldest = function(people) {
    return people.reduce((currentOldest, currentPerson) => {
        const currentOldestAge = getAge(currentOldest.yearOfBirth, currentOldest.yearOfDeath);
        const currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);  
        
        return currentPersonAge > currentOldestAge ? currentPerson : currentOldest;        
    });
};

// calculate age with Date() if there is no death date
const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };  

// Do not edit below this line
module.exports = findTheOldest;
