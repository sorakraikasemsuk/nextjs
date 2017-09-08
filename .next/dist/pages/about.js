'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('next\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Pae\\nextjs\\pages\\about.js?entry';


var About = function (_Component) {
    (0, _inherits3.default)(About, _Component);

    function About(props) {
        (0, _classCallCheck3.default)(this, About);

        var _this = (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.Add = _this.Add.bind(_this);
        _this.state = {
            item: [],
            text: ''
        };
        return _this;
    }

    (0, _createClass3.default)(About, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ text: e.target.value });
        }
    }, {
        key: 'Add',
        value: function Add(e) {
            e.preventDefault();
            var newItem = {
                text: this.state.text
            };
            this.setState(function (prevState) {
                return {
                    item: prevState.item.concat(newItem),
                    text: ''
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(_Layout2.default, { title: 'About', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }), _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('div', { className: 'col-md-12 text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, 'Add ToDo List'), _react2.default.createElement('div', { className: 'col-md-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('form', { className: 'form-inline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.text, onChange: this.handleChange, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            })), _react2.default.createElement('button', { onClick: this.Add, type: 'button', className: 'btn btn-success', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Add'))), _react2.default.createElement('div', { className: 'col-md-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(ListToDo, { item: this.state.item, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            })))));
        }
    }]);

    return About;
}(_react.Component);

exports.default = About;


var ListToDo = function (_Component2) {
    (0, _inherits3.default)(ListToDo, _Component2);

    function ListToDo(props) {
        (0, _classCallCheck3.default)(this, ListToDo);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (ListToDo.__proto__ || (0, _getPrototypeOf2.default)(ListToDo)).call(this, props));

        _this2.Del = _this2.Del.bind(_this2);
        return _this2;
    }

    (0, _createClass3.default)(ListToDo, [{
        key: 'Del',
        value: function Del(e) {
            e.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, this.props.item.map(function (item) {
                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                }, item.text, _react2.default.createElement('button', { type: 'button', className: 'btn btn-danger', onClick: _this3.Del, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                }, 'Delete'));
            }));
        }
    }]);

    return ListToDo;
}(_react.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhYm91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkFib3V0IiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiQWRkIiwic3RhdGUiLCJpdGVtIiwidGV4dCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJuZXdJdGVtIiwicHJldlN0YXRlIiwiY29uY2F0IiwiTGlzdFRvRG8iLCJEZWwiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7Ozs7OztJLEFBRUQ7bUNBQ0Y7O21CQUFBLEFBQVksT0FBTTs0Q0FBQTs7d0lBQUEsQUFDUixBQUNOOztjQUFBLEFBQUssZUFBYSxNQUFBLEFBQUssYUFBTCxBQUFrQixLQUFwQyxBQUNBO2NBQUEsQUFBSyxNQUFJLE1BQUEsQUFBSyxJQUFMLEFBQVMsS0FBbEIsQUFDQTtjQUFBLEFBQUs7a0JBQU0sQUFDRixBQUNMO2tCQU5VLEFBSWQsQUFBVyxBQUVGO0FBRkUsQUFDUDtlQUdQOzs7OztxQ0FDWSxBLEdBQUcsQUFDWjtpQkFBQSxBQUFLLFNBQVMsRUFBQyxNQUFNLEVBQUEsQUFBRSxPQUF2QixBQUFjLEFBQWdCLEFBQ2pDOzs7OzRCLEFBQ0csR0FBRSxBQUNGO2NBQUEsQUFBRSxBQUNGO2dCQUFJO3NCQUNLLEtBQUEsQUFBSyxNQURkLEFBQVksQUFDUSxBQUVwQjtBQUhZLEFBQ1I7aUJBRUosQUFBSyxTQUFTLFVBQUEsQUFBQyxXQUFEOzswQkFDTCxVQUFBLEFBQVUsS0FBVixBQUFlLE9BREksQUFDbkIsQUFBc0IsQUFDM0I7MEJBRlUsQUFBYyxBQUVuQjtBQUZtQixBQUN4QjtBQURKLEFBSUg7Ozs7aUNBQ1EsQUFDTDttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsa0NBQU8sT0FBUixBQUFlOzhCQUFmO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSxrQ0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFVBQU0sV0FBTixBQUFnQjs4QkFBaEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO3dEQUNXLE1BQVAsQUFBWSxRQUFPLFdBQW5CLEFBQTZCLGdCQUFlLE9BQU8sS0FBQSxBQUFLLE1BQXhELEFBQThELE1BQU0sVUFBVSxLQUE5RSxBQUFtRjs4QkFBbkY7Z0NBRlIsQUFDSSxBQUNJLEFBRUo7QUFGSTtpQ0FFSixjQUFBLFlBQVEsU0FBUyxLQUFqQixBQUFzQixLQUFLLE1BQTNCLEFBQWdDLFVBQVMsV0FBekMsQUFBbUQ7OEJBQW5EO2dDQUFBO0FBQUE7ZUFQWixBQUVJLEFBQ0ksQUFJSSxBQUdSLDBCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOzZDQUNJLEFBQUMsWUFBUyxNQUFNLEtBQUEsQUFBSyxNQUFyQixBQUEyQjs4QkFBM0I7Z0NBZnBCLEFBQ0ksQUFFSSxBQUNJLEFBVUksQUFDSSxBQU12QjtBQU51Qjs7Ozs7O0FBdkNSLEEsQUFnRHBCOztrQkFBQSxBQUFlOzs7SUFFVCxBO3NDQUNGOztzQkFBQSxBQUFZLE9BQU07NENBQUE7OytJQUFBLEFBQ1IsQUFDTjs7ZUFBQSxBQUFLLE1BQUksT0FBQSxBQUFLLElBQUwsQUFBUyxLQUZKLEFBRWQ7ZUFDSDs7Ozs7NEJBQ0csQSxHQUFFLEFBQ0Y7Y0FBQSxBQUFFLEFBRUw7Ozs7aUNBQ087eUJBQ0o7O21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0M7QUFERDtBQUFBLGFBQUEsT0FDQyxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLElBQUksZ0JBQUE7dUNBQ2pCLGNBQUE7O2tDQUFBO29DQUFBLEFBQU07QUFBTjtBQUFBLGlCQUFBLE9BQUEsQUFBVyxBQUFLLHNCQUFBLGNBQUEsWUFBUSxNQUFSLEFBQWEsVUFBUyxXQUF0QixBQUFnQyxrQkFBaUIsU0FBUyxPQUExRCxBQUErRDtrQ0FBL0Q7b0NBQUE7QUFBQTttQkFEQyxBQUNqQixBQUFnQjtBQUh4QixBQUNJLEFBQ0MsQUFLUjs7Ozs7QUFqQmtCLEEiLCJmaWxlIjoiYWJvdXQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovUGFlL25leHRqcyJ9