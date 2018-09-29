module.exports = function getZerosCount(number) {
  var factorial = 0;

    for (var i = 5; number/i >= 1; i *= 5) {
        factorial += Math.floor(number/i); 
    } 
  return factorial;
}
