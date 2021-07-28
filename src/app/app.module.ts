import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FirstComponent } from './first/first.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DeviceListComponent } from './device-list/device-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FirstComponent,
    DeviceDetailsComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    DeviceListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
