var test = require('tape');
var babel = require('babel-core');
var fs = require('fs');
var b = require('js-beautify');

var expected = fs.readFileSync(__dirname+'/fixture/nested-expected.js', 'utf8');
var code = '<div><ul></ul></div>';

var compiled = babel.transform(code, {
  plugins: ['../index'],
  jsxPragma: 'h'
}).code;

test('nested', function (t) {
  t.plan(1);
  t.equal(b(compiled), b(expected));
});
