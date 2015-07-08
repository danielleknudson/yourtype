var yourtype = yourtype || {};

$(document).ready(function () {

  var app = new yourtype.AppModel();
  var appView = new yourtype.AppView({
    model: app,
    className: 'yourtype',
    id: 'app-container'
  });

  $('body').on('click', 'h1, h2, h3, h4, h5, h6, span, p, li, section, article, aside, header, footer, nav, div, label, sup, figcaption, figure, main, pre, abbr, cite, sub, caption, th, td, legend ', function (event) {
    // don't listen for clicks on the fontsWidgetApp
    if ($(event.target).is('div.yourtype#app-container, div.yourtype#app-container *')) {
      return;
    }

    // get the name of the element clicked
    var elTag = $(this)[0].nodeName.toLowerCase();
    // get the element's classes
    var klasses = this.className.split(/\s+/);

    yourtype.data.elTag = elTag;
    yourtype.data.klasses = (klasses[0] === "") ? null : klasses;

    if (klasses[0] !== "") {
      elTag = $(elTag + '.' + klasses.join("."));
    }

    var position = {
      left: $(this).offset().left,
      top: $(this).offset().top
    };

    $('body').append(appView.render(position));

  }); // end of body listener for text elements

  $('body').on('click', '.yourtype#app-container #close-yourtype', function (event) {
    event.preventDefault();
    appView.hide();
  });

});
