import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @Output() deviceDetails = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addDevice(form: NgForm) {
    // this.deviceDetails.emit(form.value);
    console.log(form.value);
    this.router.navigate(['/list']);
  }
}
