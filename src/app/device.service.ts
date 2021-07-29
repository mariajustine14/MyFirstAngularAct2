import { Injectable } from '@angular/core';
import { Device } from './models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
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

  id: number;

  constructor() {}

  getDevices() {
    return this.deviceDetails;
  }
  addDevice(device: Device) {
    this.deviceDetails.push(device);
    console.log(this.deviceDetails);
  }
  getDevice(id: number): Device {
    console.log('SERVICE_ID', id);
    return this.deviceDetails.find(device => device.id === id);
  }
  updateDevice(updatedDevice: Device) {
    let index = this.deviceDetails.findIndex(
      device => device.id === updatedDevice.id
    );

    this.deviceDetails[index] = updatedDevice;
  }
  getNewId(): number {
    return this.deviceDetails[this.deviceDetails.length - 1].id + 1;
  }
}
