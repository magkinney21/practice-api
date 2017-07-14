'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _Query = require('./types/Query');

var _Query2 = _interopRequireDefault(_Query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Construct a schema, using GraphQL schema language
exports.default = new _graphql.GraphQLSchema({
  query: _Query2.default
});