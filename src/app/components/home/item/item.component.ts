import { Component, Input } from '@angular/core';
import { Worker } from 'src/app/models/worker.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() worker: Worker = new Worker();

  constructor() {
  }
}
