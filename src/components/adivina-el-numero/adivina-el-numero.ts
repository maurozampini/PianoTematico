import { Component } from '@angular/core';

/**
 * Generated class for the AdivinaElNumeroComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'adivina-el-numero',
  templateUrl: 'adivina-el-numero.html'
})
export class AdivinaElNumeroComponent {

  text: string;

  constructor() {
    console.log('Hello AdivinaElNumeroComponent Component');
    this.text = 'Hello World';
  }

}
