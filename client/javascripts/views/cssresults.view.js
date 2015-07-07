var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');

var CSSResults = Backbone.View.extend({
  el: 'div.yourtype#css-container',
  initialize: function () {
    this.render();
  },
  template: require('../../templates/cssresults.template.html'),
  render: function () {
    return this.$el.html(this.template);
  }
});

module.exports = CSSResults;