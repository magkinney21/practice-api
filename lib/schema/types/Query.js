'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLObjectType({
  name: 'Query',
  description: 'This is the Query type',
  fields: {
    Health: {
      type: _graphql.GraphQLBoolean,
      resolve() {
        return true;
      }
    }
  }
});