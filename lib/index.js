'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsSelectLibSelect = require('./components/Select/lib/Select');

var _componentsSelectLibSelect2 = _interopRequireDefault(_componentsSelectLibSelect);

var _componentsInput = require('./components/Input');

var _componentsInput2 = _interopRequireDefault(_componentsInput);

var _componentsIcons = require('./components/Icons');

var _componentsIcons2 = _interopRequireDefault(_componentsIcons);

var _componentsIcon = require('./components/Icon');

var _componentsIcon2 = _interopRequireDefault(_componentsIcon);

var Components = {
  Select: _componentsSelectLibSelect2['default'],
  Input: _componentsInput2['default'],
  Icons: _componentsIcons2['default'],
  Icon: _componentsIcon2['default']
};

exports['default'] = Components;
module.exports = exports['default'];