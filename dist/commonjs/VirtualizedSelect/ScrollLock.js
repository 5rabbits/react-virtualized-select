'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shouldPureComponentUpdate = require('./shouldPureComponentUpdate');

var _shouldPureComponentUpdate2 = _interopRequireDefault(_shouldPureComponentUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollLock = function (_Component) {
  _inherits(ScrollLock, _Component);

  function ScrollLock() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ScrollLock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ScrollLock)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.componentDidMount = function () {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ScrollLock, [{
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