var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var app = require('../app.js');
var data = require('../fonts.data.js');
var FormView = require('./form.view.js');
var CSSResults = require('./cssresults.view.js');

var AppView = Backbone.View.extend({
  initialize: function () {
    this.form = new FormView({
      $el: 'form.yourtype#form-container',
      model: this.model
    });
    this.cssResults = new CSSResults({
      $el: 'div.yourtype#css-container',
      model: this.model
    });
  },
  template: require('../../templates/app.template.html'),
  render: function (elementPosition) {
    this.setPositioning(elementPosition);

    this.$el.html(this.template(data));
    this.form.setElement(this.$('form.yourtype#form-container')).render();
    this.cssResults.setElement(this.$('div.yourtype#css-container')).render();

    return this.$el.show();
  },
  hide: function () {
    this.$el.hide();
  },
  setPositioning: function (elementPosition) {
    var widgetPosition = {};
    var $windowHeight = $(window).height();
    var $windowWidth = $(window).width();

    if (elementPosition.top < ($windowHeight / 2)) {
      widgetPosition.top = elementPosition.top + 15;
    } else {
      widgetPosition.top = elementPosition.top - ($windowHeight / 2);
    }

    if (elementPosition.left < ($windowWidth / 2)) {
      widgetPosition.left = elementPosition.left + 15;
    } else {
      widgetPosition.left = ($windowWidth / 2) - elementPosition.left;
    }

    this.$el.css({
      'left': widgetPosition.left,
      'top': widgetPosition.top,
      'z-index': '9000000000',
      'position': 'absolute'
    });

    return this.$el;
  }
});

module.exports = AppView;