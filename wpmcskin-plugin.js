(function () {
  console.log(tinymce.PluginManager.add);
  tinymce.PluginManager.add('add_skin_preview', function (editor, url) {
    // Add Button to Visual Editor Toolbar

    editor.addButton('add_skin_preview', {
      title: 'AddSkin',
      cmd: 'addskin_command',
      image: url + '/resources/icon.svg'
    });

    editor.addCommand('addskin_command', function () {
      var shortcode;

      editor.windowManager.open({
        title: `Indiquez l'URL du skin`,
        body: [{
          type: 'textbox',
          name: 'url',
          label: 'URL',
          minWidth: 400
        }],
        onsubmit: function (e) {
          // Insert content when the window form is submitted
          if (e.data.url) {
            shortcode = '[skin-preview url="' + e.data.url + '"/]';
            editor.execCommand('mceInsertContent', 0, shortcode);
          }
        }
      });

    });
  });
})();