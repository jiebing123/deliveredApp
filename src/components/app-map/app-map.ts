import { Component } from '@angular/core';

/**
 * Generated class for the AppMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-map',
  templateUrl: 'app-map.html'
})
export class AppMapComponent {

  text: string;

  constructor() {
    console.log('Hello AppMapComponent Component');
    this.text = 'Hello World';
  }

}
