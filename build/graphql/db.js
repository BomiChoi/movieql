"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuggestions = exports.getMovie = exports.getMovies = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var BASE_URL = "https://yts.mx/api/v2";
var LIST_MOVIES_URL = "".concat(BASE_URL, "/list_movies.json");
var MOVIE_DETAILS_URL = "".concat(BASE_URL, "/movie_details.json");
var MOVIE_SUGGESTIONS_URL = "".concat(BASE_URL, "/movie_suggestions.json");

var getMovies = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(limit, rating) {
    var _yield$axios, movies;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _axios["default"])(LIST_MOVIES_URL, {
              params: {
                limit: limit,
                minimum_rating: rating
              }
            });

          case 2:
            _yield$axios = _context.sent;
            movies = _yield$axios.data.data.movies;
            return _context.abrupt("return", movies);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getMovies(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getMovies = getMovies;

var getMovie = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    var _yield$axios2, movie;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _axios["default"])(MOVIE_DETAILS_URL, {
              params: {
                movie_id: id
              }
            });

          case 2:
            _yield$axios2 = _context2.sent;
            movie = _yield$axios2.data.data.movie;
            return _context2.abrupt("return", movie);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getMovie(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMovie = getMovie;

var getSuggestions = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    var _yield$axios3, movies;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _axios["default"])(MOVIE_SUGGESTIONS_URL, {
              params: {
                movie_id: id
              }
            });

          case 2:
            _yield$axios3 = _context3.sent;
            movies = _yield$axios3.data.data.movies;
            return _context3.abrupt("return", movies);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getSuggestions(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getSuggestions = getSuggestions;