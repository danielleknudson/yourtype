var yourtype = yourtype || {};
yourtype.templates = yourtype.templates || {};

yourtype.templates.app = ' \
<div class="yourtype" id="close-yourtype">x</div> \
<h3 class="yourtype"> YourType </h3> \
<!-- the selected element has classes --> \
<%if (klasses !== null) { %> \
  <span class="yourtype" id="currently-editing"> \
    You are currently editing <strong class="yourtype"><%= elTag %></strong> elements, with the below classes: \
  </span> \
  <div class="yourtype edit-class" id="classes-to-select"> \
    <% _.each(klasses, function (klass) { %> \
      <span class="yourtype" id="<%= klass %>"><%= klass %></span> \
    <% }); %> \
  </div> \
  <!-- the selected element doesn\'t have classes --> \
<% } else { %> \
  <span class="yourtype" id="currently-editing"> \
    You are currently editing <strong class="yourtype"> <%= elTag %> </strong> elements: \
  </span> \
<% } %> \
<form class="yourtype" id="form-container"></form> \
<div class = "yourtype" id="css-container"></div>';
