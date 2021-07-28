import { Component, Output, EventEmitter } from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Output() appEvent = new EventEmitter();

  title = 'My First Angular Component';

  showUpdate = false;
  selectedDevice;

  deviceDetails: Device[] = [
    {
      id: 0,
      name: 'Device01',
      brand: 'Lenovo',
      model: 'ITZ400',
      year: 2021,
      serial: '123456ertyy'
    },
    {
      id: 1,
      name: 'Device02',
      brand: 'Dell',
      model: 'Vostro 1320',
      year: 2014,
      serial: 'asdfqwe11111'
    }
  ];

  // addDevice(device: Device) {
  //   device.id = this.devices.length;
  //   this.devices.push(device);
  //   console.log(this.devices);
  // }

  // addDevice(device: Device) {
  //   this.devices.push(device as Device);

  updateDevice(event, id) {
    this.showUpdate = event;
    this.selectedDevice = this.deviceDetails.find(device => device.id === id);
  }

  updateDisplay(event) {
    this.deviceDetails.forEach(device => {
      if (device.id === event.value.id) {
        device.name = event.value.name;
        device.brand = event.value.brand;
        device.model = event.value.model;
        device.year = event.value.year;
        device.serial = event.value.serial;
      }
    });

    this.showUpdate = false;
  }
}
