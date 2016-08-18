'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shouldPureComponentUpdate;

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shouldPureComponentUpdate(nextProps, nextState) {
  return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
}