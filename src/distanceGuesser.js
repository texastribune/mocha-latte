var firstdefined = require('./firstdefined');


// get the top/right/bottom/left distances css style(assumes pixels)
var distanceGuesser = function(distance) {
  var out;
  if (typeof distance === "number") {
    // optimize for the most common case
    out = {
      top: distance,
      right: distance,
      bottom: distance,
      left: distance
    };
  } else {
    var bits = distance.split(' ');
    out = {
        top: parseInt(bits[0], 10),
        right: parseInt(firstdefined(bits[1], bits[0]), 10),
        bottom: parseInt(firstdefined(bits[2], bits[0]), 10),
        left: parseInt(firstdefined(bits[3], bits[1], bits[0]), 10)
    };
  }
  // XXXLOL
  out.toString = function() {
    return this.top + 'px ' + this.right + 'px ' + this.bottom + 'px ' + this.left + 'px';
  };
  return out;
};


module.exports = distanceGuesser;
