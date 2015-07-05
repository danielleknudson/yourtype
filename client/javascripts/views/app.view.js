var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');

var AppView = Backbone.View.extend({
  initialize: function () {
    console.log('AppView created');
  }
});

module.exports = AppView;
