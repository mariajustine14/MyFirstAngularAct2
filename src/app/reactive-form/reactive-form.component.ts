import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Device } from '../models';
import { Router, ActivatedRoute } from '@angular/router';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // id: number;

  // @Input() device: Device = {
  //   id: null,
  //   name: '',
  //   brand: '',
  //   model: '',
  //   year: null,
  //   serial: ''
  // };

  @Output() update = new EventEmitter();

  deviceDetails: Device;

  updateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    brand: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(''),
    serial: new FormControl('')
  });

  constructor(
    private router: Router,
    private deviceService: DeviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.deviceDetails = this.deviceService.getDevice(this.deviceService.id);

    this.updateForm = new FormGroup({
      id: new FormControl(this.deviceDetails.id),
      name: new FormControl(this.deviceDetails.name),
      brand: new FormControl(this.deviceDetails.brand),
      model: new FormControl(this.deviceDetails.model),
      year: new FormControl(this.deviceDetails.year),
      serial: new FormControl(this.deviceDetails.serial)
    });
  }
  updateDevice() {
    // alert('update device')
    // console.log(this.updateForm.value);
    // this.update.emit(this.updateForm);
    this.router.navigate(['/list']);
    this.deviceService.updateDevice(this.updateForm.value);
  }
}
