// var _ = require('underscore');
// var $ = require('jquery');
// var Backbone = require('backbone');

var yourtype = yourtype || {};

yourtype.CSSResults = Backbone.View.extend({
  el: 'div.yourtype#css-container',
  initialize: function () {
    this.listenTo(this.model, 'updateCSSResults', function () {
      console.log('dah model', this.model.attributes);
      this.render(this.model.attributes);
    }, this);
    this.render();
  },
  template: require('../../templates/cssresults.template.html'),
  render: function (attributes) {
    if (attributes) {
      console.log('logging attributes in render function', attributes);
      this.$el.html(_.template(this.template, attributes));
    } else {
      this.$el.html(this.template);
    }
    return this.$el;
  }
});