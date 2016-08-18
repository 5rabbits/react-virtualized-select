!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory(require("react"), require("react-dom")) : "function" == typeof define && define.amd ? define([ "react", "react-dom" ], factory) : "object" == typeof exports ? exports["react-virtualized-select"] = factory(require("react"), require("react-dom")) : root["react-virtualized-select"] = factory(root.React, root.ReactDOM);
}(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
    /******/
    return function(modules) {
        /******/
        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId]) /******/
            return installedModules[moduleId].exports;
            /******/
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                exports: {},
                /******/
                id: moduleId,
                /******/
                loaded: !1
            };
            /******/
            /******/
            // Return the exports of the module
            /******/
            /******/
            /******/
            // Execute the module function
            /******/
            /******/
            /******/
            // Flag the module as loaded
            /******/
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.loaded = !0, module.exports;
        }
        // webpackBootstrap
        /******/
        // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/
        // Load entry module and return exports
        /******/
        /******/
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        /******/
        /******/
        // expose the module cache
        /******/
        /******/
        /******/
        // __webpack_public_path__
        /******/
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.p = "", __webpack_require__(0);
    }([ /* 0 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = void 0;
        var _VirtualizedSelect = __webpack_require__(1), _VirtualizedSelect2 = _interopRequireDefault(_VirtualizedSelect);
        exports["default"] = _VirtualizedSelect2["default"];
    }, /* 1 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = void 0;
        var _VirtualizedSelect = __webpack_require__(2), _VirtualizedSelect2 = _interopRequireDefault(_VirtualizedSelect);
        exports["default"] = _VirtualizedSelect2["default"];
    }, /* 2 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _jsx = function() {
            var REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;
            return function(type, props, key, children) {
                var defaultProps = type && type.defaultProps, childrenLength = arguments.length - 3;
                if (props || 0 === childrenLength || (props = {}), props && defaultProps) for (var propName in defaultProps) void 0 === props[propName] && (props[propName] = defaultProps[propName]); else props || (props = defaultProps || {});
                if (1 === childrenLength) props.children = children; else if (childrenLength > 1) {
                    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 3];
                    props.children = childArray;
                }
                return {
                    $$typeof: REACT_ELEMENT_TYPE,
                    type: type,
                    key: void 0 === key ? null : "" + key,
                    ref: null,
                    props: props,
                    _owner: null
                };
            };
        }(), _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _reactSelect = __webpack_require__(4), _reactSelect2 = _interopRequireDefault(_reactSelect), _reactVirtualized = __webpack_require__(13), _ScrollLock = __webpack_require__(65), _ScrollLock2 = _interopRequireDefault(_ScrollLock), VirtualizedSelect = function(_Component) {
            function VirtualizedSelect(props, context) {
                _classCallCheck(this, VirtualizedSelect);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VirtualizedSelect).call(this, props, context));
                return _this._renderMenu = _this._renderMenu.bind(_this), _this._optionRenderer = _this._optionRenderer.bind(_this), 
                _this;
            }
            return _inherits(VirtualizedSelect, _Component), _createClass(VirtualizedSelect, [ {
                key: "recomputeOptionHeights",
                value: function() {
                    var index = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                    this._virtualScroll && this._virtualScroll.recomputeRowHeights(index);
                }
            }, {
                key: "selectValue",
                value: function(option) {
                    this.refs.select.selectValue(option);
                }
            }, {
                key: "render",
                value: function() {
                    var async = this.props.async, SelectComponent = async ? _reactSelect2["default"].Async : _reactSelect2["default"];
                    return _react2["default"].createElement(SelectComponent, _extends({}, this.props, {
                        menuRenderer: this._renderMenu,
                        menuStyle: {
                            overflow: "hidden"
                        },
                        ref: "select"
                    }));
                }
            }, {
                key: "_renderMenu",
                value: function(_ref) {
                    function wrappedRowRenderer(_ref2) {
                        var index = _ref2.index, option = options[index];
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
                    var _this2 = this, focusedOption = _ref.focusedOption, focusOption = _ref.focusOption, labelKey = _ref.labelKey, options = _ref.options, selectValue = _ref.selectValue, valueArray = _ref.valueArray, optionRenderer = this.props.optionRenderer, focusedOptionIndex = options.indexOf(focusedOption), height = this._calculateVirtualScrollHeight({
                        options: options
                    }), innerRowRenderer = optionRenderer || this._optionRenderer;
                    return _jsx(_reactVirtualized.AutoSizer, {
                        disableHeight: !0
                    }, void 0, function(_ref3) {
                        var width = _ref3.width;
                        return _jsx(_ScrollLock2["default"], {}, void 0, _react2["default"].createElement(_reactVirtualized.VirtualScroll, {
                            className: "VirtualSelectGrid",
                            height: height,
                            ref: function(_ref5) {
                                return _this2._virtualScroll = _ref5;
                            },
                            rowCount: options.length,
                            rowHeight: function(_ref4) {
                                var index = _ref4.index;
                                return _this2._getOptionHeight({
                                    option: options[index]
                                });
                            },
                            rowRenderer: wrappedRowRenderer,
                            scrollToIndex: focusedOptionIndex,
                            width: width
                        }));
                    });
                }
            }, {
                key: "_calculateVirtualScrollHeight",
                value: function(_ref6) {
                    for (var options = _ref6.options, maxHeight = this.props.maxHeight, height = 0, optionIndex = 0; optionIndex < options.length; optionIndex++) {
                        var option = options[optionIndex];
                        if (height += this._getOptionHeight({
                            option: option
                        }), height > maxHeight) return maxHeight;
                    }
                    return height;
                }
            }, {
                key: "_getOptionHeight",
                value: function(_ref7) {
                    var option = _ref7.option, optionHeight = this.props.optionHeight;
                    return optionHeight instanceof Function ? optionHeight({
                        option: option
                    }) : optionHeight;
                }
            }, {
                key: "_optionRenderer",
                value: function(_ref8) {
                    var focusedOption = _ref8.focusedOption, focusOption = _ref8.focusOption, labelKey = _ref8.labelKey, option = _ref8.option, selectValue = _ref8.selectValue, height = this._getOptionHeight({
                        option: option
                    }), className = [ "VirtualizedSelectOption" ];
                    option === focusedOption && className.push("VirtualizedSelectFocusedOption"), option.disabled && className.push("VirtualizedSelectDisabledOption");
                    var events = option.disabled ? {} : {
                        onClick: function() {
                            return selectValue(option);
                        },
                        onMouseOver: function() {
                            return focusOption(option);
                        }
                    };
                    return _react2["default"].createElement("div", _extends({
                        className: className.join(" "),
                        style: {
                            height: height
                        }
                    }, events), option[labelKey]);
                }
            } ]), VirtualizedSelect;
        }(_react.Component);
        VirtualizedSelect.propTypes = {
            async: _react.PropTypes.bool,
            maxHeight: _react.PropTypes.number.isRequired,
            optionHeight: _react.PropTypes.oneOfType([ _react.PropTypes.number, _react.PropTypes.func ]).isRequired,
            optionRenderer: _react.PropTypes.func
        }, VirtualizedSelect.defaultProps = {
            async: !1,
            maxHeight: 200,
            optionHeight: 35
        }, exports["default"] = VirtualizedSelect;
    }, /* 3 */
    /***/
    function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
    }, /* 4 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        function stringifyValue(value) {
            return "object" == typeof value ? JSON.stringify(value) : value;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _reactDom = __webpack_require__(5), _reactDom2 = _interopRequireDefault(_reactDom), _reactInputAutosize = __webpack_require__(6), _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize), _classnames = __webpack_require__(7), _classnames2 = _interopRequireDefault(_classnames), _blacklist = __webpack_require__(8), _blacklist2 = _interopRequireDefault(_blacklist), _utilsStripDiacritics = __webpack_require__(9), _utilsStripDiacritics2 = _interopRequireDefault(_utilsStripDiacritics), _Async = __webpack_require__(10), _Async2 = _interopRequireDefault(_Async), _Option = __webpack_require__(11), _Option2 = _interopRequireDefault(_Option), _Value = __webpack_require__(12), _Value2 = _interopRequireDefault(_Value), stringOrNode = _react2["default"].PropTypes.oneOfType([ _react2["default"].PropTypes.string, _react2["default"].PropTypes.node ]), instanceId = 1, Select = _react2["default"].createClass({
            displayName: "Select",
            propTypes: {
                addLabelText: _react2["default"].PropTypes.string,
                // placeholder displayed when you want to add a label on a multi-value input
                allowCreate: _react2["default"].PropTypes.bool,
                // whether to allow creation of new entries
                "aria-label": _react2["default"].PropTypes.string,
                // Aria label (for assistive tech)
                "aria-labelledby": _react2["default"].PropTypes.string,
                // HTML ID of an element that should be used as the label (for assistive tech)
                autoBlur: _react2["default"].PropTypes.bool,
                // automatically blur the component when an option is selected
                autofocus: _react2["default"].PropTypes.bool,
                // autofocus the component on mount
                autosize: _react2["default"].PropTypes.bool,
                // whether to enable autosizing or not
                backspaceRemoves: _react2["default"].PropTypes.bool,
                // whether backspace removes an item if there is no text input
                backspaceToRemoveMessage: _react2["default"].PropTypes.string,
                // Message to use for screenreaders to press backspace to remove the current item -
                // {label} is replaced with the item label
                className: _react2["default"].PropTypes.string,
                // className for the outer element
                clearAllText: stringOrNode,
                // title for the "clear" control when multi: true
                clearValueText: stringOrNode,
                // title for the "clear" control
                clearable: _react2["default"].PropTypes.bool,
                // should it be possible to reset value
                delimiter: _react2["default"].PropTypes.string,
                // delimiter to use to join multiple values for the hidden field value
                disabled: _react2["default"].PropTypes.bool,
                // whether the Select is disabled or not
                escapeClearsValue: _react2["default"].PropTypes.bool,
                // whether escape clears the value when the menu is closed
                filterOption: _react2["default"].PropTypes.func,
                // method to filter a single option (option, filterString)
                filterOptions: _react2["default"].PropTypes.any,
                // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
                ignoreAccents: _react2["default"].PropTypes.bool,
                // whether to strip diacritics when filtering
                ignoreCase: _react2["default"].PropTypes.bool,
                // whether to perform case-insensitive filtering
                inputProps: _react2["default"].PropTypes.object,
                // custom attributes for the Input
                inputRenderer: _react2["default"].PropTypes.func,
                // returns a custom input component
                isLoading: _react2["default"].PropTypes.bool,
                // whether the Select is loading externally or not (such as options being loaded)
                joinValues: _react2["default"].PropTypes.bool,
                // joins multiple values into a single form field with the delimiter (legacy mode)
                labelKey: _react2["default"].PropTypes.string,
                // path of the label value in option objects
                matchPos: _react2["default"].PropTypes.string,
                // (any|start) match the start or entire string when filtering
                matchProp: _react2["default"].PropTypes.string,
                // (any|label|value) which option property to filter on
                menuBuffer: _react2["default"].PropTypes.number,
                // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
                menuContainerStyle: _react2["default"].PropTypes.object,
                // optional style to apply to the menu container
                menuRenderer: _react2["default"].PropTypes.func,
                // renders a custom menu with options
                menuStyle: _react2["default"].PropTypes.object,
                // optional style to apply to the menu
                multi: _react2["default"].PropTypes.bool,
                // multi-value input
                name: _react2["default"].PropTypes.string,
                // generates a hidden <input /> tag with this field name for html forms
                newOptionCreator: _react2["default"].PropTypes.func,
                // factory to create new options when allowCreate set
                noResultsText: stringOrNode,
                // placeholder displayed when there are no matching search results
                onBlur: _react2["default"].PropTypes.func,
                // onBlur handler: function (event) {}
                onBlurResetsInput: _react2["default"].PropTypes.bool,
                // whether input is cleared on blur
                onChange: _react2["default"].PropTypes.func,
                // onChange handler: function (newValue) {}
                onClose: _react2["default"].PropTypes.func,
                // fires when the menu is closed
                onFocus: _react2["default"].PropTypes.func,
                // onFocus handler: function (event) {}
                onInputChange: _react2["default"].PropTypes.func,
                // onInputChange handler: function (inputValue) {}
                onMenuScrollToBottom: _react2["default"].PropTypes.func,
                // fires when the menu is scrolled to the bottom; can be used to paginate options
                onOpen: _react2["default"].PropTypes.func,
                // fires when the menu is opened
                onValueClick: _react2["default"].PropTypes.func,
                // onClick handler for value labels: function (value, event) {}
                openAfterFocus: _react2["default"].PropTypes.bool,
                // boolean to enable opening dropdown when focused
                openOnFocus: _react2["default"].PropTypes.bool,
                // always open options menu on focus
                optionClassName: _react2["default"].PropTypes.string,
                // additional class(es) to apply to the <Option /> elements
                optionComponent: _react2["default"].PropTypes.func,
                // option component to render in dropdown
                optionRenderer: _react2["default"].PropTypes.func,
                // optionRenderer: function (option) {}
                options: _react2["default"].PropTypes.array,
                // array of options
                pageSize: _react2["default"].PropTypes.number,
                // number of entries to page when using page up/down keys
                placeholder: stringOrNode,
                // field placeholder, displayed when there's no value
                required: _react2["default"].PropTypes.bool,
                // applies HTML5 required attribute when needed
                resetValue: _react2["default"].PropTypes.any,
                // value to use when you clear the control
                scrollMenuIntoView: _react2["default"].PropTypes.bool,
                // boolean to enable the viewport to shift so that the full menu fully visible when engaged
                searchable: _react2["default"].PropTypes.bool,
                // whether to enable searching feature or not
                simpleValue: _react2["default"].PropTypes.bool,
                // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
                style: _react2["default"].PropTypes.object,
                // optional style to apply to the control
                tabIndex: _react2["default"].PropTypes.string,
                // optional tab index of the control
                tabSelectsValue: _react2["default"].PropTypes.bool,
                // whether to treat tabbing out while focused to be value selection
                value: _react2["default"].PropTypes.any,
                // initial field value
                valueComponent: _react2["default"].PropTypes.func,
                // value component to render
                valueKey: _react2["default"].PropTypes.string,
                // path of the label value in option objects
                valueRenderer: _react2["default"].PropTypes.func,
                // valueRenderer: function (option) {}
                wrapperStyle: _react2["default"].PropTypes.object
            },
            // optional style to apply to the component wrapper
            statics: {
                Async: _Async2["default"]
            },
            getDefaultProps: function() {
                return {
                    addLabelText: 'Add "{label}"?',
                    autosize: !0,
                    allowCreate: !1,
                    backspaceRemoves: !0,
                    backspaceToRemoveMessage: "Press backspace to remove {label}",
                    clearable: !0,
                    clearAllText: "Clear all",
                    clearValueText: "Clear value",
                    delimiter: ",",
                    disabled: !1,
                    escapeClearsValue: !0,
                    filterOptions: !0,
                    ignoreAccents: !0,
                    ignoreCase: !0,
                    inputProps: {},
                    isLoading: !1,
                    joinValues: !1,
                    labelKey: "label",
                    matchPos: "any",
                    matchProp: "any",
                    menuBuffer: 0,
                    multi: !1,
                    noResultsText: "No results found",
                    onBlurResetsInput: !0,
                    openAfterFocus: !1,
                    optionComponent: _Option2["default"],
                    pageSize: 5,
                    placeholder: "Select...",
                    required: !1,
                    resetValue: null,
                    scrollMenuIntoView: !0,
                    searchable: !0,
                    simpleValue: !1,
                    tabSelectsValue: !0,
                    valueComponent: _Value2["default"],
                    valueKey: "value"
                };
            },
            getInitialState: function() {
                return {
                    inputValue: "",
                    isFocused: !1,
                    isLoading: !1,
                    isOpen: !1,
                    isPseudoFocused: !1,
                    required: !1
                };
            },
            componentWillMount: function() {
                this._instancePrefix = "react-select-" + ++instanceId + "-";
                var valueArray = this.getValueArray(this.props.value);
                this.props.required && this.setState({
                    required: this.handleRequired(valueArray[0], this.props.multi)
                });
            },
            componentDidMount: function() {
                this.props.autofocus && this.focus();
            },
            componentWillReceiveProps: function(nextProps) {
                var valueArray = this.getValueArray(nextProps.value, nextProps);
                nextProps.required && this.setState({
                    required: this.handleRequired(valueArray[0], nextProps.multi)
                });
            },
            componentWillUpdate: function(nextProps, nextState) {
                if (nextState.isOpen !== this.state.isOpen) {
                    var handler = nextState.isOpen ? nextProps.onOpen : nextProps.onClose;
                    handler && handler();
                }
            },
            componentDidUpdate: function(prevProps, prevState) {
                // focus to the selected option
                if (this.refs.menu && this.refs.focused && this.state.isOpen && !this.hasScrolledToOption) {
                    var focusedOptionNode = _reactDom2["default"].findDOMNode(this.refs.focused), menuNode = _reactDom2["default"].findDOMNode(this.refs.menu);
                    menuNode.scrollTop = focusedOptionNode.offsetTop, this.hasScrolledToOption = !0;
                } else this.state.isOpen || (this.hasScrolledToOption = !1);
                if (this._scrollToFocusedOptionOnUpdate && this.refs.focused && this.refs.menu) {
                    this._scrollToFocusedOptionOnUpdate = !1;
                    var focusedDOM = _reactDom2["default"].findDOMNode(this.refs.focused), menuDOM = _reactDom2["default"].findDOMNode(this.refs.menu), focusedRect = focusedDOM.getBoundingClientRect(), menuRect = menuDOM.getBoundingClientRect();
                    (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) && (menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight);
                }
                if (this.props.scrollMenuIntoView && this.refs.menuContainer) {
                    var menuContainerRect = this.refs.menuContainer.getBoundingClientRect();
                    window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer && window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
                }
                prevProps.disabled !== this.props.disabled && (this.setState({
                    isFocused: !1
                }), // eslint-disable-line react/no-did-update-set-state
                this.closeMenu());
            },
            focus: function() {
                this.refs.input && (this.refs.input.focus(), this.props.openAfterFocus && this.setState({
                    isOpen: !0
                }));
            },
            blurInput: function() {
                this.refs.input && this.refs.input.blur();
            },
            handleTouchMove: function(event) {
                // Set a flag that the view is being dragged
                this.dragging = !0;
            },
            handleTouchStart: function(event) {
                // Set a flag that the view is not being dragged
                this.dragging = !1;
            },
            handleTouchEnd: function(event) {
                // Check if the view is being dragged, In this case
                // we don't want to fire the click event (because the user only wants to scroll)
                this.dragging || // Fire the mouse events
                this.handleMouseDown(event);
            },
            handleTouchEndClearValue: function(event) {
                // Check if the view is being dragged, In this case
                // we don't want to fire the click event (because the user only wants to scroll)
                this.dragging || // Clear the value
                this.clearValue(event);
            },
            handleMouseDown: function(event) {
                // if the event was triggered by a mousedown and not the primary
                // button, or if the component is disabled, ignore it.
                if (!(this.props.disabled || "mousedown" === event.type && 0 !== event.button) && "INPUT" !== event.target.tagName) {
                    // for the non-searchable select, toggle the menu
                    if (// prevent default event handlers
                    event.stopPropagation(), event.preventDefault(), !this.props.searchable) return this.focus(), 
                    this.setState({
                        isOpen: !this.state.isOpen
                    });
                    if (this.state.isFocused) {
                        // On iOS, we can get into a state where we think the input is focused but it isn't really,
                        // since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
                        // Call focus() again here to be safe.
                        this.focus();
                        var input = this.refs.input;
                        "function" == typeof input.getInput && (// Get the actual DOM input if the ref is an <Input /> component
                        input = input.getInput()), // clears the value so that the cursor will be at the end of input when the component re-renders
                        input.value = "", // if the input is focused, ensure the menu is open
                        this.setState({
                            isOpen: !0,
                            isPseudoFocused: !1
                        });
                    } else // otherwise, focus the input and open the menu
                    this._openAfterFocus = !0, this.focus();
                }
            },
            handleMouseDownOnArrow: function(event) {
                // if the event was triggered by a mousedown and not the primary
                // button, or if the component is disabled, ignore it.
                this.props.disabled || "mousedown" === event.type && 0 !== event.button || // If the menu isn't open, let the event bubble to the main handleMouseDown
                this.state.isOpen && (// prevent default event handlers
                event.stopPropagation(), event.preventDefault(), // close the menu
                this.closeMenu());
            },
            handleMouseDownOnMenu: function(event) {
                // if the event was triggered by a mousedown and not the primary
                // button, or if the component is disabled, ignore it.
                this.props.disabled || "mousedown" === event.type && 0 !== event.button || (event.stopPropagation(), 
                event.preventDefault(), this._openAfterFocus = !0, this.focus());
            },
            closeMenu: function() {
                this.setState({
                    isOpen: !1,
                    isPseudoFocused: this.state.isFocused && !this.props.multi,
                    inputValue: ""
                }), this.hasScrolledToOption = !1;
            },
            handleInputFocus: function(event) {
                var isOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
                this.props.onFocus && this.props.onFocus(event), this.setState({
                    isFocused: !0,
                    isOpen: isOpen
                }), this._openAfterFocus = !1;
            },
            handleInputBlur: function(event) {
                // The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
                if (this.refs.menu && (this.refs.menu === document.activeElement || this.refs.menu.contains(document.activeElement))) return void this.focus();
                this.props.onBlur && this.props.onBlur(event);
                var onBlurredState = {
                    isFocused: !1,
                    isOpen: !1,
                    isPseudoFocused: !1
                };
                this.props.onBlurResetsInput && (onBlurredState.inputValue = ""), this.setState(onBlurredState);
            },
            handleInputChange: function(event) {
                var newInputValue = event.target.value;
                if (this.state.inputValue !== event.target.value && this.props.onInputChange) {
                    var nextState = this.props.onInputChange(newInputValue);
                    // Note: != used deliberately here to catch undefined and null
                    null != nextState && "object" != typeof nextState && (newInputValue = "" + nextState);
                }
                this.setState({
                    isOpen: !0,
                    isPseudoFocused: !1,
                    inputValue: newInputValue
                });
            },
            handleKeyDown: function(event) {
                if (!this.props.disabled) {
                    switch (event.keyCode) {
                      case 8:
                        // backspace
                        return void (!this.state.inputValue && this.props.backspaceRemoves && (event.preventDefault(), 
                        this.popValue()));

                      case 9:
                        // tab
                        if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) return;
                        return void this.selectFocusedOption();

                      case 13:
                        // enter
                        if (!this.state.isOpen) return;
                        event.stopPropagation(), this.selectFocusedOption();
                        break;

                      case 27:
                        // escape
                        this.state.isOpen ? (this.closeMenu(), event.stopPropagation()) : this.props.clearable && this.props.escapeClearsValue && (this.clearValue(event), 
                        event.stopPropagation());
                        break;

                      case 38:
                        // up
                        this.focusPreviousOption();
                        break;

                      case 40:
                        // down
                        this.focusNextOption();
                        break;

                      case 33:
                        // page up
                        this.focusPageUpOption();
                        break;

                      case 34:
                        // page down
                        this.focusPageDownOption();
                        break;

                      case 35:
                        // end key
                        this.focusEndOption();
                        break;

                      case 36:
                        // home key
                        this.focusStartOption();
                        break;

                      // case 188: // ,
                        // 	if (this.props.allowCreate && this.props.multi) {
                        // 		event.preventDefault();
                        // 		event.stopPropagation();
                        // 		this.selectFocusedOption();
                        // 	} else {
                        // 		return;
                        // 	}
                        // break;
                        default:
                        return;
                    }
                    event.preventDefault();
                }
            },
            handleValueClick: function(option, event) {
                this.props.onValueClick && this.props.onValueClick(option, event);
            },
            handleMenuScroll: function(event) {
                if (this.props.onMenuScrollToBottom) {
                    var target = event.target;
                    target.scrollHeight > target.offsetHeight && !(target.scrollHeight - target.offsetHeight - target.scrollTop) && this.props.onMenuScrollToBottom();
                }
            },
            handleRequired: function(value, multi) {
                return !value || (multi ? 0 === value.length : 0 === Object.keys(value).length);
            },
            getOptionLabel: function(op) {
                return op[this.props.labelKey];
            },
            /**
	  * Turns a value into an array from the given options
	  * @param	{String|Number|Array}	value		- the value of the select input
	  * @param	{Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
	  * @returns	{Array}	the value of the select represented in an array
	  */
            getValueArray: function(value, nextProps) {
                var _this = this, props = "object" == typeof nextProps ? nextProps : this.props;
                if (props.multi) {
                    if ("string" == typeof value && (value = value.split(props.delimiter)), !Array.isArray(value)) {
                        if (null === value || void 0 === value) return [];
                        value = [ value ];
                    }
                    return value.map(function(value) {
                        return _this.expandValue(value, props);
                    }).filter(function(i) {
                        return i;
                    });
                }
                var expandedValue = this.expandValue(value, props);
                return expandedValue ? [ expandedValue ] : [];
            },
            /**
	  * Retrieve a value from the given options and valueKey
	  * @param	{String|Number|Array}	value	- the selected value(s)
	  * @param	{Object}		props	- the Select component's props (or nextProps)
	  */
            expandValue: function(value, props) {
                if ("string" != typeof value && "number" != typeof value) return value;
                var options = props.options, valueKey = props.valueKey;
                if (options) for (var i = 0; i < options.length; i++) if (options[i][valueKey] === value) return options[i];
            },
            setValue: function(value) {
                var _this2 = this;
                if (this.props.autoBlur && this.blurInput(), this.props.onChange) {
                    if (this.props.required) {
                        var required = this.handleRequired(value, this.props.multi);
                        this.setState({
                            required: required
                        });
                    }
                    this.props.simpleValue && value && (value = this.props.multi ? value.map(function(i) {
                        return i[_this2.props.valueKey];
                    }).join(this.props.delimiter) : value[this.props.valueKey]), this.props.onChange(value);
                }
            },
            selectValue: function(value) {
                var _this3 = this;
                //NOTE: update value in the callback to make sure the input value is empty so that there are no sttyling issues (Chrome had issue otherwise)
                this.hasScrolledToOption = !1, this.props.multi ? this.setState({
                    inputValue: "",
                    focusedIndex: null
                }, function() {
                    _this3.addValue(value);
                }) : this.setState({
                    isOpen: !1,
                    inputValue: "",
                    isPseudoFocused: this.state.isFocused
                }, function() {
                    _this3.setValue(value);
                });
            },
            addValue: function(value) {
                var valueArray = this.getValueArray(this.props.value);
                this.setValue(valueArray.concat(value));
            },
            popValue: function() {
                var valueArray = this.getValueArray(this.props.value);
                valueArray.length && valueArray[valueArray.length - 1].clearableValue !== !1 && this.setValue(valueArray.slice(0, valueArray.length - 1));
            },
            removeValue: function(value) {
                var valueArray = this.getValueArray(this.props.value);
                this.setValue(valueArray.filter(function(i) {
                    return i !== value;
                })), this.focus();
            },
            clearValue: function(event) {
                // if the event was triggered by a mousedown and not the primary
                // button, ignore it.
                event && "mousedown" === event.type && 0 !== event.button || (event.stopPropagation(), 
                event.preventDefault(), this.setValue(this.props.resetValue), this.setState({
                    isOpen: !1,
                    inputValue: ""
                }, this.focus));
            },
            focusOption: function(option) {
                this.setState({
                    focusedOption: option
                });
            },
            focusNextOption: function() {
                this.focusAdjacentOption("next");
            },
            focusPreviousOption: function() {
                this.focusAdjacentOption("previous");
            },
            focusPageUpOption: function() {
                this.focusAdjacentOption("page_up");
            },
            focusPageDownOption: function() {
                this.focusAdjacentOption("page_down");
            },
            focusStartOption: function() {
                this.focusAdjacentOption("start");
            },
            focusEndOption: function() {
                this.focusAdjacentOption("end");
            },
            focusAdjacentOption: function(dir) {
                var options = this._visibleOptions.map(function(option, index) {
                    return {
                        option: option,
                        index: index
                    };
                }).filter(function(option) {
                    return !option.option.disabled;
                });
                if (this._scrollToFocusedOptionOnUpdate = !0, !this.state.isOpen) return void this.setState({
                    isOpen: !0,
                    inputValue: "",
                    focusedOption: this._focusedOption || options["next" === dir ? 0 : options.length - 1].option
                });
                if (options.length) {
                    for (var focusedIndex = -1, i = 0; i < options.length; i++) if (this._focusedOption === options[i].option) {
                        focusedIndex = i;
                        break;
                    }
                    if ("next" === dir && focusedIndex !== -1) focusedIndex = (focusedIndex + 1) % options.length; else if ("previous" === dir) focusedIndex > 0 ? focusedIndex -= 1 : focusedIndex = options.length - 1; else if ("start" === dir) focusedIndex = 0; else if ("end" === dir) focusedIndex = options.length - 1; else if ("page_up" === dir) {
                        var potentialIndex = focusedIndex - this.props.pageSize;
                        focusedIndex = potentialIndex < 0 ? 0 : potentialIndex;
                    } else if ("page_down" === dir) {
                        var potentialIndex = focusedIndex + this.props.pageSize;
                        focusedIndex = potentialIndex > options.length - 1 ? options.length - 1 : potentialIndex;
                    }
                    focusedIndex === -1 && (focusedIndex = 0), this.setState({
                        focusedIndex: options[focusedIndex].index,
                        focusedOption: options[focusedIndex].option
                    });
                }
            },
            selectFocusedOption: function() {
                // if (this.props.allowCreate && !this.state.focusedOption) {
                // 	return this.selectValue(this.state.inputValue);
                // }
                if (this._focusedOption) return this.selectValue(this._focusedOption);
            },
            renderLoading: function() {
                if (this.props.isLoading) return _react2["default"].createElement("span", {
                    className: "Select-loading-zone",
                    "aria-hidden": "true"
                }, _react2["default"].createElement("span", {
                    className: "Select-loading"
                }));
            },
            renderValue: function(valueArray, isOpen) {
                var _this4 = this, renderLabel = this.props.valueRenderer || this.getOptionLabel, ValueComponent = this.props.valueComponent;
                if (!valueArray.length) return this.state.inputValue ? null : _react2["default"].createElement("div", {
                    className: "Select-placeholder"
                }, this.props.placeholder);
                var onClick = this.props.onValueClick ? this.handleValueClick : null;
                return this.props.multi ? valueArray.map(function(value, i) {
                    return _react2["default"].createElement(ValueComponent, {
                        id: _this4._instancePrefix + "-value-" + i,
                        instancePrefix: _this4._instancePrefix,
                        disabled: _this4.props.disabled || value.clearableValue === !1,
                        key: "value-" + i + "-" + value[_this4.props.valueKey],
                        onClick: onClick,
                        onRemove: _this4.removeValue,
                        value: value
                    }, renderLabel(value), _react2["default"].createElement("span", {
                        className: "Select-aria-only"
                    }, " "));
                }) : this.state.inputValue ? void 0 : (isOpen && (onClick = null), _react2["default"].createElement(ValueComponent, {
                    id: this._instancePrefix + "-value-item",
                    disabled: this.props.disabled,
                    instancePrefix: this._instancePrefix,
                    onClick: onClick,
                    value: valueArray[0]
                }, renderLabel(valueArray[0])));
            },
            renderInput: function(valueArray, focusedOptionIndex) {
                if (this.props.inputRenderer) return this.props.inputRenderer();
                var _classNames, className = (0, _classnames2["default"])("Select-input", this.props.inputProps.className), isOpen = !!this.state.isOpen, ariaOwns = (0, 
                _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, this._instancePrefix + "-list", isOpen), 
                _defineProperty(_classNames, this._instancePrefix + "-backspace-remove-message", this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), 
                _classNames)), inputProps = _extends({}, this.props.inputProps, {
                    role: "combobox",
                    "aria-expanded": "" + isOpen,
                    "aria-owns": ariaOwns,
                    "aria-haspopup": "" + isOpen,
                    "aria-activedescendant": isOpen ? this._instancePrefix + "-option-" + focusedOptionIndex : this._instancePrefix + "-value",
                    "aria-labelledby": this.props["aria-labelledby"],
                    "aria-label": this.props["aria-label"],
                    className: className,
                    tabIndex: this.props.tabIndex,
                    onBlur: this.handleInputBlur,
                    onChange: this.handleInputChange,
                    onFocus: this.handleInputFocus,
                    ref: "input",
                    required: this.state.required,
                    value: this.state.inputValue
                });
                if (this.props.disabled || !this.props.searchable) {
                    var divProps = (0, _blacklist2["default"])(this.props.inputProps, "inputClassName");
                    return _react2["default"].createElement("div", _extends({}, divProps, {
                        role: "combobox",
                        "aria-expanded": isOpen,
                        "aria-owns": isOpen ? this._instancePrefix + "-list" : this._instancePrefix + "-value",
                        "aria-activedescendant": isOpen ? this._instancePrefix + "-option-" + focusedOptionIndex : this._instancePrefix + "-value",
                        className: className,
                        tabIndex: this.props.tabIndex || 0,
                        onBlur: this.handleInputBlur,
                        onFocus: this.handleInputFocus,
                        ref: "input",
                        "aria-readonly": "" + !!this.props.disabled,
                        style: {
                            border: 0,
                            width: 1,
                            display: "inline-block"
                        }
                    }));
                }
                return this.props.autosize ? _react2["default"].createElement(_reactInputAutosize2["default"], _extends({}, inputProps, {
                    minWidth: "5px"
                })) : _react2["default"].createElement("div", {
                    className: className
                }, _react2["default"].createElement("input", inputProps));
            },
            renderClear: function() {
                if (this.props.clearable && this.props.value && (!this.props.multi || this.props.value.length) && !this.props.disabled && !this.props.isLoading) return _react2["default"].createElement("span", {
                    className: "Select-clear-zone",
                    title: this.props.multi ? this.props.clearAllText : this.props.clearValueText,
                    "aria-label": this.props.multi ? this.props.clearAllText : this.props.clearValueText,
                    onMouseDown: this.clearValue,
                    onTouchStart: this.handleTouchStart,
                    onTouchMove: this.handleTouchMove,
                    onTouchEnd: this.handleTouchEndClearValue
                }, _react2["default"].createElement("span", {
                    className: "Select-clear",
                    dangerouslySetInnerHTML: {
                        __html: "&times;"
                    }
                }));
            },
            renderArrow: function() {
                return _react2["default"].createElement("span", {
                    className: "Select-arrow-zone",
                    onMouseDown: this.handleMouseDownOnArrow
                }, _react2["default"].createElement("span", {
                    className: "Select-arrow",
                    onMouseDown: this.handleMouseDownOnArrow
                }));
            },
            filterOptions: function(excludeOptions) {
                var _this5 = this, filterValue = this.state.inputValue, options = this.props.options || [];
                return "function" == typeof this.props.filterOptions ? this.props.filterOptions.call(this, options, filterValue, excludeOptions) : this.props.filterOptions ? (this.props.ignoreAccents && (filterValue = (0, 
                _utilsStripDiacritics2["default"])(filterValue)), this.props.ignoreCase && (filterValue = filterValue.toLowerCase()), 
                excludeOptions && (excludeOptions = excludeOptions.map(function(i) {
                    return i[_this5.props.valueKey];
                })), options.filter(function(option) {
                    if (excludeOptions && excludeOptions.indexOf(option[_this5.props.valueKey]) > -1) return !1;
                    if (_this5.props.filterOption) return _this5.props.filterOption.call(_this5, option, filterValue);
                    if (!filterValue) return !0;
                    var valueTest = String(option[_this5.props.valueKey]), labelTest = String(option[_this5.props.labelKey]);
                    return _this5.props.ignoreAccents && ("label" !== _this5.props.matchProp && (valueTest = (0, 
                    _utilsStripDiacritics2["default"])(valueTest)), "value" !== _this5.props.matchProp && (labelTest = (0, 
                    _utilsStripDiacritics2["default"])(labelTest))), _this5.props.ignoreCase && ("label" !== _this5.props.matchProp && (valueTest = valueTest.toLowerCase()), 
                    "value" !== _this5.props.matchProp && (labelTest = labelTest.toLowerCase())), "start" === _this5.props.matchPos ? "label" !== _this5.props.matchProp && valueTest.substr(0, filterValue.length) === filterValue || "value" !== _this5.props.matchProp && labelTest.substr(0, filterValue.length) === filterValue : "label" !== _this5.props.matchProp && valueTest.indexOf(filterValue) >= 0 || "value" !== _this5.props.matchProp && labelTest.indexOf(filterValue) >= 0;
                })) : options;
            },
            renderMenu: function(options, valueArray, focusedOption) {
                var _this6 = this;
                if (!options || !options.length) return this.props.noResultsText ? _react2["default"].createElement("div", {
                    className: "Select-noresults"
                }, this.props.noResultsText) : null;
                if (this.props.menuRenderer) return this.props.menuRenderer({
                    focusedOption: focusedOption,
                    focusOption: this.focusOption,
                    labelKey: this.props.labelKey,
                    options: options,
                    selectValue: this.selectValue,
                    valueArray: valueArray
                });
                var _ret = function() {
                    var Option = _this6.props.optionComponent, renderLabel = _this6.props.optionRenderer || _this6.getOptionLabel;
                    return {
                        v: options.map(function(option, i) {
                            var isSelected = valueArray && valueArray.indexOf(option) > -1, isFocused = option === focusedOption, optionRef = isFocused ? "focused" : null, optionClass = (0, 
                            _classnames2["default"])(_this6.props.optionClassName, {
                                "Select-option": !0,
                                "is-selected": isSelected,
                                "is-focused": isFocused,
                                "is-disabled": option.disabled
                            });
                            return _react2["default"].createElement(Option, {
                                instancePrefix: _this6._instancePrefix,
                                optionIndex: i,
                                className: optionClass,
                                isDisabled: option.disabled,
                                isFocused: isFocused,
                                key: "option-" + i + "-" + option[_this6.props.valueKey],
                                onSelect: _this6.selectValue,
                                onFocus: _this6.focusOption,
                                option: option,
                                isSelected: isSelected,
                                ref: optionRef
                            }, renderLabel(option));
                        })
                    };
                }();
                return "object" == typeof _ret ? _ret.v : void 0;
            },
            renderHiddenField: function(valueArray) {
                var _this7 = this;
                if (this.props.name) {
                    if (this.props.joinValues) {
                        var value = valueArray.map(function(i) {
                            return stringifyValue(i[_this7.props.valueKey]);
                        }).join(this.props.delimiter);
                        return _react2["default"].createElement("input", {
                            type: "hidden",
                            ref: "value",
                            name: this.props.name,
                            value: value,
                            disabled: this.props.disabled
                        });
                    }
                    return valueArray.map(function(item, index) {
                        return _react2["default"].createElement("input", {
                            key: "hidden." + index,
                            type: "hidden",
                            ref: "value" + index,
                            name: _this7.props.name,
                            value: stringifyValue(item[_this7.props.valueKey]),
                            disabled: _this7.props.disabled
                        });
                    });
                }
            },
            getFocusableOptionIndex: function(selectedOption) {
                var options = this._visibleOptions;
                if (!options.length) return null;
                var focusedOption = this.state.focusedOption || selectedOption;
                if (focusedOption && !focusedOption.disabled) {
                    var focusedOptionIndex = options.indexOf(focusedOption);
                    if (focusedOptionIndex !== -1) return focusedOptionIndex;
                }
                for (var i = 0; i < options.length; i++) if (!options[i].disabled) return i;
                return null;
            },
            renderOuter: function(options, valueArray, focusedOption) {
                var menu = this.renderMenu(options, valueArray, focusedOption);
                return menu ? _react2["default"].createElement("div", {
                    ref: "menuContainer",
                    className: "Select-menu-outer",
                    style: this.props.menuContainerStyle
                }, _react2["default"].createElement("div", {
                    ref: "menu",
                    role: "listbox",
                    className: "Select-menu",
                    id: this._instancePrefix + "-list",
                    style: this.props.menuStyle,
                    onScroll: this.handleMenuScroll,
                    onMouseDown: this.handleMouseDownOnMenu
                }, menu)) : null;
            },
            render: function() {
                var valueArray = this.getValueArray(this.props.value), options = this._visibleOptions = this.filterOptions(this.props.multi ? valueArray : null), isOpen = this.state.isOpen;
                this.props.multi && !options.length && valueArray.length && !this.state.inputValue && (isOpen = !1);
                var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]), focusedOption = null;
                focusedOption = null !== focusedOptionIndex ? this._focusedOption = this._visibleOptions[focusedOptionIndex] : this._focusedOption = null;
                var className = (0, _classnames2["default"])("Select", this.props.className, {
                    "Select--multi": this.props.multi,
                    "Select--single": !this.props.multi,
                    "is-disabled": this.props.disabled,
                    "is-focused": this.state.isFocused,
                    "is-loading": this.props.isLoading,
                    "is-open": isOpen,
                    "is-pseudo-focused": this.state.isPseudoFocused,
                    "is-searchable": this.props.searchable,
                    "has-value": valueArray.length
                }), removeMessage = null;
                return this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves && (removeMessage = _react2["default"].createElement("span", {
                    id: this._instancePrefix + "-backspace-remove-message",
                    className: "Select-aria-only",
                    "aria-live": "assertive"
                }, this.props.backspaceToRemoveMessage.replace("{label}", valueArray[valueArray.length - 1][this.props.labelKey]))), 
                _react2["default"].createElement("div", {
                    ref: "wrapper",
                    className: className,
                    style: this.props.wrapperStyle
                }, this.renderHiddenField(valueArray), _react2["default"].createElement("div", {
                    ref: "control",
                    className: "Select-control",
                    style: this.props.style,
                    onKeyDown: this.handleKeyDown,
                    onMouseDown: this.handleMouseDown,
                    onTouchEnd: this.handleTouchEnd,
                    onTouchStart: this.handleTouchStart,
                    onTouchMove: this.handleTouchMove
                }, _react2["default"].createElement("span", {
                    className: "Select-multi-value-wrapper",
                    id: this._instancePrefix + "-value"
                }, this.renderValue(valueArray, isOpen), this.renderInput(valueArray, focusedOptionIndex)), removeMessage, this.renderLoading(), this.renderClear(), this.renderArrow()), isOpen ? this.renderOuter(options, this.props.multi ? null : valueArray, focusedOption) : null);
            }
        });
        exports["default"] = Select, module.exports = exports["default"];
    }, /* 5 */
    /***/
    function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_5__;
    }, /* 6 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, React = __webpack_require__(3), sizerStyle = {
            position: "absolute",
            top: 0,
            left: 0,
            visibility: "hidden",
            height: 0,
            overflow: "scroll",
            whiteSpace: "pre"
        }, AutosizeInput = React.createClass({
            displayName: "AutosizeInput",
            propTypes: {
                className: React.PropTypes.string,
                // className for the outer element
                defaultValue: React.PropTypes.any,
                // default field value
                inputClassName: React.PropTypes.string,
                // className for the input element
                inputStyle: React.PropTypes.object,
                // css styles for the input element
                minWidth: React.PropTypes.oneOfType([ // minimum width for input element
                React.PropTypes.number, React.PropTypes.string ]),
                onChange: React.PropTypes.func,
                // onChange handler: function(newValue) {}
                placeholder: React.PropTypes.string,
                // placeholder text
                placeholderIsMinWidth: React.PropTypes.bool,
                // don't collapse size to less than the placeholder
                style: React.PropTypes.object,
                // css styles for the outer element
                value: React.PropTypes.any
            },
            // field value
            getDefaultProps: function() {
                return {
                    minWidth: 1
                };
            },
            getInitialState: function() {
                return {
                    inputWidth: this.props.minWidth
                };
            },
            componentDidMount: function() {
                this.copyInputStyles(), this.updateInputWidth();
            },
            componentDidUpdate: function() {
                this.updateInputWidth();
            },
            copyInputStyles: function() {
                if (this.isMounted() && window.getComputedStyle) {
                    var inputStyle = window.getComputedStyle(this.refs.input);
                    if (inputStyle) {
                        var widthNode = this.refs.sizer;
                        if (widthNode.style.fontSize = inputStyle.fontSize, widthNode.style.fontFamily = inputStyle.fontFamily, 
                        widthNode.style.fontWeight = inputStyle.fontWeight, widthNode.style.fontStyle = inputStyle.fontStyle, 
                        widthNode.style.letterSpacing = inputStyle.letterSpacing, this.props.placeholder) {
                            var placeholderNode = this.refs.placeholderSizer;
                            placeholderNode.style.fontSize = inputStyle.fontSize, placeholderNode.style.fontFamily = inputStyle.fontFamily, 
                            placeholderNode.style.fontWeight = inputStyle.fontWeight, placeholderNode.style.fontStyle = inputStyle.fontStyle, 
                            placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
                        }
                    }
                }
            },
            updateInputWidth: function() {
                if (this.isMounted() && "undefined" != typeof this.refs.sizer.scrollWidth) {
                    var newInputWidth = void 0;
                    newInputWidth = this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth) ? Math.max(this.refs.sizer.scrollWidth, this.refs.placeholderSizer.scrollWidth) + 2 : this.refs.sizer.scrollWidth + 2, 
                    newInputWidth < this.props.minWidth && (newInputWidth = this.props.minWidth), newInputWidth !== this.state.inputWidth && this.setState({
                        inputWidth: newInputWidth
                    });
                }
            },
            getInput: function() {
                return this.refs.input;
            },
            focus: function() {
                this.refs.input.focus();
            },
            blur: function() {
                this.refs.input.blur();
            },
            select: function() {
                this.refs.input.select();
            },
            render: function() {
                var sizerValue = this.props.defaultValue || this.props.value || "", wrapperStyle = this.props.style || {};
                wrapperStyle.display || (wrapperStyle.display = "inline-block");
                var inputStyle = _extends({}, this.props.inputStyle);
                inputStyle.width = this.state.inputWidth + "px", inputStyle.boxSizing = "content-box";
                var inputProps = _extends({}, this.props);
                // ensure props meant for `AutosizeInput` don't end up on the `input`
                return inputProps.className = this.props.inputClassName, inputProps.style = inputStyle, 
                delete inputProps.inputClassName, delete inputProps.inputStyle, delete inputProps.minWidth, 
                delete inputProps.placeholderIsMinWidth, React.createElement("div", {
                    className: this.props.className,
                    style: wrapperStyle
                }, React.createElement("input", _extends({}, inputProps, {
                    ref: "input"
                })), React.createElement("div", {
                    ref: "sizer",
                    style: sizerStyle
                }, sizerValue), this.props.placeholder ? React.createElement("div", {
                    ref: "placeholderSizer",
                    style: sizerStyle
                }, this.props.placeholder) : null);
            }
        });
        module.exports = AutosizeInput;
    }, /* 7 */
    /***/
    function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
        /* global define */
        !function() {
            "use strict";
            function classNames() {
                for (var classes = [], i = 0; i < arguments.length; i++) {
                    var arg = arguments[i];
                    if (arg) {
                        var argType = typeof arg;
                        if ("string" === argType || "number" === argType) classes.push(arg); else if (Array.isArray(arg)) classes.push(classNames.apply(null, arg)); else if ("object" === argType) for (var key in arg) hasOwn.call(arg, key) && arg[key] && classes.push(key);
                    }
                }
                return classes.join(" ");
            }
            var hasOwn = {}.hasOwnProperty;
            "undefined" != typeof module && module.exports ? module.exports = classNames : (__WEBPACK_AMD_DEFINE_ARRAY__ = [], 
            __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return classNames;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), // register as 'classnames', consistent with npm package name
            !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
        }();
    }, /* 8 */
    /***/
    function(module, exports) {
        module.exports = function(src) {
            var copy = {}, filter = arguments[1];
            if ("string" == typeof filter) {
                filter = {};
                for (var i = 1; i < arguments.length; i++) filter[arguments[i]] = !0;
            }
            for (var key in src) // blacklist?
            filter[key] || (copy[key] = src[key]);
            return copy;
        };
    }, /* 9 */
    /***/
    function(module, exports) {
        "use strict";
        var map = [ {
            base: "A",
            letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
        }, {
            base: "AA",
            letters: /[\uA732]/g
        }, {
            base: "AE",
            letters: /[\u00C6\u01FC\u01E2]/g
        }, {
            base: "AO",
            letters: /[\uA734]/g
        }, {
            base: "AU",
            letters: /[\uA736]/g
        }, {
            base: "AV",
            letters: /[\uA738\uA73A]/g
        }, {
            base: "AY",
            letters: /[\uA73C]/g
        }, {
            base: "B",
            letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
        }, {
            base: "C",
            letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
        }, {
            base: "D",
            letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
        }, {
            base: "DZ",
            letters: /[\u01F1\u01C4]/g
        }, {
            base: "Dz",
            letters: /[\u01F2\u01C5]/g
        }, {
            base: "E",
            letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
        }, {
            base: "F",
            letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
        }, {
            base: "G",
            letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
        }, {
            base: "H",
            letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
        }, {
            base: "I",
            letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
        }, {
            base: "J",
            letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
        }, {
            base: "K",
            letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
        }, {
            base: "L",
            letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
        }, {
            base: "LJ",
            letters: /[\u01C7]/g
        }, {
            base: "Lj",
            letters: /[\u01C8]/g
        }, {
            base: "M",
            letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
        }, {
            base: "N",
            letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
        }, {
            base: "NJ",
            letters: /[\u01CA]/g
        }, {
            base: "Nj",
            letters: /[\u01CB]/g
        }, {
            base: "O",
            letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
        }, {
            base: "OI",
            letters: /[\u01A2]/g
        }, {
            base: "OO",
            letters: /[\uA74E]/g
        }, {
            base: "OU",
            letters: /[\u0222]/g
        }, {
            base: "P",
            letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
        }, {
            base: "Q",
            letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
        }, {
            base: "R",
            letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
        }, {
            base: "S",
            letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
        }, {
            base: "T",
            letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
        }, {
            base: "TZ",
            letters: /[\uA728]/g
        }, {
            base: "U",
            letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
        }, {
            base: "V",
            letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
        }, {
            base: "VY",
            letters: /[\uA760]/g
        }, {
            base: "W",
            letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
        }, {
            base: "X",
            letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
        }, {
            base: "Y",
            letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
        }, {
            base: "Z",
            letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
        }, {
            base: "a",
            letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
        }, {
            base: "aa",
            letters: /[\uA733]/g
        }, {
            base: "ae",
            letters: /[\u00E6\u01FD\u01E3]/g
        }, {
            base: "ao",
            letters: /[\uA735]/g
        }, {
            base: "au",
            letters: /[\uA737]/g
        }, {
            base: "av",
            letters: /[\uA739\uA73B]/g
        }, {
            base: "ay",
            letters: /[\uA73D]/g
        }, {
            base: "b",
            letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
        }, {
            base: "c",
            letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
        }, {
            base: "d",
            letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
        }, {
            base: "dz",
            letters: /[\u01F3\u01C6]/g
        }, {
            base: "e",
            letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
        }, {
            base: "f",
            letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
        }, {
            base: "g",
            letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
        }, {
            base: "h",
            letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
        }, {
            base: "hv",
            letters: /[\u0195]/g
        }, {
            base: "i",
            letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
        }, {
            base: "j",
            letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
        }, {
            base: "k",
            letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
        }, {
            base: "l",
            letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
        }, {
            base: "lj",
            letters: /[\u01C9]/g
        }, {
            base: "m",
            letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
        }, {
            base: "n",
            letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
        }, {
            base: "nj",
            letters: /[\u01CC]/g
        }, {
            base: "o",
            letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
        }, {
            base: "oi",
            letters: /[\u01A3]/g
        }, {
            base: "ou",
            letters: /[\u0223]/g
        }, {
            base: "oo",
            letters: /[\uA74F]/g
        }, {
            base: "p",
            letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
        }, {
            base: "q",
            letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
        }, {
            base: "r",
            letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
        }, {
            base: "s",
            letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
        }, {
            base: "t",
            letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
        }, {
            base: "tz",
            letters: /[\uA729]/g
        }, {
            base: "u",
            letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
        }, {
            base: "v",
            letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
        }, {
            base: "vy",
            letters: /[\uA761]/g
        }, {
            base: "w",
            letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
        }, {
            base: "x",
            letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
        }, {
            base: "y",
            letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
        }, {
            base: "z",
            letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
        } ];
        module.exports = function(str) {
            for (var i = 0; i < map.length; i++) str = str.replace(map[i].letters, map[i].base);
            return str;
        };
    }, /* 10 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function initCache(cache) {
            return cache && "object" != typeof cache && (cache = {}), cache ? cache : null;
        }
        function updateCache(cache, input, data) {
            cache && (cache[input] = data);
        }
        function getFromCache(cache, input) {
            if (cache) for (var i = input.length; i >= 0; --i) {
                var cacheKey = input.slice(0, i);
                if (cache[cacheKey] && (input === cacheKey || cache[cacheKey].complete)) return cache[cacheKey];
            }
        }
        function thenPromise(promise, callback) {
            if (promise && "function" == typeof promise.then) return promise.then(function(data) {
                callback(null, data);
            }, function(err) {
                callback(err);
            });
        }
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _Select = __webpack_require__(4), _Select2 = _interopRequireDefault(_Select), _utilsStripDiacritics = __webpack_require__(9), _utilsStripDiacritics2 = _interopRequireDefault(_utilsStripDiacritics), requestId = 0, stringOrNode = _react2["default"].PropTypes.oneOfType([ _react2["default"].PropTypes.string, _react2["default"].PropTypes.node ]), Async = _react2["default"].createClass({
            displayName: "Async",
            propTypes: {
                cache: _react2["default"].PropTypes.any,
                // object to use to cache results, can be null to disable cache
                ignoreAccents: _react2["default"].PropTypes.bool,
                // whether to strip diacritics when filtering (shared with Select)
                ignoreCase: _react2["default"].PropTypes.bool,
                // whether to perform case-insensitive filtering (shared with Select)
                isLoading: _react2["default"].PropTypes.bool,
                // overrides the isLoading state when set to true
                loadOptions: _react2["default"].PropTypes.func.isRequired,
                // function to call to load options asynchronously
                loadingPlaceholder: _react2["default"].PropTypes.string,
                // replaces the placeholder while options are loading
                minimumInput: _react2["default"].PropTypes.number,
                // the minimum number of characters that trigger loadOptions
                noResultsText: stringOrNode,
                // placeholder displayed when there are no matching search results (shared with Select)
                onInputChange: _react2["default"].PropTypes.func,
                // onInputChange handler: function (inputValue) {}
                placeholder: stringOrNode,
                // field placeholder, displayed when there's no value (shared with Select)
                searchPromptText: stringOrNode,
                // label to prompt for search input
                searchingText: _react2["default"].PropTypes.string
            },
            // message to display while options are loading
            getDefaultProps: function() {
                return {
                    cache: !0,
                    ignoreAccents: !0,
                    ignoreCase: !0,
                    loadingPlaceholder: "Loading...",
                    minimumInput: 0,
                    searchingText: "Searching...",
                    searchPromptText: "Type to search"
                };
            },
            getInitialState: function() {
                return {
                    cache: initCache(this.props.cache),
                    isLoading: !1,
                    options: []
                };
            },
            componentWillMount: function() {
                this._lastInput = "";
            },
            componentDidMount: function() {
                this.loadOptions("");
            },
            componentWillReceiveProps: function(nextProps) {
                nextProps.cache !== this.props.cache && this.setState({
                    cache: initCache(nextProps.cache)
                });
            },
            focus: function() {
                this.refs.select.focus();
            },
            resetState: function() {
                this._currentRequestId = -1, this.setState({
                    isLoading: !1,
                    options: []
                });
            },
            getResponseHandler: function(input) {
                var _this = this, _requestId = this._currentRequestId = requestId++;
                return function(err, data) {
                    if (err) throw err;
                    _this.isMounted() && (updateCache(_this.state.cache, input, data), _requestId === _this._currentRequestId && _this.setState({
                        isLoading: !1,
                        options: data && data.options || []
                    }));
                };
            },
            loadOptions: function(input) {
                if (this.props.onInputChange) {
                    var nextState = this.props.onInputChange(input);
                    // Note: != used deliberately here to catch undefined and null
                    null != nextState && (input = "" + nextState);
                }
                if (this.props.ignoreAccents && (input = (0, _utilsStripDiacritics2["default"])(input)), 
                this.props.ignoreCase && (input = input.toLowerCase()), this._lastInput = input, 
                input.length < this.props.minimumInput) return this.resetState();
                var cacheResult = getFromCache(this.state.cache, input);
                if (cacheResult) return this.setState({
                    options: cacheResult.options
                });
                this.setState({
                    isLoading: !0
                });
                var responseHandler = this.getResponseHandler(input), inputPromise = thenPromise(this.props.loadOptions(input, responseHandler), responseHandler);
                return inputPromise ? inputPromise.then(function() {
                    return input;
                }) : input;
            },
            render: function() {
                var noResultsText = this.props.noResultsText, _state = this.state, isLoading = _state.isLoading, options = _state.options;
                this.props.isLoading && (isLoading = !0);
                var placeholder = isLoading ? this.props.loadingPlaceholder : this.props.placeholder;
                return isLoading ? noResultsText = this.props.searchingText : !options.length && this._lastInput.length < this.props.minimumInput && (noResultsText = this.props.searchPromptText), 
                _react2["default"].createElement(_Select2["default"], _extends({}, this.props, {
                    ref: "select",
                    isLoading: isLoading,
                    noResultsText: noResultsText,
                    onInputChange: this.loadOptions,
                    options: options,
                    placeholder: placeholder
                }));
            }
        });
        module.exports = Async;
    }, /* 11 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        var _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(7), _classnames2 = _interopRequireDefault(_classnames), Option = _react2["default"].createClass({
            displayName: "Option",
            propTypes: {
                children: _react2["default"].PropTypes.node,
                className: _react2["default"].PropTypes.string,
                // className (based on mouse position)
                instancePrefix: _react2["default"].PropTypes.string.isRequired,
                // unique prefix for the ids (used for aria)
                isDisabled: _react2["default"].PropTypes.bool,
                // the option is disabled
                isFocused: _react2["default"].PropTypes.bool,
                // the option is focused
                isSelected: _react2["default"].PropTypes.bool,
                // the option is selected
                onFocus: _react2["default"].PropTypes.func,
                // method to handle mouseEnter on option element
                onSelect: _react2["default"].PropTypes.func,
                // method to handle click on option element
                onUnfocus: _react2["default"].PropTypes.func,
                // method to handle mouseLeave on option element
                option: _react2["default"].PropTypes.object.isRequired,
                // object that is base for that option
                optionIndex: _react2["default"].PropTypes.number
            },
            // index of the option, used to generate unique ids for aria
            blockEvent: function(event) {
                event.preventDefault(), event.stopPropagation(), "A" === event.target.tagName && "href" in event.target && (event.target.target ? window.open(event.target.href, event.target.target) : window.location.href = event.target.href);
            },
            handleMouseDown: function(event) {
                event.preventDefault(), event.stopPropagation(), this.props.onSelect(this.props.option, event);
            },
            handleMouseEnter: function(event) {
                this.onFocus(event);
            },
            handleMouseMove: function(event) {
                this.onFocus(event);
            },
            handleTouchEnd: function(event) {
                // Check if the view is being dragged, In this case
                // we don't want to fire the click event (because the user only wants to scroll)
                this.dragging || this.handleMouseDown(event);
            },
            handleTouchMove: function(event) {
                // Set a flag that the view is being dragged
                this.dragging = !0;
            },
            handleTouchStart: function(event) {
                // Set a flag that the view is not being dragged
                this.dragging = !1;
            },
            onFocus: function(event) {
                this.props.isFocused || this.props.onFocus(this.props.option, event);
            },
            render: function() {
                var _props = this.props, option = _props.option, instancePrefix = _props.instancePrefix, optionIndex = _props.optionIndex, className = (0, 
                _classnames2["default"])(this.props.className, option.className);
                return option.disabled ? _react2["default"].createElement("div", {
                    className: className,
                    onMouseDown: this.blockEvent,
                    onClick: this.blockEvent
                }, this.props.children) : _react2["default"].createElement("div", {
                    className: className,
                    style: option.style,
                    role: "option",
                    onMouseDown: this.handleMouseDown,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseMove: this.handleMouseMove,
                    onTouchStart: this.handleTouchStart,
                    onTouchMove: this.handleTouchMove,
                    onTouchEnd: this.handleTouchEnd,
                    id: instancePrefix + "-option-" + optionIndex,
                    title: option.title
                }, this.props.children);
            }
        });
        module.exports = Option;
    }, /* 12 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        var _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(7), _classnames2 = _interopRequireDefault(_classnames), Value = _react2["default"].createClass({
            displayName: "Value",
            propTypes: {
                children: _react2["default"].PropTypes.node,
                disabled: _react2["default"].PropTypes.bool,
                // disabled prop passed to ReactSelect
                id: _react2["default"].PropTypes.string,
                // Unique id for the value - used for aria
                onClick: _react2["default"].PropTypes.func,
                // method to handle click on value label
                onRemove: _react2["default"].PropTypes.func,
                // method to handle removal of the value
                value: _react2["default"].PropTypes.object.isRequired
            },
            // the option object for this value
            handleMouseDown: function(event) {
                if ("mousedown" !== event.type || 0 === event.button) return this.props.onClick ? (event.stopPropagation(), 
                void this.props.onClick(this.props.value, event)) : void (this.props.value.href && event.stopPropagation());
            },
            onRemove: function(event) {
                event.preventDefault(), event.stopPropagation(), this.props.onRemove(this.props.value);
            },
            handleTouchEndRemove: function(event) {
                // Check if the view is being dragged, In this case
                // we don't want to fire the click event (because the user only wants to scroll)
                this.dragging || // Fire the mouse events
                this.onRemove(event);
            },
            handleTouchMove: function(event) {
                // Set a flag that the view is being dragged
                this.dragging = !0;
            },
            handleTouchStart: function(event) {
                // Set a flag that the view is not being dragged
                this.dragging = !1;
            },
            renderRemoveIcon: function() {
                if (!this.props.disabled && this.props.onRemove) return _react2["default"].createElement("span", {
                    className: "Select-value-icon",
                    "aria-hidden": "true",
                    onMouseDown: this.onRemove,
                    onTouchEnd: this.handleTouchEndRemove,
                    onTouchStart: this.handleTouchStart,
                    onTouchMove: this.handleTouchMove
                }, "×");
            },
            renderLabel: function() {
                var className = "Select-value-label";
                return this.props.onClick || this.props.value.href ? _react2["default"].createElement("a", {
                    className: className,
                    href: this.props.value.href,
                    target: this.props.value.target,
                    onMouseDown: this.handleMouseDown,
                    onTouchEnd: this.handleMouseDown
                }, this.props.children) : _react2["default"].createElement("span", {
                    className: className,
                    role: "option",
                    "aria-selected": "true",
                    id: this.props.id
                }, this.props.children);
            },
            render: function() {
                return _react2["default"].createElement("div", {
                    className: (0, _classnames2["default"])("Select-value", this.props.value.className),
                    style: this.props.value.style,
                    title: this.props.value.title
                }, this.renderRemoveIcon(), this.renderLabel());
            }
        });
        module.exports = Value;
    }, /* 13 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _ArrowKeyStepper = __webpack_require__(14);
        Object.defineProperty(exports, "ArrowKeyStepper", {
            enumerable: !0,
            get: function() {
                return _ArrowKeyStepper.ArrowKeyStepper;
            }
        });
        var _AutoSizer = __webpack_require__(19);
        Object.defineProperty(exports, "AutoSizer", {
            enumerable: !0,
            get: function() {
                return _AutoSizer.AutoSizer;
            }
        });
        var _CellMeasurer = __webpack_require__(22);
        Object.defineProperty(exports, "CellMeasurer", {
            enumerable: !0,
            get: function() {
                return _CellMeasurer.CellMeasurer;
            }
        }), Object.defineProperty(exports, "defaultCellMeasurerCellSizeCache", {
            enumerable: !0,
            get: function() {
                return _CellMeasurer.defaultCellSizeCache;
            }
        });
        var _Collection = __webpack_require__(25);
        Object.defineProperty(exports, "Collection", {
            enumerable: !0,
            get: function() {
                return _Collection.Collection;
            }
        });
        var _ColumnSizer = __webpack_require__(38);
        Object.defineProperty(exports, "ColumnSizer", {
            enumerable: !0,
            get: function() {
                return _ColumnSizer.ColumnSizer;
            }
        });
        var _FlexTable = __webpack_require__(48);
        Object.defineProperty(exports, "defaultFlexTableCellDataGetter", {
            enumerable: !0,
            get: function() {
                return _FlexTable.defaultCellDataGetter;
            }
        }), Object.defineProperty(exports, "defaultFlexTableCellRenderer", {
            enumerable: !0,
            get: function() {
                return _FlexTable.defaultCellRenderer;
            }
        }), Object.defineProperty(exports, "defaultFlexTableHeaderRenderer", {
            enumerable: !0,
            get: function() {
                return _FlexTable.defaultHeaderRenderer;
            }
        }), Object.defineProperty(exports, "defaultFlexTableRowRenderer", {
            enumerable: !0,
            get: function() {
                return _FlexTable.defaultRowRenderer;
            }
        }), Object.defineProperty(exports, "FlexTable", {
            enumerable: !0,
            get: function() {
                return _FlexTable.FlexTable;
            }
        }), Object.defineProperty(exports, "FlexColumn", {
            enumerable: !0,
            get: function() {
                return _FlexTable.FlexColumn;
            }
        }), Object.defineProperty(exports, "SortDirection", {
            enumerable: !0,
            get: function() {
                return _FlexTable.SortDirection;
            }
        }), Object.defineProperty(exports, "SortIndicator", {
            enumerable: !0,
            get: function() {
                return _FlexTable.SortIndicator;
            }
        });
        var _Grid = __webpack_require__(40);
        Object.defineProperty(exports, "defaultCellRangeRenderer", {
            enumerable: !0,
            get: function() {
                return _Grid.defaultCellRangeRenderer;
            }
        }), Object.defineProperty(exports, "Grid", {
            enumerable: !0,
            get: function() {
                return _Grid.Grid;
            }
        });
        var _InfiniteLoader = __webpack_require__(57);
        Object.defineProperty(exports, "InfiniteLoader", {
            enumerable: !0,
            get: function() {
                return _InfiniteLoader.InfiniteLoader;
            }
        });
        var _ScrollSync = __webpack_require__(59);
        Object.defineProperty(exports, "ScrollSync", {
            enumerable: !0,
            get: function() {
                return _ScrollSync.ScrollSync;
            }
        });
        var _VirtualScroll = __webpack_require__(61);
        Object.defineProperty(exports, "VirtualScroll", {
            enumerable: !0,
            get: function() {
                return _VirtualScroll.VirtualScroll;
            }
        });
        var _WindowScroller = __webpack_require__(63);
        Object.defineProperty(exports, "WindowScroller", {
            enumerable: !0,
            get: function() {
                return _WindowScroller.WindowScroller;
            }
        });
    }, /* 14 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.ArrowKeyStepper = exports["default"] = void 0;
        var _ArrowKeyStepper2 = __webpack_require__(15), _ArrowKeyStepper3 = _interopRequireDefault(_ArrowKeyStepper2);
        exports["default"] = _ArrowKeyStepper3["default"], exports.ArrowKeyStepper = _ArrowKeyStepper3["default"];
    }, /* 15 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _reactAddonsShallowCompare = __webpack_require__(16), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), ArrowKeyStepper = function(_Component) {
            function ArrowKeyStepper(props, context) {
                _classCallCheck(this, ArrowKeyStepper);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ArrowKeyStepper).call(this, props, context));
                return _this.state = {
                    scrollToColumn: 0,
                    scrollToRow: 0
                }, _this._columnStartIndex = 0, _this._columnStopIndex = 0, _this._rowStartIndex = 0, 
                _this._rowStopIndex = 0, _this._onKeyDown = _this._onKeyDown.bind(_this), _this._onSectionRendered = _this._onSectionRendered.bind(_this), 
                _this;
            }
            return _inherits(ArrowKeyStepper, _Component), _createClass(ArrowKeyStepper, [ {
                key: "render",
                value: function() {
                    var _props = this.props, className = _props.className, children = _props.children, _state = this.state, scrollToColumn = _state.scrollToColumn, scrollToRow = _state.scrollToRow;
                    return _react2["default"].createElement("div", {
                        className: className,
                        onKeyDown: this._onKeyDown
                    }, children({
                        onSectionRendered: this._onSectionRendered,
                        scrollToColumn: scrollToColumn,
                        scrollToRow: scrollToRow
                    }));
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(nextProps, nextState) {
                    return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                }
            }, {
                key: "_onKeyDown",
                value: function(event) {
                    var _props2 = this.props, columnCount = _props2.columnCount, rowCount = _props2.rowCount;
                    // The above cases all prevent default event event behavior.
                    // This is to keep the grid from scrolling after the snap-to update.
                    switch (event.key) {
                      case "ArrowDown":
                        event.preventDefault(), this.setState({
                            scrollToRow: Math.min(this._rowStopIndex + 1, rowCount - 1)
                        });
                        break;

                      case "ArrowLeft":
                        event.preventDefault(), this.setState({
                            scrollToColumn: Math.max(this._columnStartIndex - 1, 0)
                        });
                        break;

                      case "ArrowRight":
                        event.preventDefault(), this.setState({
                            scrollToColumn: Math.min(this._columnStopIndex + 1, columnCount - 1)
                        });
                        break;

                      case "ArrowUp":
                        event.preventDefault(), this.setState({
                            scrollToRow: Math.max(this._rowStartIndex - 1, 0)
                        });
                    }
                }
            }, {
                key: "_onSectionRendered",
                value: function(_ref) {
                    var columnStartIndex = _ref.columnStartIndex, columnStopIndex = _ref.columnStopIndex, rowStartIndex = _ref.rowStartIndex, rowStopIndex = _ref.rowStopIndex;
                    this._columnStartIndex = columnStartIndex, this._columnStopIndex = columnStopIndex, 
                    this._rowStartIndex = rowStartIndex, this._rowStopIndex = rowStopIndex;
                }
            } ]), ArrowKeyStepper;
        }(_react.Component);
        ArrowKeyStepper.propTypes = {
            children: _react.PropTypes.func.isRequired,
            className: _react.PropTypes.string,
            columnCount: _react.PropTypes.number.isRequired,
            rowCount: _react.PropTypes.number.isRequired
        }, exports["default"] = ArrowKeyStepper;
    }, /* 16 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(17);
    }, /* 17 */
    /***/
    function(module, exports, __webpack_require__) {
        /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/
        "use strict";
        /**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
        function shallowCompare(instance, nextProps, nextState) {
            return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
        }
        var shallowEqual = __webpack_require__(18);
        module.exports = shallowCompare;
    }, /* 18 */
    /***/
    function(module, exports) {
        /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */
        /*eslint-disable no-self-compare */
        "use strict";
        /**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
        function is(x, y) {
            // SameValue algorithm
            // SameValue algorithm
            return x === y ? 0 !== x || 1 / x === 1 / y : x !== x && y !== y;
        }
        /**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
        function shallowEqual(objA, objB) {
            if (is(objA, objB)) return !0;
            if ("object" != typeof objA || null === objA || "object" != typeof objB || null === objB) return !1;
            var keysA = Object.keys(objA), keysB = Object.keys(objB);
            if (keysA.length !== keysB.length) return !1;
            // Test for A's keys different from B.
            for (var i = 0; i < keysA.length; i++) if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) return !1;
            return !0;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        module.exports = shallowEqual;
    }, /* 19 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.AutoSizer = exports["default"] = void 0;
        var _AutoSizer2 = __webpack_require__(20), _AutoSizer3 = _interopRequireDefault(_AutoSizer2);
        exports["default"] = _AutoSizer3["default"], exports.AutoSizer = _AutoSizer3["default"];
    }, /* 20 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _reactAddonsShallowCompare = __webpack_require__(16), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), AutoSizer = function(_Component) {
            function AutoSizer(props) {
                _classCallCheck(this, AutoSizer);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AutoSizer).call(this, props));
                return _this.state = {
                    height: 0,
                    width: 0
                }, _this._onResize = _this._onResize.bind(_this), _this._onScroll = _this._onScroll.bind(_this), 
                _this._setRef = _this._setRef.bind(_this), _this;
            }
            return _inherits(AutoSizer, _Component), _createClass(AutoSizer, [ {
                key: "componentDidMount",
                value: function() {
                    // Defer requiring resize handler in order to support server-side rendering.
                    // See issue #41
                    this._detectElementResize = __webpack_require__(21), this._detectElementResize.addResizeListener(this._parentNode, this._onResize), 
                    this._onResize();
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._detectElementResize && this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
                }
            }, {
                key: "render",
                value: function() {
                    var _props = this.props, children = _props.children, disableHeight = _props.disableHeight, disableWidth = _props.disableWidth, _state = this.state, height = _state.height, width = _state.width, outerStyle = {
                        overflow: "visible"
                    };
                    return disableHeight || (outerStyle.height = 0), disableWidth || (outerStyle.width = 0), 
                    _react2["default"].createElement("div", {
                        ref: this._setRef,
                        onScroll: this._onScroll,
                        style: outerStyle
                    }, children({
                        height: height,
                        width: width
                    }));
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(nextProps, nextState) {
                    return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                }
            }, {
                key: "_onResize",
                value: function() {
                    var onResize = this.props.onResize, boundingRect = this._parentNode.getBoundingClientRect(), height = boundingRect.height || 0, width = boundingRect.width || 0, style = getComputedStyle(this._parentNode), paddingLeft = parseInt(style.paddingLeft, 10) || 0, paddingRight = parseInt(style.paddingRight, 10) || 0, paddingTop = parseInt(style.paddingTop, 10) || 0, paddingBottom = parseInt(style.paddingBottom, 10) || 0;
                    this.setState({
                        height: height - paddingTop - paddingBottom,
                        width: width - paddingLeft - paddingRight
                    }), onResize({
                        height: height,
                        width: width
                    });
                }
            }, {
                key: "_onScroll",
                value: function(event) {
                    // Prevent detectElementResize library from being triggered by this scroll event.
                    event.stopPropagation();
                }
            }, {
                key: "_setRef",
                value: function(autoSizer) {
                    // In case the component has been unmounted
                    this._parentNode = autoSizer && autoSizer.parentNode;
                }
            } ]), AutoSizer;
        }(_react.Component);
        AutoSizer.propTypes = {
            /**
	   * Function respondible for rendering children.
	   * This function should implement the following signature:
	   * ({ height, width }) => PropTypes.element
	   */
            children: _react.PropTypes.func.isRequired,
            /** Disable dynamic :height property */
            disableHeight: _react.PropTypes.bool,
            /** Disable dynamic :width property */
            disableWidth: _react.PropTypes.bool,
            /** Callback to be invoked on-resize: ({ height, width }) */
            onResize: _react.PropTypes.func.isRequired
        }, AutoSizer.defaultProps = {
            onResize: function() {}
        }, exports["default"] = AutoSizer;
    }, /* 21 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	* Detect Element Resize.
	* Forked in order to guard against unsafe 'window' and 'document' references.
	*
	* https://github.com/sdecima/javascript-detect-element-resize
	* Sebastian Decima
	*
	* version: 0.5.3
	**/
        // Check `document` and `window` in case of server-side rendering
        var _window;
        _window = "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0;
        var attachEvent = "undefined" != typeof document && document.attachEvent, stylesCreated = !1;
        if (!attachEvent) {
            var requestFrame = function() {
                var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function(fn) {
                    return _window.setTimeout(fn, 20);
                };
                return function(fn) {
                    return raf(fn);
                };
            }(), cancelFrame = function() {
                var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
                return function(id) {
                    return cancel(id);
                };
            }(), resetTriggers = function(element) {
                var triggers = element.__resizeTriggers__, expand = triggers.firstElementChild, contract = triggers.lastElementChild, expandChild = expand.firstElementChild;
                contract.scrollLeft = contract.scrollWidth, contract.scrollTop = contract.scrollHeight, 
                expandChild.style.width = expand.offsetWidth + 1 + "px", expandChild.style.height = expand.offsetHeight + 1 + "px", 
                expand.scrollLeft = expand.scrollWidth, expand.scrollTop = expand.scrollHeight;
            }, checkTriggers = function(element) {
                return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
            }, scrollListener = function(e) {
                var element = this;
                resetTriggers(this), this.__resizeRAF__ && cancelFrame(this.__resizeRAF__), this.__resizeRAF__ = requestFrame(function() {
                    checkTriggers(element) && (element.__resizeLast__.width = element.offsetWidth, element.__resizeLast__.height = element.offsetHeight, 
                    element.__resizeListeners__.forEach(function(fn) {
                        fn.call(element, e);
                    }));
                });
            }, animation = !1, animationstring = "animation", keyframeprefix = "", animationstartevent = "animationstart", domPrefixes = "Webkit Moz O ms".split(" "), startEvents = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "), pfx = "", elm = document.createElement("fakeelement");
            if (void 0 !== elm.style.animationName && (animation = !0), animation === !1) for (var i = 0; i < domPrefixes.length; i++) if (void 0 !== elm.style[domPrefixes[i] + "AnimationName"]) {
                pfx = domPrefixes[i], animationstring = pfx + "Animation", keyframeprefix = "-" + pfx.toLowerCase() + "-", 
                animationstartevent = startEvents[i], animation = !0;
                break;
            }
            var animationName = "resizeanim", animationKeyframes = "@" + keyframeprefix + "keyframes " + animationName + " { from { opacity: 0; } to { opacity: 0; } } ", animationStyle = keyframeprefix + "animation: 1ms " + animationName + "; ";
        }
        var createStyles = function() {
            if (!stylesCreated) {
                //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
                var css = (animationKeyframes ? animationKeyframes : "") + ".resize-triggers { " + (animationStyle ? animationStyle : "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style");
                style.type = "text/css", style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css)), 
                head.appendChild(style), stylesCreated = !0;
            }
        }, addResizeListener = function(element, fn) {
            attachEvent ? element.attachEvent("onresize", fn) : (element.__resizeTriggers__ || ("static" == getComputedStyle(element).position && (element.style.position = "relative"), 
            createStyles(), element.__resizeLast__ = {}, element.__resizeListeners__ = [], (element.__resizeTriggers__ = document.createElement("div")).className = "resize-triggers", 
            element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', 
            element.appendChild(element.__resizeTriggers__), resetTriggers(element), element.addEventListener("scroll", scrollListener, !0), 
            /* Listen for a css animation to detect element display/re-attach */
            animationstartevent && element.__resizeTriggers__.addEventListener(animationstartevent, function(e) {
                e.animationName == animationName && resetTriggers(element);
            })), element.__resizeListeners__.push(fn));
        }, removeResizeListener = function(element, fn) {
            attachEvent ? element.detachEvent("onresize", fn) : (element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1), 
            element.__resizeListeners__.length || (element.removeEventListener("scroll", scrollListener, !0), 
            element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__)));
        };
        module.exports = {
            addResizeListener: addResizeListener,
            removeResizeListener: removeResizeListener
        };
    }, /* 22 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.defaultCellSizeCache = exports.CellMeasurer = exports["default"] = void 0;
        var _CellMeasurer2 = __webpack_require__(23), _CellMeasurer3 = _interopRequireDefault(_CellMeasurer2), _defaultCellSizeCache2 = __webpack_require__(24), _defaultCellSizeCache3 = _interopRequireDefault(_defaultCellSizeCache2);
        exports["default"] = _CellMeasurer3["default"], exports.CellMeasurer = _CellMeasurer3["default"], 
        exports.defaultCellSizeCache = _defaultCellSizeCache3["default"];
    }, /* 23 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _reactAddonsShallowCompare = __webpack_require__(16), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), _reactDom = __webpack_require__(5), _reactDom2 = _interopRequireDefault(_reactDom), _defaultCellSizeCache = __webpack_require__(24), _defaultCellSizeCache2 = _interopRequireDefault(_defaultCellSizeCache), CellMeasurer = function(_Component) {
            function CellMeasurer(props, state) {
                _classCallCheck(this, CellMeasurer);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CellMeasurer).call(this, props, state));
                return _this._cellSizeCache = props.cellSizeCache || new _defaultCellSizeCache2["default"](), 
                _this.getColumnWidth = _this.getColumnWidth.bind(_this), _this.getRowHeight = _this.getRowHeight.bind(_this), 
                _this.resetMeasurements = _this.resetMeasurements.bind(_this), _this.resetMeasurementForColumn = _this.resetMeasurementForColumn.bind(_this), 
                _this.resetMeasurementForRow = _this.resetMeasurementForRow.bind(_this), _this;
            }
            return _inherits(CellMeasurer, _Component), _createClass(CellMeasurer, [ {
                key: "getColumnWidth",
                value: function(_ref) {
                    var index = _ref.index;
                    if (this._cellSizeCache.hasColumnWidth(index)) return this._cellSizeCache.getColumnWidth(index);
                    for (var rowCount = this.props.rowCount, maxWidth = 0, rowIndex = 0; rowIndex < rowCount; rowIndex++) {
                        var _measureCell2 = this._measureCell({
                            clientWidth: !0,
                            columnIndex: index,
                            rowIndex: rowIndex
                        }), width = _measureCell2.width;
                        maxWidth = Math.max(maxWidth, width);
                    }
                    return this._cellSizeCache.setColumnWidth(index, maxWidth), maxWidth;
                }
            }, {
                key: "getRowHeight",
                value: function(_ref2) {
                    var index = _ref2.index;
                    if (this._cellSizeCache.hasRowHeight(index)) return this._cellSizeCache.getRowHeight(index);
                    for (var columnCount = this.props.columnCount, maxHeight = 0, columnIndex = 0; columnIndex < columnCount; columnIndex++) {
                        var _measureCell3 = this._measureCell({
                            clientHeight: !0,
                            columnIndex: columnIndex,
                            rowIndex: index
                        }), height = _measureCell3.height;
                        maxHeight = Math.max(maxHeight, height);
                    }
                    return this._cellSizeCache.setRowHeight(index, maxHeight), maxHeight;
                }
            }, {
                key: "resetMeasurementForColumn",
                value: function(columnIndex) {
                    this._cellSizeCache.clearColumnWidth(columnIndex);
                }
            }, {
                key: "resetMeasurementForRow",
                value: function(rowIndex) {
                    this._cellSizeCache.clearRowHeight(rowIndex);
                }
            }, {
                key: "resetMeasurements",
                value: function() {
                    this._cellSizeCache.clearAllColumnWidths(), this._cellSizeCache.clearAllRowHeights();
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this._renderAndMount();
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(nextProps) {
                    var cellSizeCache = this.props.cellSizeCache;
                    cellSizeCache !== nextProps.cellSizeCache && (this._cellSizeCache = nextProps.cellSizeCache), 
                    this._updateDivDimensions(nextProps);
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._unmountContainer();
                }
            }, {
                key: "render",
                value: function() {
                    var children = this.props.children;
                    return children({
                        getColumnWidth: this.getColumnWidth,
                        getRowHeight: this.getRowHeight,
                        resetMeasurements: this.resetMeasurements,
                        resetMeasurementForColumn: this.resetMeasurementForColumn,
                        resetMeasurementForRow: this.resetMeasurementForRow
                    });
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(nextProps, nextState) {
                    return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                }
            }, {
                key: "_getContainerNode",
                value: function(props) {
                    var container = props.container;
                    return container ? _reactDom2["default"].findDOMNode("function" == typeof container ? container() : container) : document.body;
                }
            }, {
                key: "_measureCell",
                value: function(_ref3) {
                    var _ref3$clientHeight = _ref3.clientHeight, clientHeight = void 0 !== _ref3$clientHeight && _ref3$clientHeight, _ref3$clientWidth = _ref3.clientWidth, clientWidth = void 0 === _ref3$clientWidth || _ref3$clientWidth, columnIndex = _ref3.columnIndex, rowIndex = _ref3.rowIndex, cellRenderer = this.props.cellRenderer, rendered = cellRenderer({
                        columnIndex: columnIndex,
                        rowIndex: rowIndex
                    });
                    // Handle edge case where this method is called before the CellMeasurer has completed its initial render (and mounted).
                    this._renderAndMount(), // @TODO Keep an eye on this for future React updates as the interface may change:
                    // https://twitter.com/soprano/status/737316379712331776
                    _reactDom2["default"].unstable_renderSubtreeIntoContainer(this, rendered, this._div);
                    var measurements = {
                        height: clientHeight && this._div.clientHeight,
                        width: clientWidth && this._div.clientWidth
                    };
                    return _reactDom2["default"].unmountComponentAtNode(this._div), measurements;
                }
            }, {
                key: "_renderAndMount",
                value: function() {
                    this._div || (this._div = document.createElement("div"), this._div.style.display = "inline-block", 
                    this._div.style.position = "absolute", this._div.style.visibility = "hidden", this._div.style.zIndex = -1, 
                    this._updateDivDimensions(this.props), this._containerNode = this._getContainerNode(this.props), 
                    this._containerNode.appendChild(this._div));
                }
            }, {
                key: "_unmountContainer",
                value: function() {
                    this._div && (this._containerNode.removeChild(this._div), this._div = null), this._containerNode = null;
                }
            }, {
                key: "_updateDivDimensions",
                value: function(props) {
                    var height = props.height, width = props.width;
                    height && height !== this._divHeight && (this._divHeight = height, this._div.style.height = height + "px"), 
                    width && width !== this._divWidth && (this._divWidth = width, this._div.style.width = width + "px");
                }
            } ]), CellMeasurer;
        }(_react.Component);
        CellMeasurer.propTypes = {
            /**
	   * Renders a cell given its indices.
	   * Should implement the following interface: ({ columnIndex: number, rowIndex: number }): PropTypes.node
	   */
            cellRenderer: _react.PropTypes.func.isRequired,
            /**
	   * Optional, custom caching strategy for cell sizes.
	   */
            cellSizeCache: _react.PropTypes.object,
            /**
	   * Function respondible for rendering a virtualized component.
	   * This function should implement the following signature:
	   * ({ getColumnWidth, getRowHeight, resetMeasurements }) => PropTypes.element
	   */
            children: _react.PropTypes.func.isRequired,
            /**
	   * Number of columns in grid.
	   */
            columnCount: _react.PropTypes.number.isRequired,
            /**
	   * A Node, Component instance, or function that returns either.
	   * If this property is not specified the document body will be used.
	   */
            container: _react2["default"].PropTypes.oneOfType([ _react2["default"].PropTypes.func, _react2["default"].PropTypes.node ]),
            /**
	   * Assign a fixed :height in order to measure dynamic text :width only.
	   */
            height: _react.PropTypes.number,
            /**
	   * Number of rows in grid.
	   */
            rowCount: _react.PropTypes.number.isRequired,
            /**
	   * Assign a fixed :width in order to measure dynamic text :height only.
	   */
            width: _react.PropTypes.number
        }, exports["default"] = CellMeasurer;
    }, /* 24 */
    /***/
    function(module, exports) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), CellSizeCache = function() {
            function CellSizeCache() {
                _classCallCheck(this, CellSizeCache), this._cachedColumnWidths = {}, this._cachedRowHeights = {};
            }
            return _createClass(CellSizeCache, [ {
                key: "clearAllColumnWidths",
                value: function() {
                    this._cachedColumnWidths = {};
                }
            }, {
                key: "clearAllRowHeights",
                value: function() {
                    this._cachedRowHeights = {};
                }
            }, {
                key: "clearColumnWidth",
                value: function(index) {
                    delete this._cachedColumnWidths[index];
                }
            }, {
                key: "clearRowHeight",
                value: function(index) {
                    delete this._cachedRowHeights[index];
                }
            }, {
                key: "getColumnWidth",
                value: function(index) {
                    return this._cachedColumnWidths[index];
                }
            }, {
                key: "getRowHeight",
                value: function(index) {
                    return this._cachedRowHeights[index];
                }
            }, {
                key: "hasColumnWidth",
                value: function(index) {
                    return this._cachedColumnWidths[index] >= 0;
                }
            }, {
                key: "hasRowHeight",
                value: function(index) {
                    return this._cachedRowHeights[index] >= 0;
                }
            }, {
                key: "setColumnWidth",
                value: function(index, width) {
                    this._cachedColumnWidths[index] = width;
                }
            }, {
                key: "setRowHeight",
                value: function(index, height) {
                    this._cachedRowHeights[index] = height;
                }
            } ]), CellSizeCache;
        }();
        exports["default"] = CellSizeCache;
    }, /* 25 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Collection = exports["default"] = void 0;
        var _Collection2 = __webpack_require__(26), _Collection3 = _interopRequireDefault(_Collection2);
        exports["default"] = _Collection3["default"], exports.Collection = _Collection3["default"];
    }, /* 26 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
            return target;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function defaultCellGroupRenderer(_ref5) {
            var cellRenderer = _ref5.cellRenderer, cellSizeAndPositionGetter = _ref5.cellSizeAndPositionGetter, indices = _ref5.indices, isScrolling = _ref5.isScrolling;
            return indices.map(function(index) {
                var cellMetadata = cellSizeAndPositionGetter({
                    index: index
                }), renderedCell = cellRenderer({
                    index: index,
                    isScrolling: isScrolling
                });
                return null == renderedCell || renderedCell === !1 ? null : _react2["default"].createElement("div", {
                    className: "Collection__cell",
                    key: index,
                    style: {
                        height: cellMetadata.height,
                        left: cellMetadata.x,
                        top: cellMetadata.y,
                        width: cellMetadata.width
                    }
                }, renderedCell);
            }).filter(function(renderedCell) {
                return !!renderedCell;
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _CollectionView = __webpack_require__(27), _CollectionView2 = _interopRequireDefault(_CollectionView), _calculateSizeAndPositionData2 = __webpack_require__(34), _calculateSizeAndPositionData3 = _interopRequireDefault(_calculateSizeAndPositionData2), _getUpdatedOffsetForIndex = __webpack_require__(37), _getUpdatedOffsetForIndex2 = _interopRequireDefault(_getUpdatedOffsetForIndex), _reactAddonsShallowCompare = __webpack_require__(16), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), Collection = function(_Component) {
            function Collection(props, context) {
                _classCallCheck(this, Collection);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Collection).call(this, props, context));
                return _this._cellMetadata = [], _this._lastRenderedCellIndices = [], _this;
            }
            /** See Collection#recomputeCellSizesAndPositions */
            return _inherits(Collection, _Component), _createClass(Collection, [ {
                key: "recomputeCellSizesAndPositions",
                value: function() {
                    this._collectionView.recomputeCellSizesAndPositions();
                }
            }, {
                key: "render",
                value: function() {
                    var _this2 = this, props = _objectWithoutProperties(this.props, []);
                    return _react2["default"].createElement(_CollectionView2["default"], _extends({
                        cellLayoutManager: this,
                        ref: function(_ref) {
                            _this2._collectionView = _ref;
                        }
                    }, props));
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(nextProps, nextState) {
                    return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                }
            }, {
                key: "calculateSizeAndPositionData",
                value: function() {
                    var _props = this.props, cellCount = _props.cellCount, cellSizeAndPositionGetter = _props.cellSizeAndPositionGetter, sectionSize = _props.sectionSize, data = (0, 
                    _calculateSizeAndPositionData3["default"])({
                        cellCount: cellCount,
                        cellSizeAndPositionGetter: cellSizeAndPositionGetter,
                        sectionSize: sectionSize
                    });
                    this._cellMetadata = data.cellMetadata, this._sectionManager = data.sectionManager, 
                    this._height = data.height, this._width = data.width;
                }
            }, {
                key: "getLastRenderedIndices",
                value: function() {
                    return this._lastRenderedCellIndices;
                }
            }, {
                key: "getScrollPositionForCell",
                value: function(_ref2) {
                    var align = _ref2.align, cellIndex = _ref2.cellIndex, height = _ref2.height, scrollLeft = _ref2.scrollLeft, scrollTop = _ref2.scrollTop, width = _ref2.width, cellCount = this.props.cellCount;
                    if (cellIndex >= 0 && cellIndex < cellCount) {
                        var cellMetadata = this._cellMetadata[cellIndex];
                        scrollLeft = (0, _getUpdatedOffsetForIndex2["default"])({
                            align: align,
                            cellOffset: cellMetadata.x,
                            cellSize: cellMetadata.width,
                            containerSize: width,
                            currentOffset: scrollLeft,
                            targetIndex: cellIndex
                        }), scrollTop = (0, _getUpdatedOffsetForIndex2["default"])({
                            align: align,
                            cellOffset: cellMetadata.y,
                            cellSize: cellMetadata.height,
                            containerSize: height,
                            currentOffset: scrollTop,
                            targetIndex: cellIndex
                        });
                    }
                    return {
                        scrollLeft: scrollLeft,
                        scrollTop: scrollTop
                    };
                }
            }, {
                key: "getTotalSize",
                value: function() {
                    return {
                        height: this._height,
                        width: this._width
                    };
                }
            }, {
                key: "cellRenderers",
                value: function(_ref3) {
                    var _this3 = this, height = _ref3.height, isScrolling = _ref3.isScrolling, width = _ref3.width, x = _ref3.x, y = _ref3.y, _props2 = this.props, cellGroupRenderer = _props2.cellGroupRenderer, cellRenderer = _props2.cellRenderer;
                    // Store for later calls to getLastRenderedIndices()
                    return this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
                        height: height,
                        width: width,
                        x: x,
                        y: y
                    }), cellGroupRenderer({
                        cellRenderer: cellRenderer,
                        cellSizeAndPositionGetter: function(_ref4) {
                            var index = _ref4.index;
                            return _this3._sectionManager.getCellMetadata({
                                index: index
                            });
                        },
                        indices: this._lastRenderedCellIndices,
                        isScrolling: isScrolling
                    });
                }
            } ]), Collection;
        }(_react.Component);
        Collection.propTypes = {
            "aria-label": _react.PropTypes.string,
            /**
	   * Number of cells in Collection.
	   */
            cellCount: _react.PropTypes.number.isRequired,
            /**
	   * Responsible for rendering a group of cells given their indices.
	   * Should implement the following interface: ({
	   *   cellSizeAndPositionGetter:Function,
	   *   indices: Array<number>,
	   *   cellRenderer: Function
	   * }): Array<PropTypes.node>
	   */
            cellGroupRenderer: _react.PropTypes.func.isRequired,
            /**
	   * Responsible for rendering a cell given an row and column index.
	   * Should implement the following interface: ({ index: number }): PropTypes.element
	   */
            cellRenderer: _react.PropTypes.func.isRequired,
            /**
	   * Callback responsible for returning size and offset/position information for a given cell (index).
	   * ({ index: number }): { height: number, width: number, x: number, y: number }
	   */
            cellSizeAndPositionGetter: _react.PropTypes.func.isRequired,
            /**
	   * Optionally override the size of the sections a Collection's cells are split into.
	   */
            sectionSize: _react.PropTypes.number
        }, Collection.defaultProps = {
            "aria-label": "grid",
            cellGroupRenderer: defaultCellGroupRenderer
        }, exports["default"] = Collection;
    }, /* 27 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(7), _classnames2 = _interopRequireDefault(_classnames), _createCallbackMemoizer = __webpack_require__(28), _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer), _scrollbarSize = __webpack_require__(29), _scrollbarSize2 = _interopRequireDefault(_scrollbarSize), _raf = __webpack_require__(31), _raf2 = _interopRequireDefault(_raf), _reactAddonsShallowCompare = __webpack_require__(16), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), IS_SCROLLING_TIMEOUT = 150, SCROLL_POSITION_CHANGE_REASONS = {
            OBSERVED: "observed",
            REQUESTED: "requested"
        }, CollectionView = function(_Component) {
            function CollectionView(props, context) {
                _classCallCheck(this, CollectionView);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CollectionView).call(this, props, context));
                // Invokes callbacks only when their values have changed.
                // Bind functions to instance so they don't lose context when passed around.
                return _this.state = {
                    calculateSizeAndPositionDataOnNextUpdate: !1,
                    isScrolling: !1,
                    scrollLeft: 0,
                    scrollTop: 0
                }, _this._onSectionRenderedMemoizer = (0, _createCallbackMemoizer2["default"])(), 
                _this._onScrollMemoizer = (0, _createCallbackMemoizer2["default"])(!1), _this._invokeOnSectionRenderedHelper = _this._invokeOnSectionRenderedHelper.bind(_this), 
                _this._onScroll = _this._onScroll.bind(_this), _this._updateScrollPositionForScrollToCell = _this._updateScrollPositionForScrollToCell.bind(_this), 
                _this;
            }
            /**
	   * Forced recompute of cell sizes and positions.
	   * This function should be called if cell sizes have changed but nothing else has.
	   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
	   */
            return _inherits(CollectionView, _Component), _createClass(CollectionView, [ {
                key: "recomputeCellSizesAndPositions",
                value: function() {
                    this.setState({
                        calculateSizeAndPositionDataOnNextUpdate: !0
                    });
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var _props = this.props, cellLayoutManager = _props.cellLayoutManager, scrollLeft = _props.scrollLeft, scrollToCell = _props.scrollToCell, scrollTop = _props.scrollTop;
                    // If this component was first rendered server-side, scrollbar size will be undefined.
                    // In that event we need to remeasure.
                    this._scrollbarSizeMeasured || (this._scrollbarSize = (0, _scrollbarSize2["default"])(), 
                    this._scrollbarSizeMeasured = !0, this.setState({})), scrollToCell >= 0 ? this._updateScrollPositionForScrollToCell() : (scrollLeft >= 0 || scrollTop >= 0) && this._setScrollPosition({
                        scrollLeft: scrollLeft,
                        scrollTop: scrollTop
                    }), // Update onSectionRendered callback.
                    this._invokeOnSectionRenderedHelper();
                    var _cellLayoutManager$ge = cellLayoutManager.getTotalSize(), totalHeight = _cellLayoutManager$ge.height, totalWidth = _cellLayoutManager$ge.width;
                    // Initialize onScroll callback.
                    this._invokeOnScrollMemoizer({
                        scrollLeft: scrollLeft || 0,
                        scrollTop: scrollTop || 0,
                        totalHeight: totalHeight,
                        totalWidth: totalWidth
                    });
                }
            }, {
                key: "componentDidUpdate",
                value: function(prevProps, prevState) {
                    var _props2 = this.props, height = _props2.height, scrollToCell = _props2.scrollToCell, width = _props2.width, _state = this.state, scrollLeft = _state.scrollLeft, scrollPositionChangeReason = _state.scrollPositionChangeReason, scrollToAlignment = _state.scrollToAlignment, scrollTop = _state.scrollTop;
                    // Make sure requested changes to :scrollLeft or :scrollTop get applied.
                    // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
                    // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
                    // So we only set these when we require an adjustment of the scroll position.
                    // See issue #2 for more information.
                    scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED && (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft && (this._scrollingContainer.scrollLeft = scrollLeft), 
                    scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop && (this._scrollingContainer.scrollTop = scrollTop)), 
                    // Update scroll offsets if the current :scrollToCell values requires it
                    height === prevProps.height && scrollToAlignment === prevProps.scrollToAlignment && scrollToCell === prevProps.scrollToCell && width === prevProps.width || this._updateScrollPositionForScrollToCell(), 
                    // Update onRowsRendered callback if start/stop indices have changed
                    this._invokeOnSectionRenderedHelper();
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    var cellLayoutManager = this.props.cellLayoutManager;
                    cellLayoutManager.calculateSizeAndPositionData(), // If this component is being rendered server-side, getScrollbarSize() will return undefined.
                    // We handle this case in componentDidMount()
                    this._scrollbarSize = (0, _scrollbarSize2["default"])(), void 0 === this._scrollbarSize ? (this._scrollbarSizeMeasured = !1, 
                    this._scrollbarSize = 0) : this._scrollbarSizeMeasured = !0;
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._disablePointerEventsTimeoutId && clearTimeout(this._disablePointerEventsTimeoutId), 
                    this._setNextStateAnimationFrameId && _raf2["default"].cancel(this._setNextStateAnimationFrameId);
                }
            }, {
                key: "componentWillUpdate",
                value: function(nextProps, nextState) {
                    0 !== nextProps.cellCount || 0 === nextState.scrollLeft && 0 === nextState.scrollTop ? nextProps.scrollLeft === this.props.scrollLeft && nextProps.scrollTop === this.props.scrollTop || this._setScrollPosition({
                        scrollLeft: nextProps.scrollLeft,
                        scrollTop: nextProps.scrollTop
                    }) : this._setScrollPosition({
                        scrollLeft: 0,
                        scrollTop: 0
                    }), (nextProps.cellCount !== this.props.cellCount || nextProps.cellLayoutManager !== this.props.cellLayoutManager || nextState.calculateSizeAndPositionDataOnNextUpdate) && nextProps.cellLayoutManager.calculateSizeAndPositionData(), 
                    nextState.calculateSizeAndPositionDataOnNextUpdate && this.setState({
                        calculateSizeAndPositionDataOnNextUpdate: !1
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var _this2 = this, _props3 = this.props, cellCount = _props3.cellCount, cellLayoutManager = _props3.cellLayoutManager, className = _props3.className, height = _props3.height, horizontalOverscanSize = _props3.horizontalOverscanSize, noContentRenderer = _props3.noContentRenderer, style = _props3.style, verticalOverscanSize = _props3.verticalOverscanSize, width = _props3.width, _state2 = this.state, isScrolling = _state2.isScrolling, scrollLeft = _state2.scrollLeft, scrollTop = _state2.scrollTop, _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize(), totalHeight = _cellLayoutManager$ge2.height, totalWidth = _cellLayoutManager$ge2.width, left = Math.max(0, scrollLeft - horizontalOverscanSize), top = Math.max(0, scrollTop - verticalOverscanSize), right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize), bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize), childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
                        height: bottom - top,
                        isScrolling: isScrolling,
                        width: right - left,
                        x: left,
                        y: top
                    }) : [], collectionStyle = {
                        height: height,
                        width: width
                    }, verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0, horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0;
                    return totalWidth + verticalScrollBarSize <= width && (collectionStyle.overflowX = "hidden"), 
                    totalHeight + horizontalScrollBarSize <= height && (collectionStyle.overflowY = "hidden"), 
                    _react2["default"].createElement("div", {
                        ref: function(_ref) {
                            _this2._scrollingContainer = _ref;
                        },
                        "aria-label": this.props["aria-label"],
                        className: (0, _classnames2["default"])("Collection", className),
                        onScroll: this._onScroll,
                        role: "grid",
                        style: _extends({}, collectionStyle, style),
                        tabIndex: 0
                    }, cellCount > 0 && _react2["default"].createElement("div", {
                        className: "Collection__innerScrollContainer",
                        style: {
                            height: totalHeight,
                            maxHeight: totalHeight,
                            maxWidth: totalWidth,
                            pointerEvents: isScrolling ? "none" : "auto",
                            width: totalWidth
                        }
                    }, childrenToDisplay), 0 === cellCount && noContentRenderer());
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(nextProps, nextState) {
                    return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                }
            }, {
                key: "_enablePointerEventsAfterDelay",
                value: function() {
                    var _this3 = this;
                    this._disablePointerEventsTimeoutId && clearTimeout(this._disablePointerEventsTimeoutId), 
                    this._disablePointerEventsTimeoutId = setTimeout(function() {
                        _this3._disablePointerEventsTimeoutId = null, _this3.setState({
                            isScrolling: !1
                        });
                    }, IS_SCROLLING_TIMEOUT);
                }
            }, {
                key: "_invokeOnSectionRenderedHelper",
                value: function() {
                    var _props4 = this.props, cellLayoutManager = _props4.cellLayoutManager, onSectionRendered = _props4.onSectionRendered;
                    this._onSectionRenderedMemoizer({
                        callback: onSectionRendered,
                        indices: {
                            indices: cellLayoutManager.getLastRenderedIndices()
                        }
                    });
                }
            }, {
                key: "_invokeOnScrollMemoizer",
                value: function(_ref2) {
                    var _this4 = this, scrollLeft = _ref2.scrollLeft, scrollTop = _ref2.scrollTop, totalHeight = _ref2.totalHeight, totalWidth = _ref2.totalWidth;
                    this._onScrollMemoizer({
                        callback: function(_ref3) {
                            var scrollLeft = _ref3.scrollLeft, scrollTop = _ref3.scrollTop, _props5 = _this4.props, height = _props5.height, onScroll = _props5.onScroll, width = _props5.width;
                            onScroll({
                                clientHeight: height,
                                clientWidth: width,
                                scrollHeight: totalHeight,
                                scrollLeft: scrollLeft,
                                scrollTop: scrollTop,
                                scrollWidth: totalWidth
                            });
                        },
                        indices: {
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop
                        }
                    });
                }
            }, {
                key: "_setNextState",
                value: function(state) {
                    var _this5 = this;
                    this._setNextStateAnimationFrameId && _raf2["default"].cancel(this._setNextStateAnimationFrameId), 
                    this._setNextStateAnimationFrameId = (0, _raf2["default"])(function() {
                        _this5._setNextStateAnimationFrameId = null, _this5.setState(state);
                    });
                }
            }, {
                key: "_setScrollPosition",
                value: function(_ref4) {
                    var scrollLeft = _ref4.scrollLeft, scrollTop = _ref4.scrollTop, newState = {
                        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
                    };
                    scrollLeft >= 0 && (newState.scrollLeft = scrollLeft), scrollTop >= 0 && (newState.scrollTop = scrollTop), 
                    (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) && this.setState(newState);
                }
            }, {
                key: "_updateScrollPositionForScrollToCell",
                value: function() {
                    var _props6 = this.props, cellLayoutManager = _props6.cellLayoutManager, height = _props6.height, scrollToAlignment = _props6.scrollToAlignment, scrollToCell = _props6.scrollToCell, width = _props6.width, _state3 = this.state, scrollLeft = _state3.scrollLeft, scrollTop = _state3.scrollTop;
                    if (scrollToCell >= 0) {
                        var scrollPosition = cellLayoutManager.getScrollPositionForCell({
                            align: scrollToAlignment,
                            cellIndex: scrollToCell,
                            height: height,
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop,
                            width: width
                        });
                        scrollPosition.scrollLeft === scrollLeft && scrollPosition.scrollTop === scrollTop || this._setScrollPosition(scrollPosition);
                    }
                }
            }, {
                key: "_onScroll",
                value: function(event) {
                    // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
                    // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
                    // See issue #404 for more information.
                    if (event.target === this._scrollingContainer) {
                        // Prevent pointer events from interrupting a smooth scroll
                        this._enablePointerEventsAfterDelay();
                        // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
                        // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
                        // This causes a series of rapid renders that is slow for long lists.
                        // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
                        var _props7 = this.props, cellLayoutManager = _props7.cellLayoutManager, height = _props7.height, width = _props7.width, scrollbarSize = this._scrollbarSize, _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize(), totalHeight = _cellLayoutManager$ge3.height, totalWidth = _cellLayoutManager$ge3.width, scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft)), scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop));
                        // Certain devices (like Apple touchpad) rapid-fire duplicate events.
                        // Don't force a re-render if this is the case.
                        // The mouse may move faster then the animation frame does.
                        // Use requestAnimationFrame to avoid over-updating.
                        if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
                            // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
                            // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
                            // All things considered, this seems to be the best current work around that I'm aware of.
                            // For more information see https://github.com/bvaughn/react-virtualized/pull/124
                            var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED;
                            // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)
                            this.state.isScrolling || this.setState({
                                isScrolling: !0
                            }), this._setNextState({
                                isScrolling: !0,
                                scrollLeft: scrollLeft,
                                scrollPositionChangeReason: scrollPositionChangeReason,
                                scrollTop: scrollTop
                            });
                        }
                        this._invokeOnScrollMemoizer({
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop,
                            totalWidth: totalWidth,
                            totalHeight: totalHeight
                        });
                    }
                }
            } ]), CollectionView;
        }(_react.Component);
        CollectionView.propTypes = {
            "aria-label": _react.PropTypes.string,
            /**
	   * Number of cells in collection.
	   */
            cellCount: _react.PropTypes.number.isRequired,
            /**
	   * Calculates cell sizes and positions and manages rendering the appropriate cells given a specified window.
	   */
            cellLayoutManager: _react.PropTypes.object.isRequired,
            /**
	   * Optional custom CSS class name to attach to root Collection element.
	   */
            className: _react.PropTypes.string,
            /**
	   * Height of Collection; this property determines the number of visible (vs virtualized) rows.
	   */
            height: _react.PropTypes.number.isRequired,
            /**
	   * Enables the `Collection` to horiontally "overscan" its content similar to how `Grid` does.
	   * This can reduce flicker around the edges when a user scrolls quickly.
	   */
            horizontalOverscanSize: _react.PropTypes.number.isRequired,
            /**
	   * Optional renderer to be used in place of rows when either :rowCount or :cellCount is 0.
	   */
            noContentRenderer: _react.PropTypes.func.isRequired,
            /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
	   */
            onScroll: _react.PropTypes.func.isRequired,
            /**
	   * Callback invoked with information about the section of the Collection that was just rendered.
	   * This callback is passed a named :indices parameter which is an Array of the most recently rendered section indices.
	   */
            onSectionRendered: _react.PropTypes.func.isRequired,
            /**
	   * Horizontal offset.
	   */
            scrollLeft: _react.PropTypes.number,
            /**
	   * Controls scroll-to-cell behavior of the Grid.
	   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
	   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
	   */
            scrollToAlignment: _react.PropTypes.oneOf([ "auto", "end", "start", "center" ]).isRequired,
            /**
	   * Cell index to ensure visible (by forcefully scrolling if necessary).
	   */
            scrollToCell: _react.PropTypes.number,
            /**
	   * Vertical offset.
	   */
            scrollTop: _react.PropTypes.number,
            /**
	   * Optional custom inline style to attach to root Collection element.
	   */
            style: _react.PropTypes.object,
            /**
	   * Enables the `Collection` to vertically "overscan" its content similar to how `Grid` does.
	   * This can reduce flicker around the edges when a user scrolls quickly.
	   */
            verticalOverscanSize: _react.PropTypes.number.isRequired,
            /**
	   * Width of Collection; this property determines the number of visible (vs virtualized) columns.
	   */
            width: _react.PropTypes.number.isRequired
        }, CollectionView.defaultProps = {
            "aria-label": "grid",
            horizontalOverscanSize: 0,
            noContentRenderer: function() {
                return null;
            },
            onScroll: function() {
                return null;
            },
            onSectionRendered: function() {
                return null;
            },
            scrollToAlignment: "auto",
            style: {},
            verticalOverscanSize: 0
        }, exports["default"] = CollectionView;
    }, /* 28 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
	 */
        function createCallbackMemoizer() {
            var requireAllKeys = arguments.length <= 0 || void 0 === arguments[0] || arguments[0], cachedIndices = {};
            return function(_ref) {
                var callback = _ref.callback, indices = _ref.indices, keys = Object.keys(indices), allInitialized = !requireAllKeys || keys.every(function(key) {
                    var value = indices[key];
                    return Array.isArray(value) ? value.length > 0 : value >= 0;
                }), indexChanged = keys.length !== Object.keys(cachedIndices).length || keys.some(function(key) {
                    var cachedValue = cachedIndices[key], value = indices[key];
                    return Array.isArray(value) ? cachedValue.join(",") !== value.join(",") : cachedValue !== value;
                });
                cachedIndices = indices, allInitialized && indexChanged && callback(indices);
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = createCallbackMemoizer;
    }, /* 29 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var size, canUseDOM = __webpack_require__(30);
        module.exports = function(recalc) {
            if ((!size || recalc) && canUseDOM) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.position = "absolute", scrollDiv.style.top = "-9999px", scrollDiv.style.width = "50px", 
                scrollDiv.style.height = "50px", scrollDiv.style.overflow = "scroll", document.body.appendChild(scrollDiv), 
                size = scrollDiv.offsetWidth - scrollDiv.clientWidth, document.body.removeChild(scrollDiv);
            }
            return size;
        };
    }, /* 30 */
    /***/
    function(module, exports) {
        "use strict";
        module.exports = !("undefined" == typeof window || !window.document || !window.document.createElement);
    }, /* 31 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(global) {
            for (var now = __webpack_require__(32), root = "undefined" == typeof window ? global : window, vendors = [ "moz", "webkit" ], suffix = "AnimationFrame", raf = root["request" + suffix], caf = root["cancel" + suffix] || root["cancelRequest" + suffix], i = 0; !raf && i < vendors.length; i++) raf = root[vendors[i] + "Request" + suffix], 
            caf = root[vendors[i] + "Cancel" + suffix] || root[vendors[i] + "CancelRequest" + suffix];
            // Some versions of FF have rAF but not cAF
            if (!raf || !caf) {
                var last = 0, id = 0, queue = [], frameDuration = 1e3 / 60;
                raf = function(callback) {
                    if (0 === queue.length) {
                        var _now = now(), next = Math.max(0, frameDuration - (_now - last));
                        last = next + _now, setTimeout(function() {
                            var cp = queue.slice(0);
                            // Clear queue here to prevent
                            // callbacks from appending listeners
                            // to the current frame's queue
                            queue.length = 0;
                            for (var i = 0; i < cp.length; i++) if (!cp[i].cancelled) try {
                                cp[i].callback(last);
                            } catch (e) {
                                setTimeout(function() {
                                    throw e;
                                }, 0);
                            }
                        }, Math.round(next));
                    }
                    return queue.push({
                        handle: ++id,
                        callback: callback,
                        cancelled: !1
                    }), id;
                }, caf = function(handle) {
                    for (var i = 0; i < queue.length; i++) queue[i].handle === handle && (queue[i].cancelled = !0);
                };
            }
            module.exports = function(fn) {
                // Wrap in a new function to prevent
                // `cancel` potentially being assigned
                // to the native rAF function
                return raf.call(root, fn);
            }, module.exports.cancel = function() {
                caf.apply(root, arguments);
            }, module.exports.polyfill = function() {
                root.requestAnimationFrame = raf, root.cancelAnimationFrame = caf;
            };
        }).call(exports, function() {
            return this;
        }());
    }, /* 32 */
    /***/
    function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function(process) {
            // Generated by CoffeeScript 1.7.1
            (function() {
                var getNanoSeconds, hrtime, loadTime;
                "undefined" != typeof performance && null !== performance && performance.now ? module.exports = function() {
                    return performance.now();
                } : "undefined" != typeof process && null !== process && process.hrtime ? (module.exports = function() {
                    return (getNanoSeconds() - loadTime) / 1e6;
                }, hrtime = process.hrtime, getNanoSeconds = function() {
                    var hr;
                    return hr = hrtime(), 1e9 * hr[0] + hr[1];
                }, loadTime = getNanoSeconds()) : Date.now ? (module.exports = function() {
                    return Date.now() - loadTime;
                }, loadTime = Date.now()) : (module.exports = function() {
                    return new Date().getTime() - loadTime;
                }, loadTime = new Date().getTime());
            }).call(this);
        }).call(exports, __webpack_require__(33));
    }, /* 33 */
    /***/
    function(module, exports) {
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
            return setTimeout(fun, 0);
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
            return clearTimeout(marker);
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                    return cachedClearTimeout.call(null, marker);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                    // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                    return cachedClearTimeout.call(this, marker);
                }
            }
        }
        function cleanUpNextTick() {
            draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, 
            queue.length && drainQueue());
        }
        function drainQueue() {
            if (!draining) {
                var timeout = runTimeout(cleanUpNextTick);
                draining = !0;
                for (var len = queue.length; len; ) {
                    for (currentQueue = queue, queue = []; ++queueIndex < len; ) currentQueue && currentQueue[queueIndex].run();
                    queueIndex = -1, len = queue.length;
                }
                currentQueue = null, draining = !1, runClearTimeout(timeout);
            }
        }
        // v8 likes predictible objects
        function Item(fun, array) {
            this.fun = fun, this.array = array;
        }
        function noop() {}
        // shim for using process in browser
        var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
        !function() {
            try {
                cachedSetTimeout = setTimeout;
            } catch (e) {
                cachedSetTimeout = function() {
                    throw new Error("setTimeout is not defined");
                };
            }
            try {
                cachedClearTimeout = clearTimeout;
            } catch (e) {
                cachedClearTimeout = function() {
                    throw new Error("clearTimeout is not defined");
                };
            }
        }();
        var currentQueue, queue = [], draining = !1, queueIndex = -1;
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
            queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
        }, Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], 
        process.version = "", // empty string to avoid regexp issues
        process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, 
        process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, 
        process.emit = noop, process.binding = function(name) {
            throw new Error("process.binding is not supported");
        }, process.cwd = function() {
            return "/";
        }, process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
        }, process.umask = function() {
            return 0;
        };
    }, /* 34 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function calculateSizeAndPositionData(_ref) {
            for (var cellCount = _ref.cellCount, cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter, sectionSize = _ref.sectionSize, cellMetadata = [], sectionManager = new _SectionManager2["default"](sectionSize), height = 0, width = 0, index = 0; index < cellCount; index++) {
                var cellMetadatum = cellSizeAndPositionGetter({
                    index: index
                });
                if (null == cellMetadatum.height || isNaN(cellMetadatum.height) || null == cellMetadatum.width || isNaN(cellMetadatum.width) || null == cellMetadatum.x || isNaN(cellMetadatum.x) || null == cellMetadatum.y || isNaN(cellMetadatum.y)) throw Error("Invalid metadata returned for cell " + index + ":\n        x:" + cellMetadatum.x + ", y:" + cellMetadatum.y + ", width:" + cellMetadatum.width + ", height:" + cellMetadatum.height);
                height = Math.max(height, cellMetadatum.y + cellMetadatum.height), width = Math.max(width, cellMetadatum.x + cellMetadatum.width), 
                cellMetadata[index] = cellMetadatum, sectionManager.registerCell({
                    cellMetadatum: cellMetadatum,
                    index: index
                });
            }
            return {
                cellMetadata: cellMetadata,
                height: height,
                sectionManager: sectionManager,
                width: width
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = calculateSizeAndPositionData;
        var _SectionManager = __webpack_require__(35), _SectionManager2 = _interopRequireDefault(_SectionManager);
    }, /* 35 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _Section = __webpack_require__(36), _Section2 = _interopRequireDefault(_Section), SECTION_SIZE = 100, SectionManager = function() {
            function SectionManager() {
                var sectionSize = arguments.length <= 0 || void 0 === arguments[0] ? SECTION_SIZE : arguments[0];
                _classCallCheck(this, SectionManager), this._sectionSize = sectionSize, this._cellMetadata = [], 
                this._sections = {};
            }
            /**
	   * Gets all cell indices contained in the specified region.
	   * A region may encompass 1 or more Sections.
	   */
            return _createClass(SectionManager, [ {
                key: "getCellIndices",
                value: function(_ref) {
                    var height = _ref.height, width = _ref.width, x = _ref.x, y = _ref.y, indices = {};
                    // Object keys are strings; this function returns numbers
                    return this.getSections({
                        height: height,
                        width: width,
                        x: x,
                        y: y
                    }).forEach(function(section) {
                        return section.getCellIndices().forEach(function(index) {
                            indices[index] = index;
                        });
                    }), Object.keys(indices).map(function(index) {
                        return indices[index];
                    });
                }
            }, {
                key: "getCellMetadata",
                value: function(_ref2) {
                    var index = _ref2.index;
                    return this._cellMetadata[index];
                }
            }, {
                key: "getSections",
                value: function(_ref3) {
                    for (var height = _ref3.height, width = _ref3.width, x = _ref3.x, y = _ref3.y, sectionXStart = Math.floor(x / this._sectionSize), sectionXStop = Math.floor((x + width - 1) / this._sectionSize), sectionYStart = Math.floor(y / this._sectionSize), sectionYStop = Math.floor((y + height - 1) / this._sectionSize), sections = [], sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++) for (var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++) {
                        var key = sectionX + "." + sectionY;
                        this._sections[key] || (this._sections[key] = new _Section2["default"]({
                            height: this._sectionSize,
                            width: this._sectionSize,
                            x: sectionX * this._sectionSize,
                            y: sectionY * this._sectionSize
                        })), sections.push(this._sections[key]);
                    }
                    return sections;
                }
            }, {
                key: "getTotalSectionCount",
                value: function() {
                    return Object.keys(this._sections).length;
                }
            }, {
                key: "toString",
                value: function() {
                    var _this = this;
                    return Object.keys(this._sections).map(function(index) {
                        return _this._sections[index].toString();
                    });
                }
            }, {
                key: "registerCell",
                value: function(_ref4) {
                    var cellMetadatum = _ref4.cellMetadatum, index = _ref4.index;
                    this._cellMetadata[index] = cellMetadatum, this.getSections(cellMetadatum).forEach(function(section) {
                        return section.addCellIndex({
                            index: index
                        });
                    });
                }
            } ]), SectionManager;
        }();
        exports["default"] = SectionManager;
    }, /* 36 */
    /***/
    function(module, exports) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), Section = function() {
            function Section(_ref) {
                var height = _ref.height, width = _ref.width, x = _ref.x, y = _ref.y;
                _classCallCheck(this, Section), this.height = height, this.width = width, this.x = x, 
                this.y = y, this._indexMap = {}, this._indices = [];
            }
            /** Add a cell to this section. */
            return _createClass(Section, [ {
                key: "addCellIndex",
                value: function(_ref2) {
                    var index = _ref2.index;
                    this._indexMap[index] || (this._indexMap[index] = !0, this._indices.push(index));
                }
            }, {
                key: "getCellIndices",
                value: function() {
                    return this._indices;
                }
            }, {
                key: "toString",
                value: function() {
                    return this.x + "," + this.y + " " + this.width + "x" + this.height;
                }
            } ]), Section;
        }();
        /** @rlow */
        exports["default"] = Section;
    }, /* 37 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Determines a new offset that ensures a certain cell is visible, given the current offset.
	 * If the cell is already visible then the current offset will be returned.
	 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
	 *
	 * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
	 * @param cellOffset Offset (x or y) position for cell
	 * @param cellSize Size (width or height) of cell
	 * @param containerSize Total size (width or height) of the container
	 * @param currentOffset Container's current (x or y) offset
	 * @return Offset to use to ensure the specified cell is visible
	 */
        function getUpdatedOffsetForIndex(_ref) {
            var _ref$align = _ref.align, align = void 0 === _ref$align ? "auto" : _ref$align, cellOffset = _ref.cellOffset, cellSize = _ref.cellSize, containerSize = _ref.containerSize, currentOffset = _ref.currentOffset, maxOffset = cellOffset, minOffset = maxOffset - containerSize + cellSize;
            switch (align) {
              case "start":
                return maxOffset;

              case "end":
                return minOffset;

              case "center":
                return maxOffset - (containerSize - cellSize) / 2;

              default:
                return Math.max(minOffset, Math.min(maxOffset, currentOffset));
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = getUpdatedOffsetForIndex;
    }, /* 38 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.ColumnSizer = exports["default"] = void 0;
        var _ColumnSizer2 = __webpack_require__(39), _ColumnSizer3 = _interopRequireDefault(_ColumnSizer2);
        exports["default"] = _ColumnSizer3["default"], exports.ColumnSizer = _ColumnSizer3["default"];
    }, /* 39 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(3), _reactAddonsShallowCompare = __webpack_require__(16), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), _Grid = __webpack_require__(40), _Grid2 = _interopRequireDefault(_Grid), ColumnSizer = function(_Component) {
            function ColumnSizer(props, context) {
                _classCallCheck(this, ColumnSizer);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ColumnSizer).call(this, props, context));
                return _this._registerChild = _this._registerChild.bind(_this), _this;
            }
            return _inherits(ColumnSizer, _Component), _createClass(ColumnSizer, [ {
                key: "componentDidUpdate",
                value: function(prevProps, prevState) {
                    var _props = this.props, columnMaxWidth = _props.columnMaxWidth, columnMinWidth = _props.columnMinWidth, columnCount = _props.columnCount, width = _props.width;
                    columnMaxWidth === prevProps.columnMaxWidth && columnMinWidth === prevProps.columnMinWidth && columnCount === prevProps.columnCount && width === prevProps.width || this._registeredChild && this._registeredChild.recomputeGridSize();
                }
            }, {
                key: "render",
                value: function() {
                    var _props2 = this.props, children = _props2.children, columnMaxWidth = _props2.columnMaxWidth, columnMinWidth = _props2.columnMinWidth, columnCount = _props2.columnCount, width = _props2.width, safeColumnMinWidth = columnMinWidth || 1, safeColumnMaxWidth = columnMaxWidth ? Math.min(columnMaxWidth, width) : width, columnWidth = width / columnCount;
                    columnWidth = Math.max(safeColumnMinWidth, columnWidth), columnWidth = Math.min(safeColumnMaxWidth, columnWidth), 
                    columnWidth = Math.floor(columnWidth);
                    var adjustedWidth = Math.min(width, columnWidth * columnCount);
                    return children({
                        adjustedWidth: adjustedWidth,
                        getColumnWidth: function() {
                            return columnWidth;
                        },
                        registerChild: this._registerChild
                    });
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(nextProps, nextState) {
                    return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                }
            }, {
                key: "_registerChild",
                value: function(child) {
                    if (null !== child && !(child instanceof _Grid2["default"])) throw Error("Unexpected child type registered; only Grid children are supported.");
                    this._registeredChild = child, this._registeredChild && this._registeredChild.recomputeGridSize();
                }
            } ]), ColumnSizer;
        }(_react.Component);
        ColumnSizer.propTypes = {
            /**
	   * Function respondible for rendering a virtualized Grid.
	   * This function should implement the following signature:
	   * ({ adjustedWidth, getColumnWidth, registerChild }) => PropTypes.element
	   *
	   * The specified :getColumnWidth function should be passed to the Grid's :columnWidth property.
	   * The :registerChild should be passed to the Grid's :ref property.
	   * The :adjustedWidth property is optional; it reflects the lesser of the overall width or the width of all columns.
	   */
            children: _react.PropTypes.func.isRequired,
            /** Optional maximum allowed column width */
            columnMaxWidth: _react.PropTypes.number,
            /** Optional minimum allowed column width */
            columnMinWidth: _react.PropTypes.number,
            /** Number of columns in Grid or FlexTable child */
            columnCount: _react.PropTypes.number.isRequired,
            /** Width of Grid or FlexTable child */
            width: _react.PropTypes.number.isRequired
        }, exports["default"] = ColumnSizer;
    }, /* 40 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.defaultCellRangeRenderer = exports.Grid = exports["default"] = void 0;
        var _Grid2 = __webpack_require__(41), _Grid3 = _interopRequireDefault(_Grid2), _defaultCellRangeRenderer2 = __webpack_require__(47), _defaultCellRangeRenderer3 = _interopRequireDefault(_defaultCellRangeRenderer2);
        exports["default"] = _Grid3["default"], exports.Grid = _Grid3["default"], exports.defaultCellRangeRenderer = _defaultCellRangeRenderer3["default"];
    }, /* 41 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(7), _classnames2 = _interopRequireDefault(_classnames), _calculateSizeAndPositionDataAndUpdateScrollOffset = __webpack_require__(42), _calculateSizeAndPositionDataAndUpdateScrollOffset2 = _interopRequireDefault(_calculateSizeAndPositionDataAndUpdateScrollOffset), _ScalingCellSizeAndPositionManager = __webpack_require__(43), _ScalingCellSizeAndPositionManager2 = _interopRequireDefault(_ScalingCellSizeAndPositionManager), _createCallbackMemoizer = __webpack_require__(28), _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer), _getOverscanIndices = __webpack_require__(45), _getOverscanIndices2 = _interopRequireDefault(_getOverscanIndices), _scrollbarSize = __webpack_require__(29), _scrollbarSize2 = _interopRequireDefault(_scrollbarSize), _raf = __webpack_require__(31), _raf2 = _interopRequireDefault(_raf), _reactAddonsShallowCompare = __webpack_require__(16), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), _updateScrollIndexHelper = __webpack_require__(46), _updateScrollIndexHelper2 = _interopRequireDefault(_updateScrollIndexHelper), _defaultCellRangeRenderer = __webpack_require__(47), _defaultCellRangeRenderer2 = _interopRequireDefault(_defaultCellRangeRenderer), IS_SCROLLING_TIMEOUT = 150, SCROLL_POSITION_CHANGE_REASONS = {
            OBSERVED: "observed",
            REQUESTED: "requested"
        }, Grid = function(_Component) {
            function Grid(props, context) {
                _classCallCheck(this, Grid);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).call(this, props, context));
                // Invokes onSectionRendered callback only when start/stop row or column indices change
                // Bind functions to instance so they don't lose context when passed around
                // See defaultCellRangeRenderer() for more information on the usage of this cache
                return _this.state = {
                    isScrolling: !1,
                    scrollLeft: 0,
                    scrollTop: 0
                }, _this._onGridRenderedMemoizer = (0, _createCallbackMemoizer2["default"])(), _this._onScrollMemoizer = (0, 
                _createCallbackMemoizer2["default"])(!1), _this._enablePointerEventsAfterDelayCallback = _this._enablePointerEventsAfterDelayCallback.bind(_this), 
                _this._invokeOnGridRenderedHelper = _this._invokeOnGridRenderedHelper.bind(_this), 
                _this._onScroll = _this._onScroll.bind(_this), _this._setNextStateCallback = _this._setNextStateCallback.bind(_this), 
                _this._updateScrollLeftForScrollToColumn = _this._updateScrollLeftForScrollToColumn.bind(_this), 
                _this._updateScrollTopForScrollToRow = _this._updateScrollTopForScrollToRow.bind(_this), 
                _this._columnWidthGetter = _this._wrapSizeGetter(props.columnWidth), _this._rowHeightGetter = _this._wrapSizeGetter(props.rowHeight), 
                _this._columnSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2["default"]({
                    cellCount: props.columnCount,
                    cellSizeGetter: function(index) {
                        return _this._columnWidthGetter(index);
                    },
                    estimatedCellSize: _this._getEstimatedColumnSize(props)
                }), _this._rowSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2["default"]({
                    cellCount: props.rowCount,
                    cellSizeGetter: function(index) {
                        return _this._rowHeightGetter(index);
                    },
                    estimatedCellSize: _this._getEstimatedRowSize(props)
                }), _this._cellCache = {}, _this;
            }
            /**
	   * Pre-measure all columns and rows in a Grid.
	   * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
	   * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
	   */
            return _inherits(Grid, _Component), _createClass(Grid, [ {
                key: "measureAllCells",
                value: function() {
                    var _props = this.props, columnCount = _props.columnCount, rowCount = _props.rowCount;
                    this._columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1), this._rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
                }
            }, {
                key: "recomputeGridSize",
                value: function() {
                    var _ref = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], _ref$columnIndex = _ref.columnIndex, columnIndex = void 0 === _ref$columnIndex ? 0 : _ref$columnIndex, _ref$rowIndex = _ref.rowIndex, rowIndex = void 0 === _ref$rowIndex ? 0 : _ref$rowIndex;
                    this._columnSizeAndPositionManager.resetCell(columnIndex), this._rowSizeAndPositionManager.resetCell(rowIndex), 
                    this.forceUpdate();
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var _props2 = this.props, scrollLeft = _props2.scrollLeft, scrollToColumn = _props2.scrollToColumn, scrollTop = _props2.scrollTop, scrollToRow = _props2.scrollToRow;
                    // If this component was first rendered server-side, scrollbar size will be undefined.
                    // In that event we need to remeasure.
                    this._scrollbarSizeMeasured || (this._scrollbarSize = (0, _scrollbarSize2["default"])(), 
                    this._scrollbarSizeMeasured = !0, this.setState({})), (scrollLeft >= 0 || scrollTop >= 0) && this._setScrollPosition({
                        scrollLeft: scrollLeft,
                        scrollTop: scrollTop
                    }), (scrollToColumn >= 0 || scrollToRow >= 0) && (this._updateScrollLeftForScrollToColumn(), 
                    this._updateScrollTopForScrollToRow()), // Update onRowsRendered callback
                    this._invokeOnGridRenderedHelper(), // Initialize onScroll callback
                    this._invokeOnScrollMemoizer({
                        scrollLeft: scrollLeft || 0,
                        scrollTop: scrollTop || 0,
                        totalColumnsWidth: this._columnSizeAndPositionManager.getTotalSize(),
                        totalRowsHeight: this._rowSizeAndPositionManager.getTotalSize()
                    });
                }
            }, {
                key: "componentDidUpdate",
                value: function(prevProps, prevState) {
                    var _this2 = this, _props3 = this.props, autoHeight = _props3.autoHeight, columnCount = _props3.columnCount, height = _props3.height, rowCount = _props3.rowCount, scrollToAlignment = _props3.scrollToAlignment, scrollToColumn = _props3.scrollToColumn, scrollToRow = _props3.scrollToRow, width = _props3.width, _state = this.state, scrollLeft = _state.scrollLeft, scrollPositionChangeReason = _state.scrollPositionChangeReason, scrollTop = _state.scrollTop, columnOrRowCountJustIncreasedFromZero = columnCount > 0 && 0 === prevProps.columnCount || rowCount > 0 && 0 === prevProps.rowCount;
                    // Make sure requested changes to :scrollLeft or :scrollTop get applied.
                    // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
                    // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
                    // So we only set these when we require an adjustment of the scroll position.
                    // See issue #2 for more information.
                    scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED && (scrollLeft >= 0 && (scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero) && (this._scrollingContainer.scrollLeft = scrollLeft), 
                    // @TRICKY :autoHeight property instructs Grid to leave :scrollTop management to an external HOC (eg WindowScroller).
                    // In this case we should avoid checking scrollingContainer.scrollTop since it forces layout/flow.
                    !autoHeight && scrollTop >= 0 && (scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero) && (this._scrollingContainer.scrollTop = scrollTop)), 
                    // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
                    // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
                    (0, _updateScrollIndexHelper2["default"])({
                        cellSizeAndPositionManager: this._columnSizeAndPositionManager,
                        previousCellsCount: prevProps.columnCount,
                        previousCellSize: prevProps.columnWidth,
                        previousScrollToAlignment: prevProps.scrollToAlignment,
                        previousScrollToIndex: prevProps.scrollToColumn,
                        previousSize: prevProps.width,
                        scrollOffset: scrollLeft,
                        scrollToAlignment: scrollToAlignment,
                        scrollToIndex: scrollToColumn,
                        size: width,
                        updateScrollIndexCallback: function(scrollToColumn) {
                            return _this2._updateScrollLeftForScrollToColumn(_extends({}, _this2.props, {
                                scrollToColumn: scrollToColumn
                            }));
                        }
                    }), (0, _updateScrollIndexHelper2["default"])({
                        cellSizeAndPositionManager: this._rowSizeAndPositionManager,
                        previousCellsCount: prevProps.rowCount,
                        previousCellSize: prevProps.rowHeight,
                        previousScrollToAlignment: prevProps.scrollToAlignment,
                        previousScrollToIndex: prevProps.scrollToRow,
                        previousSize: prevProps.height,
                        scrollOffset: scrollTop,
                        scrollToAlignment: scrollToAlignment,
                        scrollToIndex: scrollToRow,
                        size: height,
                        updateScrollIndexCallback: function(scrollToRow) {
                            return _this2._updateScrollTopForScrollToRow(_extends({}, _this2.props, {
                                scrollToRow: scrollToRow
                            }));
                        }
                    }), // Update onRowsRendered callback if start/stop indices have changed
                    this._invokeOnGridRenderedHelper();
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    // If this component is being rendered server-side, getScrollbarSize() will return undefined.
                    // We handle this case in componentDidMount()
                    this._scrollbarSize = (0, _scrollbarSize2["default"])(), void 0 === this._scrollbarSize ? (this._scrollbarSizeMeasured = !1, 
                    this._scrollbarSize = 0) : this._scrollbarSizeMeasured = !0, this._calculateChildrenToRender();
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._disablePointerEventsTimeoutId && clearTimeout(this._disablePointerEventsTimeoutId), 
                    this._setNextStateAnimationFrameId && _raf2["default"].cancel(this._setNextStateAnimationFrameId);
                }
            }, {
                key: "componentWillUpdate",
                value: function(nextProps, nextState) {
                    var _this3 = this;
                    0 === nextProps.columnCount && 0 !== nextState.scrollLeft || 0 === nextProps.rowCount && 0 !== nextState.scrollTop ? this._setScrollPosition({
                        scrollLeft: 0,
                        scrollTop: 0
                    }) : nextProps.scrollLeft === this.props.scrollLeft && nextProps.scrollTop === this.props.scrollTop || this._setScrollPosition({
                        scrollLeft: nextProps.scrollLeft,
                        scrollTop: nextProps.scrollTop
                    }), this._columnWidthGetter = this._wrapSizeGetter(nextProps.columnWidth), this._rowHeightGetter = this._wrapSizeGetter(nextProps.rowHeight), 
                    this._columnSizeAndPositionManager.configure({
                        cellCount: nextProps.columnCount,
                        estimatedCellSize: this._getEstimatedColumnSize(nextProps)
                    }), this._rowSizeAndPositionManager.configure({
                        cellCount: nextProps.rowCount,
                        estimatedCellSize: this._getEstimatedRowSize(nextProps)
                    }), // Update scroll offsets if the size or number of cells have changed, invalidating the previous value
                    (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2["default"])({
                        cellCount: this.props.columnCount,
                        cellSize: this.props.columnWidth,
                        computeMetadataCallback: function() {
                            return _this3._columnSizeAndPositionManager.resetCell(0);
                        },
                        computeMetadataCallbackProps: nextProps,
                        nextCellsCount: nextProps.columnCount,
                        nextCellSize: nextProps.columnWidth,
                        nextScrollToIndex: nextProps.scrollToColumn,
                        scrollToIndex: this.props.scrollToColumn,
                        updateScrollOffsetForScrollToIndex: function() {
                            return _this3._updateScrollLeftForScrollToColumn(nextProps, nextState);
                        }
                    }), (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2["default"])({
                        cellCount: this.props.rowCount,
                        cellSize: this.props.rowHeight,
                        computeMetadataCallback: function() {
                            return _this3._rowSizeAndPositionManager.resetCell(0);
                        },
                        computeMetadataCallbackProps: nextProps,
                        nextCellsCount: nextProps.rowCount,
                        nextCellSize: nextProps.rowHeight,
                        nextScrollToIndex: nextProps.scrollToRow,
                        scrollToIndex: this.props.scrollToRow,
                        updateScrollOffsetForScrollToIndex: function() {
                            return _this3._updateScrollTopForScrollToRow(nextProps, nextState);
                        }
                    }), this._calculateChildrenToRender(nextProps, nextState);
                }
            }, {
                key: "render",
                value: function() {
                    var _this4 = this, _props4 = this.props, autoContainerWidth = _props4.autoContainerWidth, autoHeight = _props4.autoHeight, className = _props4.className, height = _props4.height, noContentRenderer = _props4.noContentRenderer, style = _props4.style, tabIndex = _props4.tabIndex, width = _props4.width, isScrolling = this.state.isScrolling, gridStyle = {
                        height: autoHeight ? "auto" : height,
                        width: width
                    }, totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize(), totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize(), verticalScrollBarSize = totalRowsHeight > height ? this._scrollbarSize : 0, horizontalScrollBarSize = totalColumnsWidth > width ? this._scrollbarSize : 0;
                    // Also explicitly init styles to 'auto' if scrollbars are required.
                    // This works around an obscure edge case where external CSS styles have not yet been loaded,
                    // But an initial scroll index of offset is set as an external prop.
                    // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
                    // This was originally reported via clauderic/react-infinite-calendar/issues/23
                    gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? "hidden" : "auto", 
                    gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? "hidden" : "auto";
                    var childrenToDisplay = this._childrenToDisplay, showNoContentRenderer = 0 === childrenToDisplay.length && height > 0 && width > 0;
                    return _react2["default"].createElement("div", {
                        ref: function(_ref2) {
                            _this4._scrollingContainer = _ref2;
                        },
                        "aria-label": this.props["aria-label"],
                        className: (0, _classnames2["default"])("Grid", className),
                        onScroll: this._onScroll,
                        role: "grid",
                        style: _extends({}, gridStyle, style),
                        tabIndex: tabIndex
                    }, childrenToDisplay.length > 0 && _react2["default"].createElement("div", {
                        className: "Grid__innerScrollContainer",
                        style: {
                            width: autoContainerWidth ? "auto" : totalColumnsWidth,
                            height: totalRowsHeight,
                            maxWidth: totalColumnsWidth,
                            maxHeight: totalRowsHeight,
                            pointerEvents: isScrolling ? "none" : "auto"
                        }
                    }, childrenToDisplay), showNoContentRenderer && noContentRenderer());
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(nextProps, nextState) {
                    return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                }
            }, {
                key: "_calculateChildrenToRender",
                value: function() {
                    var props = arguments.length <= 0 || void 0 === arguments[0] ? this.props : arguments[0], state = arguments.length <= 1 || void 0 === arguments[1] ? this.state : arguments[1], cellClassName = props.cellClassName, cellRenderer = props.cellRenderer, cellRangeRenderer = props.cellRangeRenderer, cellStyle = props.cellStyle, columnCount = props.columnCount, height = props.height, overscanColumnCount = props.overscanColumnCount, overscanRowCount = props.overscanRowCount, rowCount = props.rowCount, width = props.width, isScrolling = state.isScrolling, scrollLeft = state.scrollLeft, scrollTop = state.scrollTop;
                    // Render only enough columns and rows to cover the visible area of the grid.
                    if (this._childrenToDisplay = [], height > 0 && width > 0) {
                        var visibleColumnIndices = this._columnSizeAndPositionManager.getVisibleCellRange({
                            containerSize: width,
                            offset: scrollLeft
                        }), visibleRowIndices = this._rowSizeAndPositionManager.getVisibleCellRange({
                            containerSize: height,
                            offset: scrollTop
                        }), horizontalOffsetAdjustment = this._columnSizeAndPositionManager.getOffsetAdjustment({
                            containerSize: width,
                            offset: scrollLeft
                        }), verticalOffsetAdjustment = this._rowSizeAndPositionManager.getOffsetAdjustment({
                            containerSize: height,
                            offset: scrollTop
                        });
                        // Store for _invokeOnGridRenderedHelper()
                        this._renderedColumnStartIndex = visibleColumnIndices.start, this._renderedColumnStopIndex = visibleColumnIndices.stop, 
                        this._renderedRowStartIndex = visibleRowIndices.start, this._renderedRowStopIndex = visibleRowIndices.stop;
                        var overscanColumnIndices = (0, _getOverscanIndices2["default"])({
                            cellCount: columnCount,
                            overscanCellsCount: overscanColumnCount,
                            startIndex: this._renderedColumnStartIndex,
                            stopIndex: this._renderedColumnStopIndex
                        }), overscanRowIndices = (0, _getOverscanIndices2["default"])({
                            cellCount: rowCount,
                            overscanCellsCount: overscanRowCount,
                            startIndex: this._renderedRowStartIndex,
                            stopIndex: this._renderedRowStopIndex
                        });
                        // Store for _invokeOnGridRenderedHelper()
                        this._columnStartIndex = overscanColumnIndices.overscanStartIndex, this._columnStopIndex = overscanColumnIndices.overscanStopIndex, 
                        this._rowStartIndex = overscanRowIndices.overscanStartIndex, this._rowStopIndex = overscanRowIndices.overscanStopIndex, 
                        this._childrenToDisplay = cellRangeRenderer({
                            cellCache: this._cellCache,
                            cellClassName: this._wrapCellClassNameGetter(cellClassName),
                            cellRenderer: cellRenderer,
                            cellStyle: this._wrapCellStyleGetter(cellStyle),
                            columnSizeAndPositionManager: this._columnSizeAndPositionManager,
                            columnStartIndex: this._columnStartIndex,
                            columnStopIndex: this._columnStopIndex,
                            horizontalOffsetAdjustment: horizontalOffsetAdjustment,
                            isScrolling: isScrolling,
                            rowSizeAndPositionManager: this._rowSizeAndPositionManager,
                            rowStartIndex: this._rowStartIndex,
                            rowStopIndex: this._rowStopIndex,
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop,
                            verticalOffsetAdjustment: verticalOffsetAdjustment
                        });
                    }
                }
            }, {
                key: "_enablePointerEventsAfterDelay",
                value: function() {
                    this._disablePointerEventsTimeoutId && clearTimeout(this._disablePointerEventsTimeoutId), 
                    this._disablePointerEventsTimeoutId = setTimeout(this._enablePointerEventsAfterDelayCallback, IS_SCROLLING_TIMEOUT);
                }
            }, {
                key: "_enablePointerEventsAfterDelayCallback",
                value: function() {
                    this._disablePointerEventsTimeoutId = null, // Throw away cell cache once scrolling is complete
                    this._cellCache = {}, this.setState({
                        isScrolling: !1
                    });
                }
            }, {
                key: "_getEstimatedColumnSize",
                value: function(props) {
                    return "number" == typeof props.columnWidth ? props.columnWidth : props.estimatedColumnSize;
                }
            }, {
                key: "_getEstimatedRowSize",
                value: function(props) {
                    return "number" == typeof props.rowHeight ? props.rowHeight : props.estimatedRowSize;
                }
            }, {
                key: "_invokeOnGridRenderedHelper",
                value: function() {
                    var onSectionRendered = this.props.onSectionRendered;
                    this._onGridRenderedMemoizer({
                        callback: onSectionRendered,
                        indices: {
                            columnOverscanStartIndex: this._columnStartIndex,
                            columnOverscanStopIndex: this._columnStopIndex,
                            columnStartIndex: this._renderedColumnStartIndex,
                            columnStopIndex: this._renderedColumnStopIndex,
                            rowOverscanStartIndex: this._rowStartIndex,
                            rowOverscanStopIndex: this._rowStopIndex,
                            rowStartIndex: this._renderedRowStartIndex,
                            rowStopIndex: this._renderedRowStopIndex
                        }
                    });
                }
            }, {
                key: "_invokeOnScrollMemoizer",
                value: function(_ref3) {
                    var _this5 = this, scrollLeft = _ref3.scrollLeft, scrollTop = _ref3.scrollTop, totalColumnsWidth = _ref3.totalColumnsWidth, totalRowsHeight = _ref3.totalRowsHeight;
                    this._onScrollMemoizer({
                        callback: function(_ref4) {
                            var scrollLeft = _ref4.scrollLeft, scrollTop = _ref4.scrollTop, _props5 = _this5.props, height = _props5.height, onScroll = _props5.onScroll, width = _props5.width;
                            onScroll({
                                clientHeight: height,
                                clientWidth: width,
                                scrollHeight: totalRowsHeight,
                                scrollLeft: scrollLeft,
                                scrollTop: scrollTop,
                                scrollWidth: totalColumnsWidth
                            });
                        },
                        indices: {
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop
                        }
                    });
                }
            }, {
                key: "_setNextState",
                value: function(state) {
                    this._nextState = state, this._setNextStateAnimationFrameId || (this._setNextStateAnimationFrameId = (0, 
                    _raf2["default"])(this._setNextStateCallback));
                }
            }, {
                key: "_setNextStateCallback",
                value: function() {
                    var state = this._nextState;
                    this._setNextStateAnimationFrameId = null, this._nextState = null, this.setState(state);
                }
            }, {
                key: "_setScrollPosition",
                value: function(_ref5) {
                    var scrollLeft = _ref5.scrollLeft, scrollTop = _ref5.scrollTop, newState = {
                        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
                    };
                    scrollLeft >= 0 && (newState.scrollLeft = scrollLeft), scrollTop >= 0 && (newState.scrollTop = scrollTop), 
                    (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) && this.setState(newState);
                }
            }, {
                key: "_wrapCellClassNameGetter",
                value: function(className) {
                    return this._wrapPropertyGetter(className);
                }
            }, {
                key: "_wrapCellStyleGetter",
                value: function(style) {
                    return this._wrapPropertyGetter(style);
                }
            }, {
                key: "_wrapPropertyGetter",
                value: function(value) {
                    return value instanceof Function ? value : function() {
                        return value;
                    };
                }
            }, {
                key: "_wrapSizeGetter",
                value: function(size) {
                    return this._wrapPropertyGetter(size);
                }
            }, {
                key: "_updateScrollLeftForScrollToColumn",
                value: function() {
                    var props = arguments.length <= 0 || void 0 === arguments[0] ? this.props : arguments[0], state = arguments.length <= 1 || void 0 === arguments[1] ? this.state : arguments[1], columnCount = props.columnCount, scrollToAlignment = props.scrollToAlignment, scrollToColumn = props.scrollToColumn, width = props.width, scrollLeft = state.scrollLeft;
                    if (scrollToColumn >= 0 && columnCount > 0) {
                        var targetIndex = Math.max(0, Math.min(columnCount - 1, scrollToColumn)), calculatedScrollLeft = this._columnSizeAndPositionManager.getUpdatedOffsetForIndex({
                            align: scrollToAlignment,
                            containerSize: width,
                            currentOffset: scrollLeft,
                            targetIndex: targetIndex
                        });
                        scrollLeft !== calculatedScrollLeft && this._setScrollPosition({
                            scrollLeft: calculatedScrollLeft
                        });
                    }
                }
            }, {
                key: "_updateScrollTopForScrollToRow",
                value: function() {
                    var props = arguments.length <= 0 || void 0 === arguments[0] ? this.props : arguments[0], state = arguments.length <= 1 || void 0 === arguments[1] ? this.state : arguments[1], height = props.height, rowCount = props.rowCount, scrollToAlignment = props.scrollToAlignment, scrollToRow = props.scrollToRow, scrollTop = state.scrollTop;
                    if (scrollToRow >= 0 && rowCount > 0) {
                        var targetIndex = Math.max(0, Math.min(rowCount - 1, scrollToRow)), calculatedScrollTop = this._rowSizeAndPositionManager.getUpdatedOffsetForIndex({
                            align: scrollToAlignment,
                            containerSize: height,
                            currentOffset: scrollTop,
                            targetIndex: targetIndex
                        });
                        scrollTop !== calculatedScrollTop && this._setScrollPosition({
                            scrollTop: calculatedScrollTop
                        });
                    }
                }
            }, {
                key: "_onScroll",
                value: function(event) {
                    // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
                    // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
                    // See issue #404 for more information.
                    if (event.target === this._scrollingContainer) {
                        // Prevent pointer events from interrupting a smooth scroll
                        this._enablePointerEventsAfterDelay();
                        // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
                        // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
                        // This causes a series of rapid renders that is slow for long lists.
                        // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
                        var _props6 = this.props, height = _props6.height, width = _props6.width, scrollbarSize = this._scrollbarSize, totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize(), totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize(), scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), event.target.scrollLeft), scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), event.target.scrollTop);
                        // Certain devices (like Apple touchpad) rapid-fire duplicate events.
                        // Don't force a re-render if this is the case.
                        // The mouse may move faster then the animation frame does.
                        // Use requestAnimationFrame to avoid over-updating.
                        if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
                            // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
                            // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
                            // All things considered, this seems to be the best current work around that I'm aware of.
                            // For more information see https://github.com/bvaughn/react-virtualized/pull/124
                            var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED;
                            this.state.isScrolling || this.setState({
                                isScrolling: !0
                            }), this._setNextState({
                                isScrolling: !0,
                                scrollLeft: scrollLeft,
                                scrollPositionChangeReason: scrollPositionChangeReason,
                                scrollTop: scrollTop
                            });
                        }
                        this._invokeOnScrollMemoizer({
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop,
                            totalColumnsWidth: totalColumnsWidth,
                            totalRowsHeight: totalRowsHeight
                        });
                    }
                }
            } ]), Grid;
        }(_react.Component);
        Grid.propTypes = {
            "aria-label": _react.PropTypes.string,
            /**
	   * Set the width of the inner scrollable container to 'auto'.
	   * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
	   */
            autoContainerWidth: _react.PropTypes.bool,
            /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
            autoHeight: _react.PropTypes.bool,
            /** Optional custom CSS class for individual cells */
            cellClassName: _react.PropTypes.oneOfType([ _react.PropTypes.string, _react.PropTypes.func ]),
            /** Optional custom styles for individual cells */
            cellStyle: _react.PropTypes.oneOfType([ _react.PropTypes.object, _react.PropTypes.func ]),
            /**
	   * Responsible for rendering a cell given an row and column index.
	   * Should implement the following interface: ({ columnIndex: number, rowIndex: number }): PropTypes.node
	   */
            cellRenderer: _react.PropTypes.func.isRequired,
            /**
	   * Responsible for rendering a group of cells given their index ranges.
	   * Should implement the following interface: ({
	   *   cellCache: Map,
	   *   cellRenderer: Function,
	   *   columnSizeAndPositionManager: CellSizeAndPositionManager,
	   *   columnStartIndex: number,
	   *   columnStopIndex: number,
	   *   isScrolling: boolean,
	   *   rowSizeAndPositionManager: CellSizeAndPositionManager,
	   *   rowStartIndex: number,
	   *   rowStopIndex: number,
	   *   scrollLeft: number,
	   *   scrollTop: number
	   * }): Array<PropTypes.node>
	   */
            cellRangeRenderer: _react.PropTypes.func.isRequired,
            /**
	   * Optional custom CSS class name to attach to root Grid element.
	   */
            className: _react.PropTypes.string,
            /**
	   * Number of columns in grid.
	   */
            columnCount: _react.PropTypes.number.isRequired,
            /**
	   * Either a fixed column width (number) or a function that returns the width of a column given its index.
	   * Should implement the following interface: (index: number): number
	   */
            columnWidth: _react.PropTypes.oneOfType([ _react.PropTypes.number, _react.PropTypes.func ]).isRequired,
            /**
	   * Used to estimate the total width of a Grid before all of its columns have actually been measured.
	   * The estimated total width is adjusted as columns are rendered.
	   */
            estimatedColumnSize: _react.PropTypes.number.isRequired,
            /**
	   * Used to estimate the total height of a Grid before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
            estimatedRowSize: _react.PropTypes.number.isRequired,
            /**
	   * Height of Grid; this property determines the number of visible (vs virtualized) rows.
	   */
            height: _react.PropTypes.number.isRequired,
            /**
	   * Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.
	   */
            noContentRenderer: _react.PropTypes.func.isRequired,
            /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
	   */
            onScroll: _react.PropTypes.func.isRequired,
            /**
	   * Callback invoked with information about the section of the Grid that was just rendered.
	   * ({ columnStartIndex, columnStopIndex, rowStartIndex, rowStopIndex }): void
	   */
            onSectionRendered: _react.PropTypes.func.isRequired,
            /**
	   * Number of columns to render before/after the visible section of the grid.
	   * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
	   */
            overscanColumnCount: _react.PropTypes.number.isRequired,
            /**
	   * Number of rows to render above/below the visible section of the grid.
	   * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
	   */
            overscanRowCount: _react.PropTypes.number.isRequired,
            /**
	   * Either a fixed row height (number) or a function that returns the height of a row given its index.
	   * Should implement the following interface: ({ index: number }): number
	   */
            rowHeight: _react.PropTypes.oneOfType([ _react.PropTypes.number, _react.PropTypes.func ]).isRequired,
            /**
	   * Number of rows in grid.
	   */
            rowCount: _react.PropTypes.number.isRequired,
            /** Horizontal offset. */
            scrollLeft: _react.PropTypes.number,
            /**
	   * Controls scroll-to-cell behavior of the Grid.
	   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
	   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
	   */
            scrollToAlignment: _react.PropTypes.oneOf([ "auto", "end", "start", "center" ]).isRequired,
            /**
	   * Column index to ensure visible (by forcefully scrolling if necessary)
	   */
            scrollToColumn: _react.PropTypes.number,
            /** Vertical offset. */
            scrollTop: _react.PropTypes.number,
            /**
	   * Row index to ensure visible (by forcefully scrolling if necessary)
	   */
            scrollToRow: _react.PropTypes.number,
            /** Optional inline style */
            style: _react.PropTypes.object,
            /** Tab index for focus */
            tabIndex: _react.PropTypes.number,
            /**
	   * Width of Grid; this property determines the number of visible (vs virtualized) columns.
	   */
            width: _react.PropTypes.number.isRequired
        }, Grid.defaultProps = {
            "aria-label": "grid",
            cellStyle: {},
            cellRangeRenderer: _defaultCellRangeRenderer2["default"],
            estimatedColumnSize: 100,
            estimatedRowSize: 30,
            noContentRenderer: function() {
                return null;
            },
            onScroll: function() {
                return null;
            },
            onSectionRendered: function() {
                return null;
            },
            overscanColumnCount: 0,
            overscanRowCount: 10,
            scrollToAlignment: "auto",
            style: {},
            tabIndex: 0
        }, exports["default"] = Grid;
    }, /* 42 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Helper method that determines when to recalculate row or column metadata.
	 *
	 * @param cellCount Number of rows or columns in the current axis
	 * @param cellsSize Width or height of cells for the current axis
	 * @param computeMetadataCallback Method to invoke if cell metadata should be recalculated
	 * @param computeMetadataCallbackProps Parameters to pass to :computeMetadataCallback
	 * @param nextCellsCount Newly updated number of rows or columns in the current axis
	 * @param nextCellsSize Newly updated width or height of cells for the current axis
	 * @param nextScrollToIndex Newly updated scroll-to-index
	 * @param scrollToIndex Scroll-to-index
	 * @param updateScrollOffsetForScrollToIndex Callback to invoke if the scroll position should be recalculated
	 */
        function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
            var cellCount = _ref.cellCount, cellSize = _ref.cellSize, computeMetadataCallback = _ref.computeMetadataCallback, computeMetadataCallbackProps = _ref.computeMetadataCallbackProps, nextCellsCount = _ref.nextCellsCount, nextCellSize = _ref.nextCellSize, nextScrollToIndex = _ref.nextScrollToIndex, scrollToIndex = _ref.scrollToIndex, updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;
            // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
            // In that event users should use the manual recompute methods to inform of changes.
            cellCount === nextCellsCount && ("number" != typeof cellSize && "number" != typeof nextCellSize || cellSize === nextCellSize) || (computeMetadataCallback(computeMetadataCallbackProps), 
            // Updated cell metadata may have hidden the previous scrolled-to item.
            // In this case we should also update the scrollTop to ensure it stays visible.
            scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex && updateScrollOffsetForScrollToIndex());
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = calculateSizeAndPositionDataAndUpdateScrollOffset;
    }, /* 43 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) keys.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(obj, i) && (target[i] = obj[i]);
            return target;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.DEFAULT_MAX_SCROLL_SIZE = void 0;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _CellSizeAndPositionManager = __webpack_require__(44), _CellSizeAndPositionManager2 = _interopRequireDefault(_CellSizeAndPositionManager), DEFAULT_MAX_SCROLL_SIZE = exports.DEFAULT_MAX_SCROLL_SIZE = 1e7, ScalingCellSizeAndPositionManager = function() {
            function ScalingCellSizeAndPositionManager(_ref) {
                var _ref$maxScrollSize = _ref.maxScrollSize, maxScrollSize = void 0 === _ref$maxScrollSize ? DEFAULT_MAX_SCROLL_SIZE : _ref$maxScrollSize, params = _objectWithoutProperties(_ref, [ "maxScrollSize" ]);
                _classCallCheck(this, ScalingCellSizeAndPositionManager), // Favor composition over inheritance to simplify IE10 support
                this._cellSizeAndPositionManager = new _CellSizeAndPositionManager2["default"](params), 
                this._maxScrollSize = maxScrollSize;
            }
            return _createClass(ScalingCellSizeAndPositionManager, [ {
                key: "configure",
                value: function(params) {
                    this._cellSizeAndPositionManager.configure(params);
                }
            }, {
                key: "getCellCount",
                value: function() {
                    return this._cellSizeAndPositionManager.getCellCount();
                }
            }, {
                key: "getEstimatedCellSize",
                value: function() {
                    return this._cellSizeAndPositionManager.getEstimatedCellSize();
                }
            }, {
                key: "getLastMeasuredIndex",
                value: function() {
                    return this._cellSizeAndPositionManager.getLastMeasuredIndex();
                }
            }, {
                key: "getOffsetAdjustment",
                value: function(_ref2) {
                    var containerSize = _ref2.containerSize, offset = _ref2.offset, totalSize = this._cellSizeAndPositionManager.getTotalSize(), safeTotalSize = this.getTotalSize(), offsetPercentage = this._getOffsetPercentage({
                        containerSize: containerSize,
                        offset: offset,
                        totalSize: safeTotalSize
                    });
                    return Math.round(offsetPercentage * (safeTotalSize - totalSize));
                }
            }, {
                key: "getSizeAndPositionOfCell",
                value: function(index) {
                    return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
                }
            }, {
                key: "getSizeAndPositionOfLastMeasuredCell",
                value: function() {
                    return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
                }
            }, {
                key: "getTotalSize",
                value: function() {
                    return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
                }
            }, {
                key: "getUpdatedOffsetForIndex",
                value: function(_ref3) {
                    var _ref3$align = _ref3.align, align = void 0 === _ref3$align ? "auto" : _ref3$align, containerSize = _ref3.containerSize, currentOffset = _ref3.currentOffset, // safe
                    targetIndex = _ref3.targetIndex, totalSize = _ref3.totalSize;
                    currentOffset = this._safeOffsetToOffset({
                        containerSize: containerSize,
                        offset: currentOffset
                    });
                    var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
                        align: align,
                        containerSize: containerSize,
                        currentOffset: currentOffset,
                        targetIndex: targetIndex,
                        totalSize: totalSize
                    });
                    return this._offsetToSafeOffset({
                        containerSize: containerSize,
                        offset: offset
                    });
                }
            }, {
                key: "getVisibleCellRange",
                value: function(_ref4) {
                    var containerSize = _ref4.containerSize, offset = _ref4.offset;
                    return offset = this._safeOffsetToOffset({
                        containerSize: containerSize,
                        offset: offset
                    }), this._cellSizeAndPositionManager.getVisibleCellRange({
                        containerSize: containerSize,
                        offset: offset
                    });
                }
            }, {
                key: "resetCell",
                value: function(index) {
                    this._cellSizeAndPositionManager.resetCell(index);
                }
            }, {
                key: "_getOffsetPercentage",
                value: function(_ref5) {
                    var containerSize = _ref5.containerSize, offset = _ref5.offset, // safe
                    totalSize = _ref5.totalSize;
                    return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
                }
            }, {
                key: "_offsetToSafeOffset",
                value: function(_ref6) {
                    var containerSize = _ref6.containerSize, offset = _ref6.offset, totalSize = this._cellSizeAndPositionManager.getTotalSize(), safeTotalSize = this.getTotalSize();
                    if (totalSize === safeTotalSize) return offset;
                    var offsetPercentage = this._getOffsetPercentage({
                        containerSize: containerSize,
                        offset: offset,
                        totalSize: totalSize
                    });
                    return Math.round(offsetPercentage * (safeTotalSize - containerSize));
                }
            }, {
                key: "_safeOffsetToOffset",
                value: function(_ref7) {
                    var containerSize = _ref7.containerSize, offset = _ref7.offset, totalSize = this._cellSizeAndPositionManager.getTotalSize(), safeTotalSize = this.getTotalSize();
                    if (totalSize === safeTotalSize) return offset;
                    var offsetPercentage = this._getOffsetPercentage({
                        containerSize: containerSize,
                        offset: offset,
                        totalSize: safeTotalSize
                    });
                    return Math.round(offsetPercentage * (totalSize - containerSize));
                }
            } ]), ScalingCellSizeAndPositionManager;
        }();
        exports["default"] = ScalingCellSizeAndPositionManager;
    }, /* 44 */
    /***/
    function(module, exports) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), CellSizeAndPositionManager = function() {
            function CellSizeAndPositionManager(_ref) {
                var cellCount = _ref.cellCount, cellSizeGetter = _ref.cellSizeGetter, estimatedCellSize = _ref.estimatedCellSize;
                _classCallCheck(this, CellSizeAndPositionManager), this._cellSizeGetter = cellSizeGetter, 
                this._cellCount = cellCount, this._estimatedCellSize = estimatedCellSize, // Cache of size and position data for cells, mapped by cell index.
                // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
                this._cellSizeAndPositionData = {}, // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
                this._lastMeasuredIndex = -1;
            }
            return _createClass(CellSizeAndPositionManager, [ {
                key: "configure",
                value: function(_ref2) {
                    var cellCount = _ref2.cellCount, estimatedCellSize = _ref2.estimatedCellSize;
                    this._cellCount = cellCount, this._estimatedCellSize = estimatedCellSize;
                }
            }, {
                key: "getCellCount",
                value: function() {
                    return this._cellCount;
                }
            }, {
                key: "getEstimatedCellSize",
                value: function() {
                    return this._estimatedCellSize;
                }
            }, {
                key: "getLastMeasuredIndex",
                value: function() {
                    return this._lastMeasuredIndex;
                }
            }, {
                key: "getSizeAndPositionOfCell",
                value: function(index) {
                    if (index < 0 || index >= this._cellCount) throw Error("Requested index " + index + " is outside of range 0.." + this._cellCount);
                    if (index > this._lastMeasuredIndex) {
                        for (var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell(), _offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size, i = this._lastMeasuredIndex + 1; i <= index; i++) {
                            var _size = this._cellSizeGetter({
                                index: i
                            });
                            if (null == _size || isNaN(_size)) throw Error("Invalid size returned for cell " + i + " of value " + _size);
                            this._cellSizeAndPositionData[i] = {
                                offset: _offset,
                                size: _size
                            }, _offset += _size;
                        }
                        this._lastMeasuredIndex = index;
                    }
                    return this._cellSizeAndPositionData[index];
                }
            }, {
                key: "getSizeAndPositionOfLastMeasuredCell",
                value: function() {
                    return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
                        offset: 0,
                        size: 0
                    };
                }
            }, {
                key: "getTotalSize",
                value: function() {
                    var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
                    return lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size + (this._cellCount - this._lastMeasuredIndex - 1) * this._estimatedCellSize;
                }
            }, {
                key: "getUpdatedOffsetForIndex",
                value: function(_ref3) {
                    var _ref3$align = _ref3.align, align = void 0 === _ref3$align ? "auto" : _ref3$align, containerSize = _ref3.containerSize, currentOffset = _ref3.currentOffset, targetIndex = _ref3.targetIndex, datum = this.getSizeAndPositionOfCell(targetIndex), maxOffset = datum.offset, minOffset = maxOffset - containerSize + datum.size, idealOffset = void 0;
                    switch (align) {
                      case "start":
                        idealOffset = maxOffset;
                        break;

                      case "end":
                        idealOffset = minOffset;
                        break;

                      case "center":
                        idealOffset = maxOffset - (containerSize - datum.size) / 2;
                        break;

                      default:
                        idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
                    }
                    var totalSize = this.getTotalSize();
                    return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
                }
            }, {
                key: "getVisibleCellRange",
                value: function(_ref4) {
                    var containerSize = _ref4.containerSize, offset = _ref4.offset, totalSize = this.getTotalSize();
                    if (0 === totalSize) return {};
                    var maxOffset = offset + containerSize, start = this._findNearestCell(offset), datum = this.getSizeAndPositionOfCell(start);
                    offset = datum.offset + datum.size;
                    for (var stop = start; offset < maxOffset && stop < this._cellCount - 1; ) stop++, 
                    offset += this.getSizeAndPositionOfCell(stop).size;
                    return {
                        start: start,
                        stop: stop
                    };
                }
            }, {
                key: "resetCell",
                value: function(index) {
                    this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
                }
            }, {
                key: "_binarySearch",
                value: function(_ref5) {
                    for (var high = _ref5.high, low = _ref5.low, offset = _ref5.offset, middle = void 0, currentOffset = void 0; low <= high; ) {
                        if (middle = low + Math.floor((high - low) / 2), currentOffset = this.getSizeAndPositionOfCell(middle).offset, 
                        currentOffset === offset) return middle;
                        currentOffset < offset ? low = middle + 1 : currentOffset > offset && (high = middle - 1);
                    }
                    if (low > 0) return low - 1;
                }
            }, {
                key: "_exponentialSearch",
                value: function(_ref6) {
                    for (var index = _ref6.index, offset = _ref6.offset, interval = 1; index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset; ) index += interval, 
                    interval *= 2;
                    return this._binarySearch({
                        high: Math.min(index, this._cellCount - 1),
                        low: Math.floor(index / 2),
                        offset: offset
                    });
                }
            }, {
                key: "_findNearestCell",
                value: function(offset) {
                    if (isNaN(offset)) throw Error("Invalid offset " + offset + " specified");
                    // Our search algorithms find the nearest match at or below the specified offset.
                    // So make sure the offset is at least 0 or no match will be found.
                    offset = Math.max(0, offset);
                    var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell(), lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);
                    return lastMeasuredCellSizeAndPosition.offset >= offset ? this._binarySearch({
                        high: lastMeasuredIndex,
                        low: 0,
                        offset: offset
                    }) : this._exponentialSearch({
                        index: lastMeasuredIndex,
                        offset: offset
                    });
                }
            } ]), CellSizeAndPositionManager;
        }();
        exports["default"] = CellSizeAndPositionManager;
    }, /* 45 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Calculates the number of cells to overscan before and after a specified range.
	 * This function ensures that overscanning doesn't exceed the available cells.
	 *
	 * @param cellCount Number of rows or columns in the current axis
	 * @param overscanCellsCount Maximum number of cells to over-render in either direction
	 * @param startIndex Begin of range of visible cells
	 * @param stopIndex End of range of visible cells
	 */
        function getOverscanIndices(_ref) {
            var cellCount = _ref.cellCount, overscanCellsCount = _ref.overscanCellsCount, startIndex = _ref.startIndex, stopIndex = _ref.stopIndex;
            return {
                overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
                overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = getOverscanIndices;
    }, /* 46 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
	 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
	 *
	 * @param cellsSize Width or height of cells for the current axis
	 * @param cellSizeAndPositionManager Manages size and position metadata of cells
	 * @param previousCellsCount Previous number of rows or columns
	 * @param previousCellsSize Previous width or height of cells
	 * @param previousScrollToIndex Previous scroll-to-index
	 * @param previousSize Previous width or height of the virtualized container
	 * @param scrollOffset Current scrollLeft or scrollTop
	 * @param scrollToIndex Scroll-to-index
	 * @param size Width or height of the virtualized container
	 * @param updateScrollIndexCallback Callback to invoke with an scroll-to-index value
	 */
        function updateScrollIndexHelper(_ref) {
            var cellSize = _ref.cellSize, cellSizeAndPositionManager = _ref.cellSizeAndPositionManager, previousCellsCount = _ref.previousCellsCount, previousCellSize = _ref.previousCellSize, previousScrollToAlignment = _ref.previousScrollToAlignment, previousScrollToIndex = _ref.previousScrollToIndex, previousSize = _ref.previousSize, scrollOffset = _ref.scrollOffset, scrollToAlignment = _ref.scrollToAlignment, scrollToIndex = _ref.scrollToIndex, size = _ref.size, updateScrollIndexCallback = _ref.updateScrollIndexCallback, cellCount = cellSizeAndPositionManager.getCellCount(), hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount, sizeHasChanged = size !== previousSize || !previousCellSize || "number" == typeof cellSize && cellSize !== previousCellSize;
            // If we have a new scroll target OR if height/row-height has changed,
            // We should ensure that the scroll target is visible.
            if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) updateScrollIndexCallback(scrollToIndex); else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
                scrollToIndex = cellCount - 1;
                var calculatedScrollOffset = cellSizeAndPositionManager.getUpdatedOffsetForIndex({
                    containerSize: size,
                    currentOffset: scrollOffset,
                    targetIndex: scrollToIndex
                });
                // Only adjust the scroll position if we've scrolled below the last set of rows.
                calculatedScrollOffset < scrollOffset && updateScrollIndexCallback(cellCount - 1);
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = updateScrollIndexHelper;
    }, /* 47 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        /**
	 * Default implementation of cellRangeRenderer used by Grid.
	 * This renderer supports cell-caching while the user is scrolling.
	 */
        function defaultCellRangeRenderer(_ref) {
            for (var cellCache = _ref.cellCache, cellClassName = _ref.cellClassName, cellRenderer = _ref.cellRenderer, cellStyle = _ref.cellStyle, columnSizeAndPositionManager = _ref.columnSizeAndPositionManager, columnStartIndex = _ref.columnStartIndex, columnStopIndex = _ref.columnStopIndex, horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment, isScrolling = _ref.isScrolling, rowSizeAndPositionManager = _ref.rowSizeAndPositionManager, rowStartIndex = _ref.rowStartIndex, rowStopIndex = _ref.rowStopIndex, verticalOffsetAdjustment = (_ref.scrollLeft, 
            _ref.scrollTop, _ref.verticalOffsetAdjustment), renderedCells = [], rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) for (var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex), columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
                var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex), key = rowIndex + "-" + columnIndex, cellStyleObject = cellStyle({
                    rowIndex: rowIndex,
                    columnIndex: columnIndex
                }), renderedCell = void 0;
                if (// Avoid re-creating cells while scrolling.
                // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
                // If a scroll is in progress- cache and reuse cells.
                // This cache will be thrown away once scrolling complets.
                isScrolling ? (cellCache[key] || (cellCache[key] = cellRenderer({
                    columnIndex: columnIndex,
                    isScrolling: isScrolling,
                    rowIndex: rowIndex
                })), renderedCell = cellCache[key]) : renderedCell = cellRenderer({
                    columnIndex: columnIndex,
                    isScrolling: isScrolling,
                    rowIndex: rowIndex
                }), null != renderedCell && renderedCell !== !1) {
                    var className = cellClassName({
                        columnIndex: columnIndex,
                        rowIndex: rowIndex
                    }), child = _react2["default"].createElement("div", {
                        key: key,
                        className: (0, _classnames2["default"])("Grid__cell", className),
                        style: _extends({
                            height: rowDatum.size,
                            left: columnDatum.offset + horizontalOffsetAdjustment,
                            top: rowDatum.offset + verticalOffsetAdjustment,
                            width: columnDatum.size
                        }, cellStyleObject)
                    }, renderedCell);
                    renderedCells.push(child);
                }
            }
            return renderedCells;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        };
        exports["default"] = defaultCellRangeRenderer;
        var _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(7), _classnames2 = _interopRequireDefault(_classnames);
    }, /* 48 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.SortIndicator = exports.SortDirection = exports.FlexColumn = exports.FlexTable = exports.defaultRowRenderer = exports.defaultHeaderRenderer = exports.defaultCellRenderer = exports.defaultCellDataGetter = exports["default"] = void 0;
        var _FlexTable2 = __webpack_require__(49), _FlexTable3 = _interopRequireDefault(_FlexTable2), _defaultCellDataGetter2 = __webpack_require__(55), _defaultCellDataGetter3 = _interopRequireDefault(_defaultCellDataGetter2), _defaultCellRenderer2 = __webpack_require__(54), _defaultCellRenderer3 = _interopRequireDefault(_defaultCellRenderer2), _defaultHeaderRenderer2 = __webpack_require__(51), _defaultHeaderRenderer3 = _interopRequireDefault(_defaultHeaderRenderer2), _defaultRowRenderer2 = __webpack_require__(56), _defaultRowRenderer3 = _interopRequireDefault(_defaultRowRenderer2), _FlexColumn2 = __webpack_require__(50), _FlexColumn3 = _interopRequireDefault(_FlexColumn2), _SortDirection2 = __webpack_require__(53), _SortDirection3 = _interopRequireDefault(_SortDirection2), _SortIndicator2 = __webpack_require__(52), _SortIndicator3 = _interopRequireDefault(_SortIndicator2);
        exports["default"] = _FlexTable3["default"], exports.defaultCellDataGetter = _defaultCellDataGetter3["default"], 
        exports.defaultCellRenderer = _defaultCellRenderer3["default"], exports.defaultHeaderRenderer = _defaultHeaderRenderer3["default"], 
        exports.defaultRowRenderer = _defaultRowRenderer3["default"], exports.FlexTable = _FlexTable3["default"], 
        exports.FlexColumn = _FlexColumn3["default"], exports.SortDirection = _SortDirection3["default"], 
        exports.SortIndicator = _SortIndicator3["default"];
    }, /* 49 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _classnames = __webpack_require__(7), _classnames2 = _interopRequireDefault(_classnames), _FlexColumn = __webpack_require__(50), _FlexColumn2 = _interopRequireDefault(_FlexColumn), _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _reactDom = __webpack_require__(5), _reactAddonsShallowCompare = __webpack_require__(16), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), _Grid = __webpack_require__(40), _Grid2 = _interopRequireDefault(_Grid), _defaultRowRenderer = __webpack_require__(56), _defaultRowRenderer2 = _interopRequireDefault(_defaultRowRenderer), _SortDirection = __webpack_require__(53), _SortDirection2 = _interopRequireDefault(_SortDirection), FlexTable = function(_Component) {
            function FlexTable(props) {
                _classCallCheck(this, FlexTable);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FlexTable).call(this, props));
                return _this.state = {
                    scrollbarWidth: 0
                }, _this._cellClassName = _this._cellClassName.bind(_this), _this._cellStyle = _this._cellStyle.bind(_this), 
                _this._createColumn = _this._createColumn.bind(_this), _this._createRow = _this._createRow.bind(_this), 
                _this._onScroll = _this._onScroll.bind(_this), _this._onSectionRendered = _this._onSectionRendered.bind(_this), 
                _this;
            }
            return _inherits(FlexTable, _Component), _createClass(FlexTable, [ {
                key: "forceUpdateGrid",
                value: function() {
                    this.Grid.forceUpdate();
                }
            }, {
                key: "measureAllRows",
                value: function() {
                    this.Grid.measureAllCells();
                }
            }, {
                key: "recomputeRowHeights",
                value: function() {
                    var index = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                    this.Grid.recomputeGridSize({
                        rowIndex: index
                    }), this.forceUpdateGrid();
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this._setScrollbarWidth();
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this._setScrollbarWidth();
                }
            }, {
                key: "render",
                value: function() {
                    var _this2 = this, _props = this.props, children = _props.children, className = _props.className, disableHeader = _props.disableHeader, gridClassName = _props.gridClassName, gridStyle = _props.gridStyle, headerHeight = _props.headerHeight, height = _props.height, noRowsRenderer = _props.noRowsRenderer, rowClassName = _props.rowClassName, rowStyle = _props.rowStyle, scrollToIndex = _props.scrollToIndex, style = _props.style, width = _props.width, scrollbarWidth = this.state.scrollbarWidth, availableRowsHeight = height - headerHeight, rowClass = rowClassName instanceof Function ? rowClassName({
                        index: -1
                    }) : rowClassName, rowStyleObject = rowStyle instanceof Function ? rowStyle({
                        index: -1
                    }) : rowStyle;
                    // Note that we specify :numChildren, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
                    // This is done because Grid is a pure component and won't update unless its properties or state has changed.
                    // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.
                    // Precompute and cache column styles before rendering rows and columns to speed things up
                    return this._cachedColumnStyles = [], _react2["default"].Children.toArray(children).forEach(function(column, index) {
                        _this2._cachedColumnStyles[index] = _this2._getFlexStyleForColumn(column, column.props.style);
                    }), _react2["default"].createElement("div", {
                        className: (0, _classnames2["default"])("FlexTable", className),
                        style: style
                    }, !disableHeader && _react2["default"].createElement("div", {
                        className: (0, _classnames2["default"])("FlexTable__headerRow", rowClass),
                        style: _extends({}, rowStyleObject, {
                            height: headerHeight,
                            paddingRight: scrollbarWidth,
                            width: width
                        })
                    }, this._getRenderedHeaderRow()), _react2["default"].createElement(_Grid2["default"], _extends({}, this.props, {
                        autoContainerWidth: !0,
                        className: (0, _classnames2["default"])("FlexTable__Grid", gridClassName),
                        cellClassName: this._cellClassName,
                        cellRenderer: this._createRow,
                        cellStyle: this._cellStyle,
                        columnWidth: width,
                        columnCount: 1,
                        height: availableRowsHeight,
                        noContentRenderer: noRowsRenderer,
                        onScroll: this._onScroll,
                        onSectionRendered: this._onSectionRendered,
                        ref: function(_ref) {
                            _this2.Grid = _ref;
                        },
                        scrollbarWidth: scrollbarWidth,
                        scrollToRow: scrollToIndex,
                        style: gridStyle
                    })));
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(nextProps, nextState) {
                    return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                }
            }, {
                key: "_cellClassName",
                value: function(_ref2) {
                    var rowIndex = _ref2.rowIndex, rowWrapperClassName = this.props.rowWrapperClassName;
                    return rowWrapperClassName instanceof Function ? rowWrapperClassName({
                        index: rowIndex - 1
                    }) : rowWrapperClassName;
                }
            }, {
                key: "_cellStyle",
                value: function(_ref3) {
                    var rowIndex = _ref3.rowIndex, rowWrapperStyle = this.props.rowWrapperStyle;
                    return rowWrapperStyle instanceof Function ? rowWrapperStyle({
                        index: rowIndex - 1
                    }) : rowWrapperStyle;
                }
            }, {
                key: "_createColumn",
                value: function(_ref4) {
                    var column = _ref4.column, columnIndex = _ref4.columnIndex, isScrolling = _ref4.isScrolling, rowData = _ref4.rowData, rowIndex = _ref4.rowIndex, _column$props = column.props, cellDataGetter = _column$props.cellDataGetter, cellRenderer = _column$props.cellRenderer, className = _column$props.className, columnData = _column$props.columnData, dataKey = _column$props.dataKey, cellData = cellDataGetter({
                        columnData: columnData,
                        dataKey: dataKey,
                        rowData: rowData
                    }), renderedCell = cellRenderer({
                        cellData: cellData,
                        columnData: columnData,
                        dataKey: dataKey,
                        isScrolling: isScrolling,
                        rowData: rowData,
                        rowIndex: rowIndex
                    }), style = this._cachedColumnStyles[columnIndex], title = "string" == typeof renderedCell ? renderedCell : null;
                    return _react2["default"].createElement("div", {
                        key: "Row" + rowIndex + "-Col" + columnIndex,
                        className: (0, _classnames2["default"])("FlexTable__rowColumn", className),
                        style: style,
                        title: title
                    }, renderedCell);
                }
            }, {
                key: "_createHeader",
                value: function(_ref5) {
                    var column = _ref5.column, index = _ref5.index, _props2 = this.props, headerClassName = _props2.headerClassName, headerStyle = _props2.headerStyle, onHeaderClick = _props2.onHeaderClick, sort = _props2.sort, sortBy = _props2.sortBy, sortDirection = _props2.sortDirection, _column$props2 = column.props, dataKey = _column$props2.dataKey, disableSort = _column$props2.disableSort, headerRenderer = _column$props2.headerRenderer, label = _column$props2.label, columnData = _column$props2.columnData, sortEnabled = !disableSort && sort, classNames = (0, 
                    _classnames2["default"])("FlexTable__headerColumn", headerClassName, column.props.headerClassName, {
                        FlexTable__sortableHeaderColumn: sortEnabled
                    }), style = this._getFlexStyleForColumn(column, headerStyle), renderedHeader = headerRenderer({
                        columnData: columnData,
                        dataKey: dataKey,
                        disableSort: disableSort,
                        label: label,
                        sortBy: sortBy,
                        sortDirection: sortDirection
                    }), a11yProps = {};
                    return (sortEnabled || onHeaderClick) && !function() {
                        // If this is a sortable header, clicking it should update the table data's sorting.
                        var newSortDirection = sortBy !== dataKey || sortDirection === _SortDirection2["default"].DESC ? _SortDirection2["default"].ASC : _SortDirection2["default"].DESC, onClick = function() {
                            sortEnabled && sort({
                                sortBy: dataKey,
                                sortDirection: newSortDirection
                            }), onHeaderClick && onHeaderClick({
                                columnData: columnData,
                                dataKey: dataKey
                            });
                        }, onKeyDown = function(event) {
                            "Enter" !== event.key && " " !== event.key || onClick();
                        };
                        a11yProps["aria-label"] = column.props["aria-label"] || label || dataKey, a11yProps.role = "rowheader", 
                        a11yProps.tabIndex = 0, a11yProps.onClick = onClick, a11yProps.onKeyDown = onKeyDown;
                    }(), _react2["default"].createElement("div", _extends({}, a11yProps, {
                        key: "Header-Col" + index,
                        className: classNames,
                        style: style
                    }), renderedHeader);
                }
            }, {
                key: "_createRow",
                value: function(_ref6) {
                    var _this3 = this, index = _ref6.rowIndex, isScrolling = _ref6.isScrolling, _props3 = this.props, children = _props3.children, onRowClick = _props3.onRowClick, onRowDoubleClick = _props3.onRowDoubleClick, onRowMouseOver = _props3.onRowMouseOver, onRowMouseOut = _props3.onRowMouseOut, rowClassName = _props3.rowClassName, rowGetter = _props3.rowGetter, rowRenderer = _props3.rowRenderer, rowStyle = _props3.rowStyle, scrollbarWidth = this.state.scrollbarWidth, rowClass = rowClassName instanceof Function ? rowClassName({
                        index: index
                    }) : rowClassName, rowStyleObject = rowStyle instanceof Function ? rowStyle({
                        index: index
                    }) : rowStyle, rowData = rowGetter({
                        index: index
                    }), columns = _react2["default"].Children.toArray(children).map(function(column, columnIndex) {
                        return _this3._createColumn({
                            column: column,
                            columnIndex: columnIndex,
                            isScrolling: isScrolling,
                            rowData: rowData,
                            rowIndex: index,
                            scrollbarWidth: scrollbarWidth
                        });
                    }), className = (0, _classnames2["default"])("FlexTable__row", rowClass), style = _extends({}, rowStyleObject, {
                        height: this._getRowHeight(index),
                        paddingRight: scrollbarWidth
                    });
                    return rowRenderer({
                        className: className,
                        columns: columns,
                        index: index,
                        isScrolling: isScrolling,
                        onRowClick: onRowClick,
                        onRowDoubleClick: onRowDoubleClick,
                        onRowMouseOver: onRowMouseOver,
                        onRowMouseOut: onRowMouseOut,
                        rowData: rowData,
                        style: style
                    });
                }
            }, {
                key: "_getFlexStyleForColumn",
                value: function(column) {
                    var customStyle = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], flexValue = column.props.flexGrow + " " + column.props.flexShrink + " " + column.props.width + "px", style = _extends({}, customStyle, {
                        flex: flexValue,
                        msFlex: flexValue,
                        WebkitFlex: flexValue
                    });
                    return column.props.maxWidth && (style.maxWidth = column.props.maxWidth), column.props.minWidth && (style.minWidth = column.props.minWidth), 
                    style;
                }
            }, {
                key: "_getRenderedHeaderRow",
                value: function() {
                    var _this4 = this, _props4 = this.props, children = _props4.children, disableHeader = _props4.disableHeader, items = disableHeader ? [] : _react2["default"].Children.toArray(children);
                    return items.map(function(column, index) {
                        return _this4._createHeader({
                            column: column,
                            index: index
                        });
                    });
                }
            }, {
                key: "_getRowHeight",
                value: function(rowIndex) {
                    var rowHeight = this.props.rowHeight;
                    return rowHeight instanceof Function ? rowHeight({
                        index: rowIndex
                    }) : rowHeight;
                }
            }, {
                key: "_onScroll",
                value: function(_ref7) {
                    var clientHeight = _ref7.clientHeight, scrollHeight = _ref7.scrollHeight, scrollTop = _ref7.scrollTop, onScroll = this.props.onScroll;
                    onScroll({
                        clientHeight: clientHeight,
                        scrollHeight: scrollHeight,
                        scrollTop: scrollTop
                    });
                }
            }, {
                key: "_onSectionRendered",
                value: function(_ref8) {
                    var rowOverscanStartIndex = _ref8.rowOverscanStartIndex, rowOverscanStopIndex = _ref8.rowOverscanStopIndex, rowStartIndex = _ref8.rowStartIndex, rowStopIndex = _ref8.rowStopIndex, onRowsRendered = this.props.onRowsRendered;
                    onRowsRendered({
                        overscanStartIndex: rowOverscanStartIndex,
                        overscanStopIndex: rowOverscanStopIndex,
                        startIndex: rowStartIndex,
                        stopIndex: rowStopIndex
                    });
                }
            }, {
                key: "_setScrollbarWidth",
                value: function() {
                    var Grid = (0, _reactDom.findDOMNode)(this.Grid), clientWidth = Grid.clientWidth || 0, offsetWidth = Grid.offsetWidth || 0, scrollbarWidth = offsetWidth - clientWidth;
                    this.setState({
                        scrollbarWidth: scrollbarWidth
                    });
                }
            } ]), FlexTable;
        }(_react.Component);
        FlexTable.propTypes = {
            "aria-label": _react.PropTypes.string,
            /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
            autoHeight: _react.PropTypes.bool,
            /** One or more FlexColumns describing the data displayed in this row */
            children: function children(props, propName, componentName) {
                for (var children = _react2["default"].Children.toArray(props.children), i = 0; i < children.length; i++) if (children[i].type !== _FlexColumn2["default"]) return new Error("FlexTable only accepts children of type FlexColumn");
            },
            /** Optional CSS class name */
            className: _react.PropTypes.string,
            /** Disable rendering the header at all */
            disableHeader: _react.PropTypes.bool,
            /**
	   * Used to estimate the total height of a FlexTable before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
            estimatedRowSize: _react.PropTypes.number.isRequired,
            /** Optional custom CSS class name to attach to inner Grid element. */
            gridClassName: _react.PropTypes.string,
            /** Optional inline style to attach to inner Grid element. */
            gridStyle: _react.PropTypes.object,
            /** Optional CSS class to apply to all column headers */
            headerClassName: _react.PropTypes.string,
            /** Fixed height of header row */
            headerHeight: _react.PropTypes.number.isRequired,
            /** Fixed/available height for out DOM element */
            height: _react.PropTypes.number.isRequired,
            /** Optional renderer to be used in place of table body rows when rowCount is 0 */
            noRowsRenderer: _react.PropTypes.func,
            /**
	  * Optional callback when a column's header is clicked.
	  * ({ columnData: any, dataKey: string }): void
	  */
            onHeaderClick: _react.PropTypes.func,
            /** Optional custom inline style to attach to table header columns. */
            headerStyle: _react.PropTypes.object,
            /**
	   * Callback invoked when a user clicks on a table row.
	   * ({ index: number }): void
	   */
            onRowClick: _react.PropTypes.func,
            /**
	   * Callback invoked when a user double-clicks on a table row.
	   * ({ index: number }): void
	   */
            onRowDoubleClick: _react.PropTypes.func,
            /**
	   * Callback invoked when the mouse leaves a table row.
	   * ({ index: number }): void
	   */
            onRowMouseOut: _react.PropTypes.func,
            /**
	   * Callback invoked when a user moves the mouse over a table row.
	   * ({ index: number }): void
	   */
            onRowMouseOver: _react.PropTypes.func,
            /**
	   * Callback invoked with information about the slice of rows that were just rendered.
	   * ({ startIndex, stopIndex }): void
	   */
            onRowsRendered: _react.PropTypes.func,
            /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, scrollHeight, scrollTop }): void
	   */
            onScroll: _react.PropTypes.func.isRequired,
            /**
	   * Number of rows to render above/below the visible bounds of the list.
	   * These rows can help for smoother scrolling on touch devices.
	   */
            overscanRowCount: _react.PropTypes.number.isRequired,
            /**
	   * Optional CSS class to apply to all table rows (including the header row).
	   * This property can be a CSS class name (string) or a function that returns a class name.
	   * If a function is provided its signature should be: ({ index: number }): string
	   */
            rowClassName: _react.PropTypes.oneOfType([ _react.PropTypes.string, _react.PropTypes.func ]),
            /**
	   * Callback responsible for returning a data row given an index.
	   * ({ index: number }): any
	   */
            rowGetter: _react.PropTypes.func.isRequired,
            /**
	   * Either a fixed row height (number) or a function that returns the height of a row given its index.
	   * ({ index: number }): number
	   */
            rowHeight: _react.PropTypes.oneOfType([ _react.PropTypes.number, _react.PropTypes.func ]).isRequired,
            /** Number of rows in table. */
            rowCount: _react.PropTypes.number.isRequired,
            /**
	   * Responsible for rendering a table row given an array of columns:
	   * Should implement the following interface: ({
	   *   className: string,
	   *   columns: Array,
	   *   index: number,
	   *   isScrolling: boolean,
	   *   onRowClick: ?Function,
	   *   onRowDoubleClick: ?Function,
	   *   onRowMouseOver: ?Function,
	   *   onRowMouseOut: ?Function,
	   *   rowData: any,
	   *   style: any
	   * }): PropTypes.node
	   */
            rowRenderer: _react.PropTypes.func,
            /** Optional custom inline style to attach to table rows. */
            rowStyle: _react.PropTypes.oneOfType([ _react.PropTypes.object, _react.PropTypes.func ]).isRequired,
            /** Optional custom CSS class for individual rows */
            rowWrapperClassName: _react.PropTypes.oneOfType([ _react.PropTypes.string, _react.PropTypes.func ]),
            /** Optional custom CSS class for individual rows */
            rowWrapperStyle: _react.PropTypes.oneOfType([ _react.PropTypes.object, _react.PropTypes.func ]),
            /** See Grid#scrollToAlignment */
            scrollToAlignment: _react.PropTypes.oneOf([ "auto", "end", "start", "center" ]).isRequired,
            /** Row index to ensure visible (by forcefully scrolling if necessary) */
            scrollToIndex: _react.PropTypes.number,
            /** Vertical offset. */
            scrollTop: _react.PropTypes.number,
            /**
	   * Sort function to be called if a sortable header is clicked.
	   * ({ sortBy: string, sortDirection: SortDirection }): void
	   */
            sort: _react.PropTypes.func,
            /** FlexTable data is currently sorted by this :dataKey (if it is sorted at all) */
            sortBy: _react.PropTypes.string,
            /** FlexTable data is currently sorted in this direction (if it is sorted at all) */
            sortDirection: _react.PropTypes.oneOf([ _SortDirection2["default"].ASC, _SortDirection2["default"].DESC ]),
            /** Optional inline style */
            style: _react.PropTypes.object,
            /** Tab index for focus */
            tabIndex: _react.PropTypes.number,
            /** Width of list */
            width: _react.PropTypes.number.isRequired
        }, FlexTable.defaultProps = {
            disableHeader: !1,
            estimatedRowSize: 30,
            headerHeight: 0,
            headerStyle: {},
            noRowsRenderer: function() {
                return null;
            },
            onRowsRendered: function() {
                return null;
            },
            onScroll: function() {
                return null;
            },
            overscanRowCount: 10,
            rowRenderer: _defaultRowRenderer2["default"],
            rowStyle: {},
            scrollToAlignment: "auto",
            style: {}
        }, exports["default"] = FlexTable;
    }, /* 50 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _react = __webpack_require__(3), _defaultHeaderRenderer = __webpack_require__(51), _defaultHeaderRenderer2 = _interopRequireDefault(_defaultHeaderRenderer), _defaultCellRenderer = __webpack_require__(54), _defaultCellRenderer2 = _interopRequireDefault(_defaultCellRenderer), _defaultCellDataGetter = __webpack_require__(55), _defaultCellDataGetter2 = _interopRequireDefault(_defaultCellDataGetter), Column = function(_Component) {
            function Column() {
                return _classCallCheck(this, Column), _possibleConstructorReturn(this, Object.getPrototypeOf(Column).apply(this, arguments));
            }
            return _inherits(Column, _Component), Column;
        }(_react.Component);
        Column.defaultProps = {
            cellDataGetter: _defaultCellDataGetter2["default"],
            cellRenderer: _defaultCellRenderer2["default"],
            cellStyle: {},
            flexGrow: 0,
            flexShrink: 1,
            headerRenderer: _defaultHeaderRenderer2["default"]
        }, Column.propTypes = {
            /** Optional aria-label value to set on the column header */
            "aria-label": _react.PropTypes.string,
            /**
	   * Callback responsible for returning a cell's data, given its :dataKey
	   * ({ columnData: any, dataKey: string, rowData: any }): any
	   */
            cellDataGetter: _react.PropTypes.func,
            /**
	   * Callback responsible for rendering a cell's contents.
	   * ({ cellData: any, columnData: any, dataKey: string, rowData: any, rowIndex: number }): node
	   */
            cellRenderer: _react.PropTypes.func,
            /** Optional CSS class to apply to cell */
            className: _react.PropTypes.string,
            /** Optional additional data passed to this column's :cellDataGetter */
            columnData: _react.PropTypes.object,
            /** Uniquely identifies the row-data attribute correspnding to this cell */
            dataKey: _react.PropTypes.any.isRequired,
            /** If sort is enabled for the table at large, disable it for this column */
            disableSort: _react.PropTypes.bool,
            /** Flex grow style; defaults to 0 */
            flexGrow: _react.PropTypes.number,
            /** Flex shrink style; defaults to 1 */
            flexShrink: _react.PropTypes.number,
            /** Optional CSS class to apply to this column's header */
            headerClassName: _react.PropTypes.string,
            /**
	   * Optional callback responsible for rendering a column header contents.
	   * ({ columnData: object, dataKey: string, disableSort: boolean, label: string, sortBy: string, sortDirection: string }): PropTypes.node
	   */
            headerRenderer: _react.PropTypes.func.isRequired,
            /** Header label for this column */
            label: _react.PropTypes.string,
            /** Maximum width of column; this property will only be used if :flexGrow is > 0. */
            maxWidth: _react.PropTypes.number,
            /** Minimum width of column. */
            minWidth: _react.PropTypes.number,
            /** Optional inline style to apply to cell */
            style: _react.PropTypes.object,
            /** Flex basis (width) for this column; This value can grow or shrink based on :flexGrow and :flexShrink properties. */
            width: _react.PropTypes.number.isRequired
        }, exports["default"] = Column;
    }, /* 51 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        /**
	 * Default table header renderer.
	 */
        function defaultHeaderRenderer(_ref) {
            var dataKey = (_ref.columnData, _ref.dataKey), label = (_ref.disableSort, _ref.label), sortBy = _ref.sortBy, sortDirection = _ref.sortDirection, showSortIndicator = sortBy === dataKey, children = [ _react2["default"].createElement("span", {
                className: "FlexTable__headerTruncatedText",
                key: "label",
                title: label
            }, label) ];
            return showSortIndicator && children.push(_react2["default"].createElement(_SortIndicator2["default"], {
                key: "SortIndicator",
                sortDirection: sortDirection
            })), children;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = defaultHeaderRenderer;
        var _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _SortIndicator = __webpack_require__(52), _SortIndicator2 = _interopRequireDefault(_SortIndicator);
    }, /* 52 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        /**
	 * Displayed beside a header to indicate that a FlexTable is currently sorted by this column.
	 */
        function SortIndicator(_ref) {
            var sortDirection = _ref.sortDirection, classNames = (0, _classnames2["default"])("FlexTable__sortableHeaderIcon", {
                "FlexTable__sortableHeaderIcon--ASC": sortDirection === _SortDirection2["default"].ASC,
                "FlexTable__sortableHeaderIcon--DESC": sortDirection === _SortDirection2["default"].DESC
            });
            return _react2["default"].createElement("svg", {
                className: classNames,
                width: 18,
                height: 18,
                viewBox: "0 0 24 24"
            }, sortDirection === _SortDirection2["default"].ASC ? _react2["default"].createElement("path", {
                d: "M7 14l5-5 5 5z"
            }) : _react2["default"].createElement("path", {
                d: "M7 10l5 5 5-5z"
            }), _react2["default"].createElement("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }));
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = SortIndicator;
        var _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(7), _classnames2 = _interopRequireDefault(_classnames), _SortDirection = __webpack_require__(53), _SortDirection2 = _interopRequireDefault(_SortDirection);
        SortIndicator.propTypes = {
            sortDirection: _react.PropTypes.oneOf([ _SortDirection2["default"].ASC, _SortDirection2["default"].DESC ])
        };
    }, /* 53 */
    /***/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var SortDirection = {
            /**
	   * Sort items in ascending order.
	   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
	   */
            ASC: "ASC",
            /**
	   * Sort items in descending order.
	   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
	   */
            DESC: "DESC"
        };
        exports["default"] = SortDirection;
    }, /* 54 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Default cell renderer that displays an attribute as a simple string
	 * You should override the column's cellRenderer if your data is some other type of object.
	 */
        function defaultCellRenderer(_ref) {
            var cellData = _ref.cellData;
            _ref.cellDataKey, _ref.columnData, _ref.rowData, _ref.rowIndex;
            return null == cellData ? "" : String(cellData);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = defaultCellRenderer;
    }, /* 55 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Default accessor for returning a cell value for a given attribute.
	 * This function expects to operate on either a vanilla Object or an Immutable Map.
	 * You should override the column's cellDataGetter if your data is some other type of object.
	 */
        function defaultCellDataGetter(_ref) {
            var dataKey = (_ref.columnData, _ref.dataKey), rowData = _ref.rowData;
            return rowData.get instanceof Function ? rowData.get(dataKey) : rowData[dataKey];
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = defaultCellDataGetter;
    }, /* 56 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        /**
	 * Default row renderer for FlexTable.
	 */
        function defaultRowRenderer(_ref) {
            var className = _ref.className, columns = _ref.columns, index = _ref.index, onRowClick = (_ref.isScrolling, 
            _ref.onRowClick), onRowDoubleClick = _ref.onRowDoubleClick, onRowMouseOver = _ref.onRowMouseOver, onRowMouseOut = _ref.onRowMouseOut, style = (_ref.rowData, 
            _ref.style), a11yProps = {};
            return (onRowClick || onRowDoubleClick || onRowMouseOver || onRowMouseOut) && (a11yProps["aria-label"] = "row", 
            a11yProps.role = "row", a11yProps.tabIndex = 0, onRowClick && (a11yProps.onClick = function() {
                return onRowClick({
                    index: index
                });
            }), onRowDoubleClick && (a11yProps.onDoubleClick = function() {
                return onRowDoubleClick({
                    index: index
                });
            }), onRowMouseOut && (a11yProps.onMouseOut = function() {
                return onRowMouseOut({
                    index: index
                });
            }), onRowMouseOver && (a11yProps.onMouseOver = function() {
                return onRowMouseOver({
                    index: index
                });
            })), _react2["default"].createElement("div", _extends({}, a11yProps, {
                className: className,
                style: style
            }), columns);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        };
        exports["default"] = defaultRowRenderer;
        var _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react);
    }, /* 57 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.InfiniteLoader = exports["default"] = void 0;
        var _InfiniteLoader2 = __webpack_require__(58), _InfiniteLoader3 = _interopRequireDefault(_InfiniteLoader2);
        exports["default"] = _InfiniteLoader3["default"], exports.InfiniteLoader = _InfiniteLoader3["default"];
    }, /* 58 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        function isRangeVisible(_ref2) {
            var lastRenderedStartIndex = _ref2.lastRenderedStartIndex, lastRenderedStopIndex = _ref2.lastRenderedStopIndex, startIndex = _ref2.startIndex, stopIndex = _ref2.stopIndex;
            return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
        }
        /**
	 * Returns all of the ranges within a larger range that contain unloaded rows.
	 */
        function scanForUnloadedRanges(_ref3) {
            for (var isRowLoaded = _ref3.isRowLoaded, minimumBatchSize = _ref3.minimumBatchSize, rowCount = _ref3.rowCount, startIndex = _ref3.startIndex, stopIndex = _ref3.stopIndex, unloadedRanges = [], rangeStartIndex = null, rangeStopIndex = null, index = startIndex; index <= stopIndex; index++) {
                var loaded = isRowLoaded({
                    index: index
                });
                loaded ? null !== rangeStopIndex && (unloadedRanges.push({
                    startIndex: rangeStartIndex,
                    stopIndex: rangeStopIndex
                }), rangeStartIndex = rangeStopIndex = null) : (rangeStopIndex = index, null === rangeStartIndex && (rangeStartIndex = index));
            }
            // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
            // Scan forward to try filling our :minimumBatchSize.
            if (null !== rangeStopIndex) {
                for (var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1), _index = rangeStopIndex + 1; _index <= potentialStopIndex && !isRowLoaded({
                    index: _index
                }); _index++) rangeStopIndex = _index;
                unloadedRanges.push({
                    startIndex: rangeStartIndex,
                    stopIndex: rangeStopIndex
                });
            }
            // Check to see if our first range ended prematurely.
            // In this case we should scan backwards to try filling our :minimumBatchSize.
            if (unloadedRanges.length) for (var firstUnloadedRange = unloadedRanges[0]; firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0; ) {
                var _index2 = firstUnloadedRange.startIndex - 1;
                if (isRowLoaded({
                    index: _index2
                })) break;
                firstUnloadedRange.startIndex = _index2;
            }
            return unloadedRanges;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
        exports.isRangeVisible = isRangeVisible, exports.scanForUnloadedRanges = scanForUnloadedRanges;
        var _react = __webpack_require__(3), _reactAddonsShallowCompare = __webpack_require__(16), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), _createCallbackMemoizer = __webpack_require__(28), _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer), InfiniteLoader = function(_Component) {
            function InfiniteLoader(props, context) {
                _classCallCheck(this, InfiniteLoader);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InfiniteLoader).call(this, props, context));
                return _this._loadMoreRowsMemoizer = (0, _createCallbackMemoizer2["default"])(), 
                _this._onRowsRendered = _this._onRowsRendered.bind(_this), _this._registerChild = _this._registerChild.bind(_this), 
                _this;
            }
            return _inherits(InfiniteLoader, _Component), _createClass(InfiniteLoader, [ {
                key: "render",
                value: function() {
                    var children = this.props.children;
                    return children({
                        onRowsRendered: this._onRowsRendered,
                        registerChild: this._registerChild
                    });
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(nextProps, nextState) {
                    return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                }
            }, {
                key: "_loadUnloadedRanges",
                value: function(unloadedRanges) {
                    var _this2 = this, loadMoreRows = this.props.loadMoreRows;
                    unloadedRanges.forEach(function(unloadedRange) {
                        var promise = loadMoreRows(unloadedRange);
                        promise && promise.then(function() {
                            // Refresh the visible rows if any of them have just been loaded.
                            // Otherwise they will remain in their unloaded visual state.
                            isRangeVisible({
                                lastRenderedStartIndex: _this2._lastRenderedStartIndex,
                                lastRenderedStopIndex: _this2._lastRenderedStopIndex,
                                startIndex: unloadedRange.startIndex,
                                stopIndex: unloadedRange.stopIndex
                            }) && _this2._registeredChild && _this2._registeredChild.forceUpdate();
                        });
                    });
                }
            }, {
                key: "_onRowsRendered",
                value: function(_ref) {
                    var _this3 = this, startIndex = _ref.startIndex, stopIndex = _ref.stopIndex, _props = this.props, isRowLoaded = _props.isRowLoaded, minimumBatchSize = _props.minimumBatchSize, rowCount = _props.rowCount, threshold = _props.threshold;
                    this._lastRenderedStartIndex = startIndex, this._lastRenderedStopIndex = stopIndex;
                    var unloadedRanges = scanForUnloadedRanges({
                        isRowLoaded: isRowLoaded,
                        minimumBatchSize: minimumBatchSize,
                        rowCount: rowCount,
                        startIndex: Math.max(0, startIndex - threshold),
                        stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
                    }), squashedUnloadedRanges = unloadedRanges.reduce(function(reduced, unloadedRange) {
                        return reduced.concat([ unloadedRange.startIndex, unloadedRange.stopIndex ]);
                    }, []);
                    this._loadMoreRowsMemoizer({
                        callback: function() {
                            _this3._loadUnloadedRanges(unloadedRanges);
                        },
                        indices: {
                            squashedUnloadedRanges: squashedUnloadedRanges
                        }
                    });
                }
            }, {
                key: "_registerChild",
                value: function(registeredChild) {
                    this._registeredChild = registeredChild;
                }
            } ]), InfiniteLoader;
        }(_react.Component);
        /**
	 * Determines if the specified start/stop range is visible based on the most recently rendered range.
	 */
        InfiniteLoader.propTypes = {
            /**
	   * Function respondible for rendering a virtualized component.
	   * This function should implement the following signature:
	   * ({ onRowsRendered, registerChild }) => PropTypes.element
	   *
	   * The specified :onRowsRendered function should be passed through to the child's :onRowsRendered property.
	   * The :registerChild callback should be set as the virtualized component's :ref.
	   */
            children: _react.PropTypes.func.isRequired,
            /**
	   * Function responsible for tracking the loaded state of each row.
	   * It should implement the following signature: ({ index: number }): boolean
	   */
            isRowLoaded: _react.PropTypes.func.isRequired,
            /**
	   * Callback to be invoked when more rows must be loaded.
	   * It should implement the following signature: ({ startIndex, stopIndex }): Promise
	   * The returned Promise should be resolved once row data has finished loading.
	   * It will be used to determine when to refresh the list with the newly-loaded data.
	   * This callback may be called multiple times in reaction to a single scroll event.
	   */
            loadMoreRows: _react.PropTypes.func.isRequired,
            /**
	   * Minimum number of rows to be loaded at a time.
	   * This property can be used to batch requests to reduce HTTP requests.
	   */
            minimumBatchSize: _react.PropTypes.number.isRequired,
            /**
	   * Number of rows in list; can be arbitrary high number if actual number is unknown.
	   */
            rowCount: _react.PropTypes.number.isRequired,
            /**
	   * Threshold at which to pre-fetch data.
	   * A threshold X means that data will start loading when a user scrolls within X rows.
	   * This value defaults to 15.
	   */
            threshold: _react.PropTypes.number.isRequired
        }, InfiniteLoader.defaultProps = {
            minimumBatchSize: 10,
            rowCount: 0,
            threshold: 15
        }, exports["default"] = InfiniteLoader;
    }, /* 59 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.ScrollSync = exports["default"] = void 0;
        var _ScrollSync2 = __webpack_require__(60), _ScrollSync3 = _interopRequireDefault(_ScrollSync2);
        exports["default"] = _ScrollSync3["default"], exports.ScrollSync = _ScrollSync3["default"];
    }, /* 60 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(3), _reactAddonsShallowCompare = __webpack_require__(16), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), ScrollSync = function(_Component) {
            function ScrollSync(props, context) {
                _classCallCheck(this, ScrollSync);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ScrollSync).call(this, props, context));
                return _this.state = {
                    clientHeight: 0,
                    clientWidth: 0,
                    scrollHeight: 0,
                    scrollLeft: 0,
                    scrollTop: 0,
                    scrollWidth: 0
                }, _this._onScroll = _this._onScroll.bind(_this), _this;
            }
            return _inherits(ScrollSync, _Component), _createClass(ScrollSync, [ {
                key: "render",
                value: function() {
                    var children = this.props.children, _state = this.state, clientHeight = _state.clientHeight, clientWidth = _state.clientWidth, scrollHeight = _state.scrollHeight, scrollLeft = _state.scrollLeft, scrollTop = _state.scrollTop, scrollWidth = _state.scrollWidth;
                    return children({
                        clientHeight: clientHeight,
                        clientWidth: clientWidth,
                        onScroll: this._onScroll,
                        scrollHeight: scrollHeight,
                        scrollLeft: scrollLeft,
                        scrollTop: scrollTop,
                        scrollWidth: scrollWidth
                    });
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(nextProps, nextState) {
                    return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                }
            }, {
                key: "_onScroll",
                value: function(_ref) {
                    var clientHeight = _ref.clientHeight, clientWidth = _ref.clientWidth, scrollHeight = _ref.scrollHeight, scrollLeft = _ref.scrollLeft, scrollTop = _ref.scrollTop, scrollWidth = _ref.scrollWidth;
                    this.setState({
                        clientHeight: clientHeight,
                        clientWidth: clientWidth,
                        scrollHeight: scrollHeight,
                        scrollLeft: scrollLeft,
                        scrollTop: scrollTop,
                        scrollWidth: scrollWidth
                    });
                }
            } ]), ScrollSync;
        }(_react.Component);
        ScrollSync.propTypes = {
            /**
	   * Function respondible for rendering 2 or more virtualized components.
	   * This function should implement the following signature:
	   * ({ onScroll, scrollLeft, scrollTop }) => PropTypes.element
	   */
            children: _react.PropTypes.func.isRequired
        }, exports["default"] = ScrollSync;
    }, /* 61 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.VirtualScroll = exports["default"] = void 0;
        var _VirtualScroll2 = __webpack_require__(62), _VirtualScroll3 = _interopRequireDefault(_VirtualScroll2);
        exports["default"] = _VirtualScroll3["default"], exports.VirtualScroll = _VirtualScroll3["default"];
    }, /* 62 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _Grid = __webpack_require__(40), _Grid2 = _interopRequireDefault(_Grid), _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _classnames = __webpack_require__(7), _classnames2 = _interopRequireDefault(_classnames), _reactAddonsShallowCompare = __webpack_require__(16), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), VirtualScroll = function(_Component) {
            function VirtualScroll(props, context) {
                _classCallCheck(this, VirtualScroll);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VirtualScroll).call(this, props, context));
                return _this._cellRenderer = _this._cellRenderer.bind(_this), _this._createRowClassNameGetter = _this._createRowClassNameGetter.bind(_this), 
                _this._createRowStyleGetter = _this._createRowStyleGetter.bind(_this), _this._onScroll = _this._onScroll.bind(_this), 
                _this._onSectionRendered = _this._onSectionRendered.bind(_this), _this;
            }
            return _inherits(VirtualScroll, _Component), _createClass(VirtualScroll, [ {
                key: "forceUpdateGrid",
                value: function() {
                    this.Grid.forceUpdate();
                }
            }, {
                key: "measureAllRows",
                value: function() {
                    this.Grid.measureAllCells();
                }
            }, {
                key: "recomputeRowHeights",
                value: function() {
                    var index = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                    this.Grid.recomputeGridSize({
                        rowIndex: index
                    }), this.forceUpdateGrid();
                }
            }, {
                key: "render",
                value: function() {
                    var _this2 = this, _props = this.props, className = _props.className, noRowsRenderer = _props.noRowsRenderer, scrollToIndex = _props.scrollToIndex, width = _props.width, classNames = (0, 
                    _classnames2["default"])("VirtualScroll", className);
                    return _react2["default"].createElement(_Grid2["default"], _extends({}, this.props, {
                        autoContainerWidth: !0,
                        cellRenderer: this._cellRenderer,
                        cellClassName: this._createRowClassNameGetter(),
                        cellStyle: this._createRowStyleGetter(),
                        className: classNames,
                        columnWidth: width,
                        columnCount: 1,
                        noContentRenderer: noRowsRenderer,
                        onScroll: this._onScroll,
                        onSectionRendered: this._onSectionRendered,
                        ref: function(_ref) {
                            _this2.Grid = _ref;
                        },
                        scrollToRow: scrollToIndex
                    }));
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(nextProps, nextState) {
                    return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                }
            }, {
                key: "_cellRenderer",
                value: function(_ref2) {
                    var isScrolling = (_ref2.columnIndex, _ref2.isScrolling), rowIndex = _ref2.rowIndex, rowRenderer = this.props.rowRenderer;
                    return rowRenderer({
                        index: rowIndex,
                        isScrolling: isScrolling
                    });
                }
            }, {
                key: "_createRowClassNameGetter",
                value: function() {
                    var rowClassName = this.props.rowClassName;
                    return rowClassName instanceof Function ? function(_ref3) {
                        var rowIndex = _ref3.rowIndex;
                        return rowClassName({
                            index: rowIndex
                        });
                    } : function() {
                        return rowClassName;
                    };
                }
            }, {
                key: "_createRowStyleGetter",
                value: function() {
                    var rowStyle = this.props.rowStyle, wrapped = rowStyle instanceof Function ? rowStyle : function() {
                        return rowStyle;
                    };
                    // Default width to 100% to prevent list rows from flowing under the vertical scrollbar
                    return function(_ref4) {
                        var rowIndex = _ref4.rowIndex;
                        return _extends({
                            width: "100%"
                        }, wrapped({
                            index: rowIndex
                        }));
                    };
                }
            }, {
                key: "_onScroll",
                value: function(_ref5) {
                    var clientHeight = _ref5.clientHeight, scrollHeight = _ref5.scrollHeight, scrollTop = _ref5.scrollTop, onScroll = this.props.onScroll;
                    onScroll({
                        clientHeight: clientHeight,
                        scrollHeight: scrollHeight,
                        scrollTop: scrollTop
                    });
                }
            }, {
                key: "_onSectionRendered",
                value: function(_ref6) {
                    var rowOverscanStartIndex = _ref6.rowOverscanStartIndex, rowOverscanStopIndex = _ref6.rowOverscanStopIndex, rowStartIndex = _ref6.rowStartIndex, rowStopIndex = _ref6.rowStopIndex, onRowsRendered = this.props.onRowsRendered;
                    onRowsRendered({
                        overscanStartIndex: rowOverscanStartIndex,
                        overscanStopIndex: rowOverscanStopIndex,
                        startIndex: rowStartIndex,
                        stopIndex: rowStopIndex
                    });
                }
            } ]), VirtualScroll;
        }(_react.Component);
        VirtualScroll.propTypes = {
            "aria-label": _react.PropTypes.string,
            /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
            autoHeight: _react.PropTypes.bool,
            /** Optional CSS class name */
            className: _react.PropTypes.string,
            /**
	   * Used to estimate the total height of a VirtualScroll before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
            estimatedRowSize: _react.PropTypes.number.isRequired,
            /** Height constraint for list (determines how many actual rows are rendered) */
            height: _react.PropTypes.number.isRequired,
            /** Optional renderer to be used in place of rows when rowCount is 0 */
            noRowsRenderer: _react.PropTypes.func.isRequired,
            /**
	   * Callback invoked with information about the slice of rows that were just rendered.
	   * ({ startIndex, stopIndex }): void
	   */
            onRowsRendered: _react.PropTypes.func.isRequired,
            /**
	   * Number of rows to render above/below the visible bounds of the list.
	   * These rows can help for smoother scrolling on touch devices.
	   */
            overscanRowCount: _react.PropTypes.number.isRequired,
            /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, scrollHeight, scrollTop }): void
	   */
            onScroll: _react.PropTypes.func.isRequired,
            /**
	   * Either a fixed row height (number) or a function that returns the height of a row given its index.
	   * ({ index: number }): number
	   */
            rowHeight: _react.PropTypes.oneOfType([ _react.PropTypes.number, _react.PropTypes.func ]).isRequired,
            /** Responsbile for rendering a row given an index; ({ index: number }): node */
            rowRenderer: _react.PropTypes.func.isRequired,
            /** Optional custom CSS class for individual rows */
            rowClassName: _react.PropTypes.oneOfType([ _react.PropTypes.string, _react.PropTypes.func ]),
            /** Number of rows in list. */
            rowCount: _react.PropTypes.number.isRequired,
            /** Optional custom styles for individual cells */
            rowStyle: _react.PropTypes.oneOfType([ _react.PropTypes.object, _react.PropTypes.func ]),
            /** See Grid#scrollToAlignment */
            scrollToAlignment: _react.PropTypes.oneOf([ "auto", "end", "start", "center" ]).isRequired,
            /** Row index to ensure visible (by forcefully scrolling if necessary) */
            scrollToIndex: _react.PropTypes.number,
            /** Vertical offset. */
            scrollTop: _react.PropTypes.number,
            /** Optional inline style */
            style: _react.PropTypes.object,
            /** Tab index for focus */
            tabIndex: _react.PropTypes.number,
            /** Width of list */
            width: _react.PropTypes.number.isRequired
        }, VirtualScroll.defaultProps = {
            estimatedRowSize: 30,
            noRowsRenderer: function() {
                return null;
            },
            onRowsRendered: function() {
                return null;
            },
            onScroll: function() {
                return null;
            },
            overscanRowCount: 10,
            scrollToAlignment: "auto",
            style: {}
        }, exports["default"] = VirtualScroll;
    }, /* 63 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.WindowScroller = exports["default"] = void 0;
        var _WindowScroller2 = __webpack_require__(64), _WindowScroller3 = _interopRequireDefault(_WindowScroller2);
        exports["default"] = _WindowScroller3["default"], exports.WindowScroller = _WindowScroller3["default"];
    }, /* 64 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.IS_SCROLLING_TIMEOUT = void 0;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(3), _react2 = _interopRequireDefault(_react), _reactDom = __webpack_require__(5), _reactDom2 = _interopRequireDefault(_reactDom), _reactAddonsShallowCompare = __webpack_require__(16), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare), _raf = __webpack_require__(31), _raf2 = _interopRequireDefault(_raf), IS_SCROLLING_TIMEOUT = exports.IS_SCROLLING_TIMEOUT = 150, WindowScroller = function(_Component) {
            function WindowScroller(props) {
                _classCallCheck(this, WindowScroller);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WindowScroller).call(this, props)), height = "undefined" != typeof window ? window.innerHeight : 0;
                return _this.state = {
                    isScrolling: !1,
                    height: height,
                    scrollTop: 0
                }, _this._onScrollWindow = _this._onScrollWindow.bind(_this), _this._onResizeWindow = _this._onResizeWindow.bind(_this), 
                _this._enablePointerEventsAfterDelayCallback = _this._enablePointerEventsAfterDelayCallback.bind(_this), 
                _this;
            }
            return _inherits(WindowScroller, _Component), _createClass(WindowScroller, [ {
                key: "componentDidMount",
                value: function() {
                    var height = this.state.height;
                    // Subtract documentElement top to handle edge-case where a user is navigating back (history) from an already-scrolled bage.
                    // In this case the body's top position will be a negative number and this element's top will be increased (by that amount).
                    this._positionFromTop = _reactDom2["default"].findDOMNode(this).getBoundingClientRect().top - document.documentElement.getBoundingClientRect().top, 
                    height !== window.innerHeight && this.setState({
                        height: window.innerHeight
                    }), window.addEventListener("scroll", this._onScrollWindow, !1), window.addEventListener("resize", this._onResizeWindow, !1);
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("scroll", this._onScrollWindow, !1), window.removeEventListener("resize", this._onResizeWindow, !1), 
                    this._disablePointerEventsTimeoutId && (clearTimeout(this._disablePointerEventsTimeoutId), 
                    this._enablePointerEventsIfDisabled());
                }
            }, {
                key: "_setNextState",
                value: function(state) {
                    var _this2 = this;
                    this._setNextStateAnimationFrameId && _raf2["default"].cancel(this._setNextStateAnimationFrameId), 
                    this._setNextStateAnimationFrameId = (0, _raf2["default"])(function() {
                        _this2._setNextStateAnimationFrameId = null, _this2.setState(state);
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var children = this.props.children, _state = this.state, isScrolling = _state.isScrolling, scrollTop = _state.scrollTop, height = _state.height;
                    return _react2["default"].createElement("div", null, children({
                        height: height,
                        isScrolling: isScrolling,
                        scrollTop: scrollTop
                    }));
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(nextProps, nextState) {
                    return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
                }
            }, {
                key: "_enablePointerEventsAfterDelay",
                value: function() {
                    this._disablePointerEventsTimeoutId && clearTimeout(this._disablePointerEventsTimeoutId), 
                    this._disablePointerEventsTimeoutId = setTimeout(this._enablePointerEventsAfterDelayCallback, IS_SCROLLING_TIMEOUT);
                }
            }, {
                key: "_enablePointerEventsAfterDelayCallback",
                value: function() {
                    this._enablePointerEventsIfDisabled(), this.setState({
                        isScrolling: !1
                    });
                }
            }, {
                key: "_enablePointerEventsIfDisabled",
                value: function() {
                    this._disablePointerEventsTimeoutId && (this._disablePointerEventsTimeoutId = null, 
                    document.body.style.pointerEvents = this._originalBodyPointerEvents, this._originalBodyPointerEvents = null);
                }
            }, {
                key: "_onResizeWindow",
                value: function(event) {
                    var onResize = this.props.onResize, height = window.innerHeight || 0;
                    this.setState({
                        height: height
                    }), onResize({
                        height: height
                    });
                }
            }, {
                key: "_onScrollWindow",
                value: function(event) {
                    var onScroll = this.props.onScroll, scrollY = "scrollY" in window ? window.scrollY : document.documentElement.scrollTop, scrollTop = Math.max(0, scrollY - this._positionFromTop);
                    null == this._originalBodyPointerEvents && (this._originalBodyPointerEvents = document.body.style.pointerEvents, 
                    document.body.style.pointerEvents = "none", this._enablePointerEventsAfterDelay());
                    var state = {
                        isScrolling: !0,
                        scrollTop: scrollTop
                    };
                    this.state.isScrolling ? this._setNextState(state) : this.setState(state), onScroll({
                        scrollTop: scrollTop
                    });
                }
            } ]), WindowScroller;
        }(_react.Component);
        WindowScroller.propTypes = {
            /**
	   * Function respondible for rendering children.
	   * This function should implement the following signature:
	   * ({ height, scrollTop }) => PropTypes.element
	   */
            children: _react.PropTypes.func.isRequired,
            /** Callback to be invoked on-resize: ({ height }) */
            onResize: _react.PropTypes.func.isRequired,
            /** Callback to be invoked on-scroll: ({ scrollTop }) */
            onScroll: _react.PropTypes.func.isRequired
        }, WindowScroller.defaultProps = {
            onResize: function() {},
            onScroll: function() {}
        }, exports["default"] = WindowScroller;
    }, /* 65 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(3), _reactDom = __webpack_require__(5), _reactDom2 = _interopRequireDefault(_reactDom), _shouldPureComponentUpdate = __webpack_require__(66), _shouldPureComponentUpdate2 = _interopRequireDefault(_shouldPureComponentUpdate), ScrollLock = function(_Component) {
            function ScrollLock() {
                var _Object$getPrototypeO, _temp, _this, _ret;
                _classCallCheck(this, ScrollLock);
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                return _temp = _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ScrollLock)).call.apply(_Object$getPrototypeO, [ this ].concat(args))), 
                _this.componentDidMount = function() {
                    _this.scrollLock();
                }, _this.shouldComponentUpdate = _shouldPureComponentUpdate2["default"], _this.componentDidUpdate = function() {
                    _this.scrollLock();
                }, _this.componentWillUnmount = function() {
                    _this.scrollRelease();
                }, _this.cancelScrollEvent = function(event) {
                    return event.stopImmediatePropagation(), event.preventDefault(), event.returnValue = !1, 
                    !1;
                }, _this.scrollLock = function() {
                    var domNode = _reactDom2["default"].findDOMNode(_this);
                    domNode && domNode.addEventListener("wheel", _this.onScrollHandler, !1);
                }, _this.scrollRelease = function() {
                    var domNode = _reactDom2["default"].findDOMNode(_this);
                    domNode && domNode.removeEventListener("wheel", _this.onScrollHandler, !1);
                }, _this.onScrollHandler = function(event) {
                    var domNode = _reactDom2["default"].findDOMNode(_this), scrollTop = domNode.scrollTop, scrollHeight = domNode.scrollHeight, height = domNode.clientHeight, wheelDelta = event.deltaY, isDeltaPositive = wheelDelta > 0;
                    return scrollHeight === height || (isDeltaPositive && wheelDelta > scrollHeight - height - scrollTop ? (domNode.scrollTop = scrollHeight, 
                    _this.cancelScrollEvent(event)) : !isDeltaPositive && -wheelDelta > scrollTop ? (domNode.scrollTop = 0, 
                    _this.cancelScrollEvent(event)) : void 0);
                }, _ret = _temp, _possibleConstructorReturn(_this, _ret);
            }
            return _inherits(ScrollLock, _Component), _createClass(ScrollLock, [ {
                key: "render",
                value: function() {
                    return this.props.children;
                }
            } ]), ScrollLock;
        }(_react.Component);
        ScrollLock.propTypes = {
            children: _react.PropTypes.any
        }, exports["default"] = ScrollLock;
    }, /* 66 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function shouldPureComponentUpdate(nextProps, nextState) {
            return (0, _reactAddonsShallowCompare2["default"])(this, nextProps, nextState);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = shouldPureComponentUpdate;
        var _reactAddonsShallowCompare = __webpack_require__(16), _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);
    } ]);
});
//# sourceMappingURL=react-virtualized-select.js.map