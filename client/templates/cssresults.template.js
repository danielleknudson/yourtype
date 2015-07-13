var yourtype = yourtype || {};
yourtype.templates = yourtype.templates || {};

yourtype.templates.cssresults = '\
<% if(obj) { %> \
  <label class="yourtype" for="css-results">Add these CSS rules to your stylesheet:</label> \
  <pre class="yourtype" id="css-results" readonly><%- obj %></pre> \
<% } %>';

