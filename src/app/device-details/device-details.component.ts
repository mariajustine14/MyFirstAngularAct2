import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Device } from './../models';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {
  @Input() deviceDetail: Device;

  @Output() updateDetail: EventEmitter<any> = new EventEmitter();

  updateDevice() {
    this.updateDetail.emit(true);
  }

  constructor() {}

  ngOnInit(): void {}
}
