// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!

  chrome.tabs.executeScript({
    file: 'lib/jquery.min.js'
  });

  chrome.tabs.executeScript({
    file: 'lib/underscore-min.js'
  });

  chrome.tabs.executeScript({
    file: 'lib/mustache.min.js'
  });

  chrome.tabs.executeScript({
    file: 'lib/backbone-min.js'
  });

  chrome.tabs.executeScript({
    file: 'app/googleFonts.js'
  });

  chrome.tabs.executeScript({
    file: 'app/templates/data.js'
  });

  chrome.tabs.executeScript({
    file: 'app/templates/template.js'
  });

  chrome.tabs.executeScript({
    file: 'app/models/fontsApp.js'
  });

  chrome.tabs.executeScript({
    file: 'app/views/fontsView.js'
  });

  chrome.tabs.executeScript({
    file: 'app/app.js'
  });

  chrome.tabs.insertCSS({
    file: 'app/styles/styles.css'
  });

});
