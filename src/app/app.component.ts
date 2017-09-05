import { Component, OnInit } from '@angular/core';

declare var orion: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  codeEdit: any;

  constructor() {
  }

  ngOnInit() {

    const contents = 'var foo = "bar";\n' +
      'var bar = foo;\n' +
      '/*\n' +
      ' * test demo\n' +
      '*/\n' +
      'function test(){\n' +
      '	var foo1 = bar.lastIndexOf(char, from);\n' +
      '}\n' +
      '//Keep editing in this demo and try the content assist, problem validations and hover service!\n' +
      'var foo2 = foo.';

    const defaultPluginURLs = [
      'assets/built-codeEdit15_1/javascript/plugins/javascriptPlugin.html',
      'assets/built-codeEdit15_1/webtools/plugins/webToolsPlugin.html',
      'assets/built-codeEdit15_1/plugins/embeddedToolingPlugin.html'
    ];

    const userPluginURLs = [];
    const editorBuilder = new orion.codeEdit({ _defaultPlugins: defaultPluginURLs, userPlugins: userPluginURLs });

    this.codeEdit = editorBuilder.create({
      parent: 'embeddedEditor'
    });

    this.codeEdit.then(function (editorViewer: any) {
      document.getElementById('progressMessageDiv').textContent = 'Plugins loaded!';
      if (editorViewer.settings) {
        editorViewer.settings.contentAssistAutoTrigger = true;
        editorViewer.settings.showOccurrences = true;
        editorViewer.editor.getTextView().setOptions({ themeClass: 'src/app/app.component.css' });
      }
      editorViewer.setContents(contents, 'application/javascript');
    });

  }

}
