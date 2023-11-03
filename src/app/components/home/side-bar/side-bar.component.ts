import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  
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
