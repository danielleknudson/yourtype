var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var AppModel = require('./models/app.model.js');
var AppView = require('./views/app.view.js');

var app = new AppModel();
var appView = new AppView({model: app});