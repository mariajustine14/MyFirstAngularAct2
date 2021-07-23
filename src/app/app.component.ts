import { Component, Output, EventEmitter } from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() appEvent = new EventEmitter();
  title = 'My First Angular Component';

  devices: Device[] = [
    {
      name: 'Device01',
      brand: 'Lenovo',
      model: 'ITZ400',
      year: 2021,
      serial: '123456ertyy'
    },
    {
      name: 'Device02',
      brand: 'Dell',
      model: 'Vostro 1320',
      year: 2014,
      serial: 'asdfqwe11111'
    }
  ];
}
