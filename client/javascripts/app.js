var fs = require('fs');
var _ = require('underscore');

_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

var $ = require('jquery');
var Backbone = require('backbone');
var AppModel = require('./models/app.model.js');
var AppView = require('./views/app.view.js');
var data = require('./fonts.data.js');

module.exports = $(document).ready(function () {
  console.log('app is running');

  var app = new AppModel();
  var appView = new AppView({
    model: app,
    $el: 'div.yourtype#app-container'
  });

  $('body').on('click', 'h1, h2, h3, h4, h5, h6, span, p, li, section, article, aside, header, footer, nav, div, label, sup, figcaption, figure, main, pre, abbr, cite, sub, caption, th, td, legend ', function (event) {
    console.log('click happened!');
    // don't listen for clicks on the fontsWidgetApp
    if ($(event.target).is('div.yourtype#app-container, div.yourtype#app-container *')) {
      return;
    }

    // get the name of the element clicked
    var elTag = $(this)[0].nodeName.toLowerCase();
    // get the element's classes
    var klasses = this.className.split(/\s+/);

    data.elTag = elTag;
    data.klasses = (klasses[0] === "") ? null : klasses;

    if (klasses[0] !== "") {
      elTag = $(elTag + '.' + klasses.join("."));
    }

    var position = {
      left: $(this).offset().left,
      top: $(this).offset().top
    };

    $('body').append(appView.render(position));

  }); // end of body listener for text elements

  $('body').on('click', '.yourtype#app-container #close-picker', function (event) {
    event.preventDefault();
    appView.hide();
  });

});
