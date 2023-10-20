import { EventEmitter, Injectable } from '@angular/core';
import { Worker } from '../models/worker.model';
import { Skill } from '../models/skill.model';

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
    new Skill("Fabricator", "gray")
  ];

  private workerAux: Worker = new Worker();

  private workerSelected: Worker = new Worker();

  private workers: Worker[] = [];

  constructor(
  ) {
    this.workerAux = new Worker();
    this.workerAux.color = "var(--azul-oscuro)";
    this.workerAux.name = "Alice";
    this.workerAux.skills = [this.allSkills[0], this.allSkills[1]];
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "var(--azul-claro)";
    this.workerAux.skills = [this.allSkills[0], this.allSkills[3]];
    this.workerAux.name = "Bella";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "var(--gris)";
    this.workerAux.skills = [this.allSkills[1], this.allSkills[2], this.allSkills[3]];
    this.workerAux.name = "Debbie";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "var(--rojo)";
    this.workerAux.skills = [this.allSkills[2], this.allSkills[3], this.allSkills[4]];
    this.workerAux.name = "Frank";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "var(--verde)";
    this.workerAux.skills = [this.allSkills[0], this.allSkills[4]];
    this.workerAux.name = "Gaby";
    this.workers.push(this.workerAux);

  }


  public getWorkersTask (task: number) : Worker[] {
   return this.workers.filter(worker => worker.action == task);
  }

  public getWorkers() : Worker[] {
    return this.workers;
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
}
