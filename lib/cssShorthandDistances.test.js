var cssShorthandDistances = require('./cssShorthandDistances');


// test if output == ref, but only for keys that exist in ref
// lol this is untested
var objectRightEqual = function(output, ref, message) {
  for (var key in ref) {
    if (output[key] !== ref[key]) {
      this.fail(output, ref, message, 'is not equal to');
      break;
    }
  }
};


exports.cssShorthandDistances = function(test) {
  test.rEqual = objectRightEqual;

  test.rEqual(cssShorthandDistances(99),
    {top: 99, right: 99, bottom: 99, left: 99});
  test.rEqual(cssShorthandDistances('99px'),
    {top: 99, right: 99, bottom: 99, left: 99});
  test.rEqual(cssShorthandDistances('99px 50px'),
    {top: 99, right: 50, bottom: 99, left: 50});
  test.rEqual(cssShorthandDistances('99px 50px 25px'),
    {top: 99, right: 50, bottom: 25, left: 50});
  test.rEqual(cssShorthandDistances('99px 50px 25px 0'),
    {top: 99, right: 50, bottom: 25, left: 0});

  test.equal(String(cssShorthandDistances(99)),
    '99px 99px 99px 99px');
  test.equal(JSON.stringify(cssShorthandDistances('100px 50px 25px 0')),
    '{"top":100,"right":50,"bottom":25,"left":0}');
  test.done();
};
