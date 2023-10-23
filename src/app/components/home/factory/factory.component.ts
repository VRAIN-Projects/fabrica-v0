import { Component, ElementRef, ViewChild } from '@angular/core';
import { Action } from 'src/app/models/action.model';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent {
 
  actions: Action[] = [];

  constructor(private workerService: WorkersService) { }

  ngOnInit(): void {
    this.actions = this.workerService.getActions();
  }

  }