import { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import shouldPureComponentUpdate from './shouldPureComponentUpdate';

var ScrollLock = function (_Component) {
  babelHelpers.inherits(ScrollLock, _Component);

  function ScrollLock() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, ScrollLock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ScrollLock)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.componentDidMount = function () {
      _this.scrollLock();
    }, _this.shouldComponentUpdate = shouldPureComponentUpdate, _this.componentDidUpdate = function () {
      _this.scrollLock();
    }, _this.componentWillUnmount = function () {
      _this.scrollRelease();
    }, _this.cancelScrollEvent = function (event) {
      event.stopImmediatePropagation();
      event.preventDefault();
      event.returnValue = false;

      return false;
    }, _this.scrollLock = function () {
      var domNode = ReactDOM.findDOMNode(_this);

      if (domNode) {
        domNode.addEventListener('wheel', _this.onScrollHandler, false);
      }
    }, _this.scrollRelease = function () {
      var domNode = ReactDOM.findDOMNode(_this);

      if (domNode) {
        domNode.removeEventListener('wheel', _this.onScrollHandler, false);
      }
    }, _this.onScrollHandler = function (event) {
      var domNode = ReactDOM.findDOMNode(_this);
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
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(ScrollLock, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return ScrollLock;
}(Component);

ScrollLock.propTypes = {
  children: PropTypes.any
};
export default ScrollLock;