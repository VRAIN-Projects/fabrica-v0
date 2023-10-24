import { Component, Input } from '@angular/core';
import { Worker } from '../../../models/worker.model';

@Component({
  selector: 'app-worker',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent {
  @Input() worker: Worker = new Worker();
  @Input() origin: boolean = false;

  constructor() { 
    
  }


}
