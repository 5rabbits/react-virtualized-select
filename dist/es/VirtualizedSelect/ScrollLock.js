'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shouldPureComponentUpdate = require('./shouldPureComponentUpdate');

var _shouldPureComponentUpdate2 = _interopRequireDefault(_shouldPureComponentUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScrollLock = function (_Component) {
  (0, _inherits3.default)(ScrollLock, _Component);

  function ScrollLock() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ScrollLock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(ScrollLock)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.componentDidMount = function () {
      _this.scrollLock();
    }, _this.shouldComponentUpdate = _shouldPureComponentUpdate2.default, _this.componentDidUpdate = function () {
      _this.scrollLock();
    }, _this.componentWillUnmount = function () {
      _this.scrollRelease();
    }, _this.cancelScrollEvent = function (event) {
      event.stopImmediatePropagation();
      event.preventDefault();
      event.returnValue = false;

      return false;
    }, _this.scrollLock = function () {
      var domNode = _reactDom2.default.findDOMNode(_this);

      if (domNode) {
        domNode.addEventListener('wheel', _this.onScrollHandler, false);
      }
    }, _this.scrollRelease = function () {
      var domNode = _reactDom2.default.findDOMNode(_this);

      if (domNode) {
        domNode.removeEventListener('wheel', _this.onScrollHandler, false);
      }
    }, _this.onScrollHandler = function (event) {
      var domNode = _reactDom2.default.findDOMNode(_this);
      var scrollTop = domNode.scrollTop;
      var scrollHeight = domNode.scrollHeight;
      var height = domNode.clientHeight;
      var wheelDelta = event.deltaY;
      var isDeltaPositive = wheelDelta > 0;

      if (scrollHeight === height) {
        return true;
      }

      if (isDeltaPositive && wheelDelta > scrollHeight - height - scrollTop) {
        domNode.scrollTop = scrollHeight;
        return _this.cancelScrollEvent(event);
      } else if (!isDeltaPositive && -wheelDelta > scrollTop) {
        domNode.scrollTop = 0;
        return _this.cancelScrollEvent(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ScrollLock, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return ScrollLock;
}(_react.Component);

ScrollLock.propTypes = {
  children: _react.PropTypes.any
};
exports.default = ScrollLock;