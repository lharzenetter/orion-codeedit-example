import { Component, OnInit } from '@angular/core';

declare var System: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  orionEditor: any;
  innerValue = `<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>
`;

  constructor() {
  }

  ngOnInit() {
    System.import('../../orion/editor/built-editor.js')
      .then((o: any) => {
        this.orionEditor = o({
          document: document, className: 'editor', parent: 'xml', contentType: 'application/xml'
        })[0];
        this.orionEditor.setText(this.innerValue);
      });
  }

}
