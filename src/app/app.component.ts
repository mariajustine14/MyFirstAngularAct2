import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular Component';
  appMessage = '';

  appEvent(event: any) {
    this.appMessage = event;
  }
}
