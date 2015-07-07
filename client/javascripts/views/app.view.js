var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var app = require('../app.js');
var data = require('../fonts.data.js');

var AppView = Backbone.View.extend({
  initialize: function () {
    console.log('AppView created');
  },

  template: require('../../templates/app.template.html'),

  events: {
    'click change .yourtype#font-family, .yourtype#font-size, .yourtype#font-weight, .yourtype#font-style .yourtype#font-color': 'formHandler',
    'keyup .yourtype#font-color': 'formHandler'
  },

  render: function (elementPosition) {
    console.log('trying to render app view!');
    this.setPositioning(elementPosition);

    this.$el.html(this.template(data));
    this.$el.show();
    console.log(this.$el);
    return this.$el;
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

  },

  formHandler: function () {
    console.log('asdfaasdfasdsd');
    var newStyles = {};

    if ($('.yourtype#font-family').val() !== "") {
      newStyles['font-family'] = $('.yourtype#font-family').val();
    }

    if ($('.yourtype#font-size').val() !== "") {
      newStyles['font-size'] =  $('.yourtype#font-size').val() + 'px';
    }

    if ($('.yourtype#font-weight').val() !== "") {
      newStyles['font-weight'] = $('.yourtype#font-weight').val();
    }

    if ($('.yourtype#font-color').val() !== "") {
      newStyles['color'] = '#' + $('.yourtype#font-color').val();
    }

    if ($('.yourtype#font-style').val() !== "None") {
      newStyles['text-decoration'] = $('.yourtype#font-style').val();
    }

    this.model.updateStyles(data.elTag, newStyles);
  }
});

module.exports = AppView;