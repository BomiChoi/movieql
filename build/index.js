"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _graphqlYoga = require("graphql-yoga");

var _resolvers = _interopRequireDefault(require("./graphql/resolvers"));

var server = new _graphqlYoga.GraphQLServer({
  typeDefs: "schema.graphql",
  resolvers: _resolvers["default"]
});
server.start(function () {
  return console.log("Graphql Server Running");
});