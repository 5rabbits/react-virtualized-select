import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import { AutoSizer, VirtualScroll } from 'react-virtualized';
import ScrollLock from './ScrollLock';

var VirtualizedSelect = function (_Component) {
  babelHelpers.inherits(VirtualizedSelect, _Component);

  function VirtualizedSelect(props, context) {
    babelHelpers.classCallCheck(this, VirtualizedSelect);

    var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(VirtualizedSelect).call(this, props, context));

    _this._renderMenu = _this._renderMenu.bind(_this);
    _this._optionRenderer = _this._optionRenderer.bind(_this);
    return _this;
  }

  /** See VirtualScroll#recomputeRowHeights */


  babelHelpers.createClass(VirtualizedSelect, [{
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
      var async = this.props.async;


      var SelectComponent = async ? Select.Async : Select;

      return React.createElement(SelectComponent, babelHelpers.extends({}, this.props, {
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
      var height = this._calculateVirtualScrollHeight({ options: options });
      var innerRowRenderer = optionRenderer || this._optionRenderer;

      function wrappedRowRenderer(_ref2) {
        var index = _ref2.index;

        var option = options[index];

        return innerRowRenderer({
          focusedOption: focusedOption,
          focusedOptionIndex: focusedOptionIndex,
          focusOption: focusOption,
          labelKey: labelKey,
          option: option,
          optionIndex: index,
          options: options,
          selectValue: selectValue,
          valueArray: valueArray
        });
      }

      return React.createElement(
        AutoSizer,
        { disableHeight: true },
        function (_ref3) {
          var width = _ref3.width;
          return React.createElement(
            ScrollLock,
            null,
            React.createElement(VirtualScroll, {
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
    key: '_calculateVirtualScrollHeight',
    value: function _calculateVirtualScrollHeight(_ref6) {
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
    key: '_optionRenderer',
    value: function _optionRenderer(_ref8) {
      var focusedOption = _ref8.focusedOption;
      var focusOption = _ref8.focusOption;
      var labelKey = _ref8.labelKey;
      var option = _ref8.option;
      var selectValue = _ref8.selectValue;

      var height = this._getOptionHeight({ option: option });

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

      return React.createElement(
        'div',
        babelHelpers.extends({
          className: className.join(' '),
          style: { height: height }
        }, events),
        option[labelKey]
      );
    }
  }]);
  return VirtualizedSelect;
}(Component);

VirtualizedSelect.propTypes = {
  async: PropTypes.bool,
  maxHeight: PropTypes.number.isRequired,
  optionHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
  optionRenderer: PropTypes.func
};
VirtualizedSelect.defaultProps = {
  async: false,
  maxHeight: 200,
  optionHeight: 35
};
export default VirtualizedSelect;