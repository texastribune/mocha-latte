var firstdefined = require('./firstdefined');

exports['firstdefined'] = function(test) {
  test.equal(firstdefined(1, 2, 3), 1);
  test.equal(firstdefined(0, 1, 2, 3), 0);
  test.equal(firstdefined(undefined, 'a'), 'a');
  test.equal(firstdefined(null, 'undefined', 'a'), null);
  test.equal(firstdefined(), undefined);
  test.equal(firstdefined(undefined), undefined);
  test.equal(firstdefined.apply(undefined, [1, 2, 3]), 1);
  test.done();
};
