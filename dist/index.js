'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var objectHelper = (function () {
  function objectHelper(object) {
    _classCallCheck(this, objectHelper);

    this.object = object;
  }

  _createClass(objectHelper, [{
    key: 'get',
    value: function get(path, defaultValue) {
      return objectHelper.GET(this.object, path, defaultValue);
    }
  }, {
    key: 'set',
    value: function set(path, value) {
      return objectHelper.SET(this.object, path, value);
    }
  }], [{
    key: 'GET',
    value: function GET(object, path, defaultValue) {
      var list = path.split('.');
      var next = list.shift();

      if (object[next]) {
        return list.length === 0 ? object[next] : objectHelper.GET(object[next], list.join('.'), defaultValue);
      }
      return defaultValue;
    }
  }, {
    key: 'SET',
    value: function SET(object, path, value) {
      var list = path.split('.');
      var next = list.shift();

      if (list.length === 0) {
        object[next] = value;
        return object;
      }

      if (!object[next]) {
        object[next] = {};
      }

      return objectHelper.SET(object[next], list.join('.'), value);
    }
  }]);

  return objectHelper;
})();

exports['default'] = objectHelper;
module.exports = exports['default'];

