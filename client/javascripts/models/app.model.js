var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');

var AppModel = Backbone.Model.extend({
  initialize: function () {
    this.set('currentStyles', '');
  },
  updateStyles: function (elements, newStyles) {
    $(elements).css(newStyles);
    this.set('currentStyles', newStyles);
    console.log(this.get('currentStyles'));
    this.trigger('updateCSSResults', this.get('currentStyles'));
  }
});

module.exports = AppModel;
