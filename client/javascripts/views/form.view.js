var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var data = require('../fonts.data.js');

var FormView = Backbone.View.extend({
  el: 'form.yourtype#form-container',
  initialize: function () {
    _.bindAll(this, 'formHandler');
    this.render();
  },

  events: {
    'click change .yourtype#font-family, .yourtype#font-size, .yourtype#font-weight, .yourtype#font-style .yourtype#font-color': 'formHandler',
    'keyup .yourtype#font-color': 'formHandler'
  },

  template: require('../../templates/form.template.html'),

  render: function () {
    this.$el.html(this.template(data));
    return this.$el.html;
  },

  formHandler: function () {
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

module.exports = FormView;