import { Component } from '@angular/core';

@Component({
  selector: 'app',
  providers: [],
  template: `
    <div>
      <h2>Hello {{name}}</h2>
      <a [routerLink]="['eager']">eager</a>
      <a [routerLink]="['lazy']">lazy</a>
      <router-outlet></router-outlet>
    </div>
  `
})
export class App {
  name;
  constructor() {
    this.name = 'Angular2 (Release Candidate!)';
  }
}
