import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  // template: `
  //   <p>
  //     second works! <br />
  //     {{ secondMessage ? secondMessage : '_______' }}
  //   </p>
  // `,
  template: '<p>second works!</p>',
  styles: ['p {color:red}']
})
export class SecondComponent {}
