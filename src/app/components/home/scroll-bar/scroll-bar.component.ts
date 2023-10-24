import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.css']
})
export class ScrollBarComponent {
  
  //It can be robots or humans
  optionToggleRobotsOrHumans: string = 'humans';

  toggleRobotsOrHumans() {
    if (this.optionToggleRobotsOrHumans == 'humans') {
      this.optionToggleRobotsOrHumans = 'robots';
    } else {
      this.optionToggleRobotsOrHumans = 'humans';
    }
  }



}
