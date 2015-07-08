var yourtype = yourtype || {};
yourtype.templates = yourtype.templates || {};

yourtype.templates.form = '\
<table class="yourtype"> \
  <tbody class="yourtype"> \
    <tr class="yourtype"> \
      <td class="yourtype" colspan="2"> \
        <!-- font family --> \
        <label class="yourtype" for="font-family">Font Family</label> \
        <select class="yourtype" id="font-family"> \
          <% _.each(fonts, function (font) { %> \
            <option class="yourtype" val="<%= font.name %>"> \
              <%= font.name %> \
            </option> \
            <% }); %> \
        </select> \
      </td> \
    </tr> \
    <tr class="yourtype"> \
      <td class="yourtype"> \
        <!-- font size --> \
        <label class="yourtype" for="font-size">Font Size</label> \
        <input type="text" class="yourtype" id="font-size"> \
      </td> \
      <td class="yourtype"> \
        <!-- font weight --> \
        <label class="yourtype" for="line-height">Line Height</label> \
        <input type="text" class="yourtype" id="line-height"> \
      </td> \
    </tr> \
    <tr class="yourtype"> \
      <td class="yourtype"> \
        <!-- font weight --> \
        <label class="yourtype" for="font-weight">Font Weight</label> \
        <input type="text" class="yourtype" id="font-weight"> \
      </td> \
      <td class="yourtype"> \
        <!-- font color --> \
        <label class="yourtype" for="font-color">Font Color</label> \
        <input type="text" class="yourtype" id="font-color"> \
      </td> \
    </tr> \
  </tbody> \
</table>';