(function () {
  tinymce.PluginManager.add('add_skin_preview', function (editor, url) {
    // Add Button to Visual Editor Toolbar

    editor.addButton('add_skin_preview', {
      title: 'AddSkin',
      cmd: 'addskin_command',
      image: url + '/resources/icon.svg'
    });

    editor.addCommand('addskin_command', async function () {
      var shortcode;

      const skinUrl = await getMediaImageUrl();

      editor.windowManager.open({
        title: `Indiquez l'URL du skin`,
        body: [{
          type: 'textbox',
          name: 'url',
          label: 'URL',
          value: skinUrl,
          minWidth: 400
        }, {
          type: 'textbox',
          name: 'width',
          label: 'Width'
        }, {
          type: 'textbox',
          name: 'height',
          label: 'Height'
        }],
        onsubmit: function (e) {
          // Insert content when the window form is submitted
          let innerTag = `skin-preview url="${skinUrl}"`;
          if (e.data.url) {
            if (Number.parseInt(e.data.width)) {
              innerTag += ` width="${e.data.width}"`;
            }
            if (Number.parseInt(e.data.height)) {
              innerTag += ` height="${e.data.height}"`;
            }
            shortcode = `[${innerTag} /]`;
            editor.execCommand('mceInsertContent', 0, shortcode);
          }
        }
      });

    });
  });
})();

function getMediaImageUrl() {

  return new Promise((resolve, reject) => {
    // Create a new media frame
    frame = wp.media({
      title: 'Select the skin you want to display',
      button: {
        text: 'Use this skin'
      },
      multiple: false
    });

    // Image selected
    frame.on('select', function () {
      resolve(frame.state().get('selection').first().toJSON().url);
    });

    frame.open();
  })

}