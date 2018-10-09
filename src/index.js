module.exports = function getZerosCount(number) {
  let zerosQuantity = 0;

    for (let i = 5; number / i >= 1; i *= 5) {
      zerosQuantity += Math.floor(number / i); 
    } 

  return zerosQuantity;
}