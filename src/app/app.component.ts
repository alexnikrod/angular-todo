import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '12';

  constructor() {
    this.changeName('Sasha')
  }

  changeName(name: string):void {
    this.name = name
  }
}
