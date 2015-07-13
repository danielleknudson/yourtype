var yourtype = yourtype || {};
yourtype.templates = yourtype.templates || {};

yourtype.templates.form = '\
        <!-- font family --> \
        <label class="yourtype" for="font-family">Font Family</label> \
        <div class="yourtype tooltip" id="info">i</div> \
        <select class="yourtype" id="font-family"> \
          <% _.each(fonts, function (font) { %> \
            <option class="yourtype" val="<%= font.name %>"> \
              <%= font.name %> \
            </option> \
            <% }); %> \
        </select> \
        <!-- font size --> \
        <label class="yourtype" for="font-size">Font Size</label> \
        <input type="text" class="yourtype" id="font-size" placeholder="14px"> \
        <!-- font weight --> \
        <label class="yourtype" for="line-height">Line Height</label> \
        <input type="text" class="yourtype" id="line-height" placeholder="17px"> \
        <!-- font weight --> \
        <label class="yourtype" for="font-weight">Font Weight</label> \
        <input type="text" class="yourtype" id="font-weight"> \
        <!-- font color --> \
        <label class="yourtype" for="font-color">Font Color</label> \
        <input type="text" class="yourtype" id="font-color" placeholder="#CCCCCC">';

