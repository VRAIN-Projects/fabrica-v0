import { EventEmitter, Injectable } from '@angular/core';
import { Worker } from '../models/worker.model';


@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  public workerTaskChanged: EventEmitter<void> = new EventEmitter<void>();

  private workerAux: Worker = new Worker();

  private workerSelected: Worker = new Worker();

  private workers: Worker[] = [];

  constructor(
  ) {
    this.workerAux = new Worker();
    this.workerAux.color = "var(--azul-oscuro)";
    this.workerAux.role = "Chemist";
    this.workerAux.name = "Alice";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "var(--azul-claro)";
    this.workerAux.role = "Developer";
    this.workerAux.name = "Bella";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "var(--gris)";
    this.workerAux.role = "Engineer";
    this.workerAux.name = "Debbie";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "var(--rojo)";
    this.workerAux.role = "Assembler";
    this.workerAux.name = "Frank";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "var(--verde)";
    this.workerAux.role = "Fabricator";
    this.workerAux.name = "Gaby";
    this.workers.push(this.workerAux);
  }


  public getWorkersTask (task: number) : Worker[] {
   return this.workers.filter(worker => worker.task == task);
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
        this.workers[position].task = task;
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
        this.workers[position].task = task;
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
        this.workers[position].task = 0;
        this.workerTaskChanged.emit();
      }
    }
  }
}
