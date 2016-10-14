'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _ScrollLock = require('./ScrollLock');

var _ScrollLock2 = _interopRequireDefault(_ScrollLock);

var _AutoSizer = require('react-virtualized/dist/commonjs/AutoSizer');

var _AutoSizer2 = _interopRequireDefault(_AutoSizer);

var _List = require('react-virtualized/dist/commonjs/List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import directly to avoid Webpack bundling the parts of react-virtualized that we are not using
var VirtualizedSelect = function (_Component) {
  (0, _inherits3.default)(VirtualizedSelect, _Component);

  function VirtualizedSelect(props, context) {
    (0, _classCallCheck3.default)(this, VirtualizedSelect);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(VirtualizedSelect).call(this, props, context));

    _this._renderMenu = _this._renderMenu.bind(_this);
    _this._optionRenderer = _this._optionRenderer.bind(_this);
    return _this;
  }

  /** See List#recomputeRowHeights */


  (0, _createClass3.default)(VirtualizedSelect, [{
    key: 'recomputeOptionHeights',
    value: function recomputeOptionHeights() {
      var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      if (this._virtualScroll) {
        this._virtualScroll.recomputeRowHeights(index);
      }
    }
  }, {
    key: 'selectValue',
    value: function selectValue(option) {
      this.refs.select.selectValue(option);
    }
  }, {
    key: 'render',
    value: function render() {
      var SelectComponent = this._getSelectComponent();

      return _react2.default.createElement(SelectComponent, (0, _extends3.default)({}, this.props, {
        menuRenderer: this._renderMenu,
        menuStyle: { overflow: 'hidden' },
        ref: 'select'
      }));
    }

    // See https://github.com/JedWatson/react-select/#effeciently-rendering-large-lists-with-windowing

  }, {
    key: '_renderMenu',
    value: function _renderMenu(_ref) {
      var _this2 = this;

      var focusedOption = _ref.focusedOption;
      var focusOption = _ref.focusOption;
      var labelKey = _ref.labelKey;
      var options = _ref.options;
      var selectValue = _ref.selectValue;
      var valueArray = _ref.valueArray;
      var optionRenderer = this.props.optionRenderer;

      var focusedOptionIndex = options.indexOf(focusedOption);
      var height = this._calculateListHeight({ options: options });
      var innerRowRenderer = optionRenderer || this._optionRenderer;

      function wrappedRowRenderer(_ref2) {
        var index = _ref2.index;
        var key = _ref2.key;
        var style = _ref2.style;

        var option = options[index];

        return innerRowRenderer({
          focusedOption: focusedOption,
          focusedOptionIndex: focusedOptionIndex,
          focusOption: focusOption,
          key: key,
          labelKey: labelKey,
          option: option,
          optionIndex: index,
          options: options,
          selectValue: selectValue,
          style: style,
          valueArray: valueArray
        });
      }

      return _react2.default.createElement(
        _AutoSizer2.default,
        { disableHeight: true },
        function (_ref3) {
          var width = _ref3.width;
          return _react2.default.createElement(
            _ScrollLock2.default,
            null,
            _react2.default.createElement(_List2.default, {
              className: 'VirtualSelectGrid',
              height: height,
              ref: function ref(_ref5) {
                return _this2._virtualScroll = _ref5;
              },
              rowCount: options.length,
              rowHeight: function rowHeight(_ref4) {
                var index = _ref4.index;
                return _this2._getOptionHeight({
                  option: options[index]
                });
              },
              rowRenderer: wrappedRowRenderer,
              scrollToIndex: focusedOptionIndex,
              width: width
            })
          );
        }
      );
    }
  }, {
    key: '_calculateListHeight',
    value: function _calculateListHeight(_ref6) {
      var options = _ref6.options;
      var maxHeight = this.props.maxHeight;


      var height = 0;

      for (var optionIndex = 0; optionIndex < options.length; optionIndex++) {
        var option = options[optionIndex];

        height += this._getOptionHeight({ option: option });

        if (height > maxHeight) {
          return maxHeight;
        }
      }

      return height;
    }
  }, {
    key: '_getOptionHeight',
    value: function _getOptionHeight(_ref7) {
      var option = _ref7.option;
      var optionHeight = this.props.optionHeight;


      return optionHeight instanceof Function ? optionHeight({ option: option }) : optionHeight;
    }
  }, {
    key: '_getSelectComponent',
    value: function _getSelectComponent() {
      var _props = this.props;
      var async = _props.async;
      var selectComponent = _props.selectComponent;


      if (selectComponent) {
        return selectComponent;
      } else if (async) {
        return _reactSelect2.default.Async;
      } else {
        return _reactSelect2.default;
      }
    }
  }, {
    key: '_optionRenderer',
    value: function _optionRenderer(_ref8) {
      var focusedOption = _ref8.focusedOption;
      var focusOption = _ref8.focusOption;
      var key = _ref8.key;
      var labelKey = _ref8.labelKey;
      var option = _ref8.option;
      var selectValue = _ref8.selectValue;
      var style = _ref8.style;

      var className = ['VirtualizedSelectOption'];

      if (option === focusedOption) {
        className.push('VirtualizedSelectFocusedOption');
      }

      if (option.disabled) {
        className.push('VirtualizedSelectDisabledOption');
      }

      var events = option.disabled ? {} : {
        onClick: function onClick() {
          return selectValue(option);
        },
        onMouseOver: function onMouseOver() {
          return focusOption(option);
        }
      };

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: className.join(' '),
          key: key,
          style: style
        }, events),
        option[labelKey]
      );
    }
  }]);
  return VirtualizedSelect;
}(_react.Component);

VirtualizedSelect.propTypes = {
  async: _react.PropTypes.bool,
  maxHeight: _react.PropTypes.number.isRequired,
  optionHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
  optionRenderer: _react.PropTypes.func,
  selectComponent: _react.PropTypes.func
};
VirtualizedSelect.defaultProps = {
  async: false,
  maxHeight: 200,
  optionHeight: 35
};
exports.default = VirtualizedSelect;