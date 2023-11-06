import { EventEmitter, Injectable } from '@angular/core';
import { Worker } from '../models/worker.model';
import { Skill } from '../models/skill.model';
import { Action } from '../models/action.model';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  public workerTaskChanged: EventEmitter<void> = new EventEmitter<void>();

  private allSkills: Skill[] = [
    new Skill("Chemist", "red"),
    new Skill("Developer", "blue"),
    new Skill("Engineer", "green"),
    new Skill("Assembler", "yellow"),
    new Skill("Fabricator", "brown")
  ];

  private workerAux: Worker = new Worker();

  private workerSelected: Worker = new Worker();

  private workers: Worker[] = [];

  private actions: Action[] = [
    new Action(1, [this.allSkills[0]], 10, 0),
    new Action(2, [this.allSkills[1], this.allSkills[3]], 10, 160),
    new Action(3, [this.allSkills[0], this.allSkills[4]], 10, 320),
    new Action(4, [this.allSkills[0], this.allSkills[1], this.allSkills[2]], 10, 480),
    new Action(5, [this.allSkills[0], this.allSkills[1], this.allSkills[2]], 10, 640),
    new Action(6, [this.allSkills[1]], 160, 65),
    new Action(7, [this.allSkills[2]], 160, 370),
    new Action(8, [this.allSkills[2]], 160, 640),
    new Action(9, [this.allSkills[3]], 310, 0),
    new Action(10, [this.allSkills[4]], 310, 160),
    new Action(11, [this.allSkills[4]], 310, 480),
    new Action(12, [this.allSkills[4]], 10, 800),
    new Action(13, [this.allSkills[4]], 160, 800),

  ];
  
  constructor(
  ) {
    this.workerAux = new Worker();
    this.workerAux.color = "var(--azul-oscuro)";
    this.workerAux.name = "Alice";
    this.workerAux.isHuman = true;
    this.workerAux.skills = [this.allSkills[0], this.allSkills[1]];
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "var(--azul-claro)";
    this.workerAux.skills = [this.allSkills[0], this.allSkills[3]];
    this.workerAux.isHuman = true;
    this.workerAux.name = "Bella";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "var(--gris)";
    this.workerAux.skills = [this.allSkills[1], this.allSkills[2], this.allSkills[3]];
    this.workerAux.isHuman = true;
    this.workerAux.name = "Debbie";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "var(--rojo)";
    this.workerAux.skills = [this.allSkills[2], this.allSkills[3], this.allSkills[4]];
    this.workerAux.isHuman = true;
    this.workerAux.name = "Frank";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "blue";
    this.workerAux.skills = [this.allSkills[1], this.allSkills[4]];
    this.workerAux.isHuman = false;
    this.workerAux.name = "Robot1";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "red";
    this.workerAux.skills = [this.allSkills[0]];
    this.workerAux.isHuman = false;
    this.workerAux.name = "Robot2";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "green";
    this.workerAux.skills = [this.allSkills[1]];
    this.workerAux.isHuman = false;
    this.workerAux.name = "Robot3";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "brown";
    this.workerAux.skills = [this.allSkills[2]];
    this.workerAux.isHuman = false;
    this.workerAux.name = "Robot4";
    this.workers.push(this.workerAux);
  }

  public getWorkersTask (task: number) : Worker[] {
   return this.workers.filter(worker => worker.action == task);
  }

  
  public getWorkers() : Worker[] {
    return this.workers;
  }

  //Get human workers
  public getHumanWorkers() : Worker[] {
    return this.workers.filter(worker => worker.isHuman == true);
  }

  //Get non-human workers
  public getNonHumanWorkers() : Worker[] {
    return this.workers.filter(worker => worker.isHuman == false);
  }

  public setChangingWorker(worker : Worker) {
    this.workerSelected = worker;
  }

  public getChangingWorker() : Worker {
    return this.workerSelected;
  }

  public changeListFromSingleToMultiple(task: number) : void {
    //Search the worker in the list
    let position = this.workers.indexOf(this.workerSelected);

    //If we find the worker
    if ( position > -1){
      //We change the task, check first if the Object is not possibly 'undefined'
      if(this.workers !== undefined && this.workers[position] !== undefined){
        this.workers[position].action = task;
      }
    }
  }

  public changeListFromMultipleToMultiple(task: number) : void {
    //Search the worker in the list
    let position = this.workers.indexOf(this.workerSelected);

    //If we find the worker
    if ( position > -1){
      //We change the task, check first if the Object is not possibly 'undefined'
      if(this.workers !== undefined && this.workers[position] !== undefined){
        this.workers[position].action = task;
        this.workerTaskChanged.emit();
      }
    }
  }

  public changeListFromMultipleToSingle() : void {
    let position = this.workers.indexOf(this.workerSelected);

    //If we find the worker
    if ( position > -1){
      // Check if the worker object is not undefined before accessing its properties
      if(this.workers[position] !== undefined){
        this.workers[position].action = 0;
        this.workerTaskChanged.emit();
      }
    }
  }

  getActions() : Action[] {
    return this.actions;
  }
  
}
