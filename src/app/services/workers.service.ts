import { Injectable } from '@angular/core';
import { Worker } from '../models/worker.model';


@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  private workerAux: Worker = new Worker();

  private workerSelected: Worker = new Worker();

  private workers: Worker[] = [];
  private workerTask1: Worker[] = [];
  private workerTask2: Worker[] = [];

  constructor(
  ) {
    this.workerAux = new Worker();
    this.workerAux.color = "var(--azul-oscuro)";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "var(--azul-claro)";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "var(--gris)";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "var(--rojo)";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "var(--verde)";
    this.workers.push(this.workerAux);
  }

  public getWorkerTask (task: number) : Worker[] {
    if(task == 1){
      return this.workerTask1;
    } else {
      if(task == 2){
        return this.workerTask2;
      } else {
        console.error("Error, la lista no existe en el servicio");
        return [];
      }
    }
  }

  public getWorkers() : Worker[] {
    return this.workers;
  }

  public setChangingWorker(worker : Worker) {
    this.workerSelected = worker;
  }

  public changeList(task: number) : void {
    let position = this.workers.indexOf(this.workerSelected)
    //If we find the worker
    if ( position != -1){
      //Add worker to workerplaceMultiple
      if(task == 1){
        this.workerTask1.push(this.workerSelected);
      } else {
        if(task == 2){
          this.workerTask2.push(this.workerSelected);
        } else {
          console.error("Error, la lista no existe en el servicio");
        }
      }
      //Remove the worker from workers
      this.workers.splice(position, 1);
    }
  }
}
