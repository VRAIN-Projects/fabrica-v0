import { Component, Input } from '@angular/core';
import { Action } from 'src/app/models/action.model';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {
  @Input() action: Action = new Action(0, [], 0, 0);
}
