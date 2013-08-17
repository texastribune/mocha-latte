// return the first argument that isn't `undefined`
var firstdefined = function () {
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'undefined') {
      break;
    }
  }
  return arguments[i];
};


module.exports.firstdefined = firstdefined;
