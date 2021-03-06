yourtype = yourtype || {};

yourtype.AppModel = Backbone.Model.extend({
  initialize: function () {
    this.set('currentStyles', '');
  },
  updateStyles: function (elements, newStyles) {
    console.log('elements to change', elements);
    $(elements).css(newStyles);
    this.set('currentStyles', newStyles);
    console.log(this.get('currentStyles'));
    this.trigger('updateCSSResults', this.get('currentStyles'));
  }
});