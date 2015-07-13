var yourtype = yourtype || {};

yourtype.CSSResults = Backbone.View.extend({
  el: 'div.yourtype#css-container',

  initialize: function () {
    this.listenTo(this.model, 'updateCSSResults', function () {
      console.log('dah model', this.model.attributes);
      this.render(this.model.attributes.currentStyles);
    }, this);
    this.render();
  },

  template: _.template(yourtype.templates.cssresults),

  render: function (styles) {
    if (styles) {

      var string = '';
      
      _.each(styles, function(item, key){

        if (item !== "Select a font family"){
          if (key === 'font-family'){
            string += '\t' + key + ': "' + item + '", ' + '\n';
          } else {
            string += '\t' + key + ': ' + item + ', ' + '\n';
          }
        }
      });

      string = string.slice(0, string.length - 3);

      this.$el.html(this.template({obj: string}));
    } else {
      this.$el.html(this.template());
    }
    return this.$el;
  }
});