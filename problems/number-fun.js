function returnsThree() {

return 3;

}

function reciprocal(n) {

  if(typeof n !== 'number'){
    throw TypeError()
  }

  if(n < 0 || n > 1000000){
    throw RangeError()
  }

return 1/n;

}

module.exports = {
  returnsThree,
  reciprocal
};