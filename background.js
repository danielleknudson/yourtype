// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!

  chrome.tabs.insertCSS({
    file: 'client/lib/font-awesome-4.3.0/css/font-awesome.min.css'
  });

  chrome.tabs.insertCSS({
    file: 'client/css/styles.css'
  });

  chrome.tabs.executeScript({
    file: 'client/lib/jquery.min.js'
  });

  chrome.tabs.executeScript({
    file: 'client/lib/underscore-min.js'
  });

  chrome.tabs.executeScript({
    file: 'client/lib/backbone-min.js'
  });

  chrome.tabs.executeScript({
    file: 'client/javascripts/yourtype.data.js'
  });

  chrome.tabs.executeScript({
    file: 'client/templates/cssresults.template.js'
  });

  chrome.tabs.executeScript({
    file: 'client/templates/form.template.js'
  });

  chrome.tabs.executeScript({
    file: 'client/templates/app.template.js'
  });

  chrome.tabs.executeScript({
    file: 'client/javascripts/models/app.model.js'
  });

  chrome.tabs.executeScript({
    file: 'client/javascripts/views/cssresults.view.js'
  });

  chrome.tabs.executeScript({
    file: 'client/javascripts/views/form.view.js'
  });

  chrome.tabs.executeScript({
    file: 'client/javascripts/views/app.view.js'
  });

  chrome.tabs.executeScript({
    file: 'client/javascripts/app.js'
  });

});
