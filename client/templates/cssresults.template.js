var yourtype = yourtype || {};
yourtype.templates = yourtype.templates || {};

yourtype.templates.cssresults = '\
<label class="yourtype" for="css-results">CSS</label> \
<pre class="yourtype" id="css-results" readonly> \
<% if(obj) { %> \
  <%- obj %> \
<% } else { %> \
  { } \
<% } %> \
</pre>';

