import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent {
  @Input() color: string = 'black';

  constructor() { 
    
  }

}
