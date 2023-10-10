import { Component, Input } from '@angular/core';
import { CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-single-worker-place',
  templateUrl: './single-worker-place.component.html',
  styleUrls: ['./single-worker-place.component.css']
})
export class SingleWorkerPlaceComponent {

  @Input() color: string = 'black';

  onDrop(event: CdkDragDrop<Worker[]>) {
    //hide the worker
    const icon = document.getElementById("icon");

    if (icon) {
      icon.classList.add("hide");    
    }
  }

  onDrag(event: CdkDragDrop<Worker>) {
    //show the worker


  }
  onDragStarted(event: CdkDrag) {
    const icon = document.getElementById("icon");

    if (icon) {
      icon.classList.remove("hide");    
    }
  }


}
