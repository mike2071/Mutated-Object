import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MutatedObject';

  config = {
    position: 'top'
  };

  onClick() {
    this.config.position = 'bottom';

    // Change reference to object
    // this.config = {
    //   position: 'bottom'
    // }
  }
}
