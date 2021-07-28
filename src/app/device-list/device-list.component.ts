import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from './../models';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
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
  constructor(private router: Router) {}

  ngOnInit(): void {}

  addDevice() {
    this.router.navigate(['/add']);
  }
}
