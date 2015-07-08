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
    'focusout .yourtype#font-size, .yourtype#font-weight, .yourtype#font-style .yourtype#font-color': 'formHandler',
    'keyup input.yourtype': 'formHandler',
    'change .yourtype#font-family': 'formHandler'
  },
  template: require('../../templates/form.template.html'),
  render: function () {
    return this.$el.html(_.template(this.template, data));
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

    if ($('.yourtype#line-height').val() !== "") {
      newStyles['line-height'] = $('.yourtype#line-height').val() + 'px';
    } else {
      newStyles['line-height'] = 'initial';
    }

    this.model.updateStyles(data.elTag, newStyles);
  },

  changeHandler: function () {
    console.log('change happened');
  }
});

module.exports = FormView;