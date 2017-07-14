'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _index = require('../src/schema/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { PORT = 3000 } = process.env;

const app = (0, _express2.default)();

app.use = ('/graphql', (0, _expressGraphql2.default)({
  schema: _index2.default,
  graphiql: true
}));
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${PORT}`);
});