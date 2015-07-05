var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');

var AppModel = Backbone.Model.extend({
  initialize: function () {
    console.log('AppModel created');
  }
});

module.exports = AppModel;
