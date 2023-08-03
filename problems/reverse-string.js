module.exports = function reverseString(string) {

  if (typeof string !== 'string') {
    throw new TypeError ("Invalid name! Must be a string!")
  } 
  return string.split('').reverse().join('')
};
