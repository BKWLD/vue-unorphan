"use strict";

// Generated by CoffeeScript 2.4.1
(function () {
  var unorphan;
  unorphan = require('unorphan');
  module.exports = {
    bind: function bind(el, _ref) {
      var value = _ref.value;

      if (value !== false) {
        return unorphan(el);
      }
    }
  };
}).call(void 0);