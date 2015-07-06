var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var data = require('../fonts.data.js');

var AppView = Backbone.View.extend({
  initialize: function () {
    console.log('AppView created');
  },

  template: require('../../templates/app.template.html'),

  render: function () {
    console.log(data.fonts);
    this.$el.html(this.template(data));
    return this.$el;
  }
});

module.exports = AppView;
