var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');

var AppModel = Backbone.Model.extend({
  initialize: function () {
    console.log('AppModel created');
  },

  updateStyles: function (elements, newStyles) {
    console.log(newStyles);
    $(elements).css(newStyles);
    this.currentStyles = newStyles;
  }
});

module.exports = AppModel;
