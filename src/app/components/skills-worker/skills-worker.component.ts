import { Component, Input } from '@angular/core';
import { Worker } from 'src/app/models/worker.model';

@Component({
  selector: 'app-skills-worker',
  templateUrl: './skills-worker.component.html',
  styleUrls: ['./skills-worker.component.css']
})
export class SkillsWorkerComponent {
  @Input() worker: Worker = new Worker();

}
