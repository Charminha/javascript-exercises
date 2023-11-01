const convertToCelsius = function(fahrenheit) {
  // formula for conversion from F to C
  let celsius = (fahrenheit - 32) * 5/9;
  // round to one decimal place
  celsius = Math.round(celsius * 10)/10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  // formula for conversion from C to F
  let fahrenheit = celsius * 9/5 + 32;
  // round to one decimal place
  fahrenheit = Math.round(fahrenheit * 10)/10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
