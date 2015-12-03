var test = require('tape');
var babel = require('babel-core');
var fs = require('fs');
var b = require('js-beautify');

var expected = fs.readFileSync(__dirname+'/fixture/whitespace-expected.js', 'utf8');
var code = (
    '<div>\n</div>'
);

var compiled = babel.transform(code, {
  plugins: ['../index'],
  jsxPragma: 'h'
}).code;

test('simple-whitespace', function (t) {
  t.plan(1);
  t.equal(b(compiled), b(expected));
});
