import { Component } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent {
 color : string = 'black';

 setColor(color : string) {
    this.color = color;
  }
}
