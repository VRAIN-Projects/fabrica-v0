import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.css']
})
export class ConnectorComponent {
  @Input() orientation: string = "Straigth";
  @Input() top: number = 0;
  @Input() left: number = 0;
}
