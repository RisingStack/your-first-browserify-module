var test = require('tape');
var add = require('./');

test('adding two numbers', function (t) {
  t.equal(add(3,2), 5);
  t.end();
});
