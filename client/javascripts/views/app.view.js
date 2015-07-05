var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');

var AppView = Backbone.View.extend({
  initialize: function () {
    console.log('AppView created');
  },
  template: require('../../templates/app.template.html'),
  render: function () {
    this.$el.html(this.template);
    return this.$el;
  }
});

module.exports = AppView;
