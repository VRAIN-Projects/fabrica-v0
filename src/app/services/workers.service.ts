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

  constructor(
  ) {
    this.workerAux = new Worker();
    this.workerAux.color = "red";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "blue";
    this.workers.push(this.workerAux);

    this.workerAux = new Worker();
    this.workerAux.color = "green";
    this.workers.push(this.workerAux);

  }

  public getWorkerTask1 () : Worker[] {
    return this.workerTask1;
  }

  public getWorkers() : Worker[] {
    return this.workers;
  }

  public setChangingWorker(worker : Worker) {
    this.workerSelected = worker;
  }

  public changeList() : void {
    let position = this.workers.indexOf(this.workerSelected)
    //If we find the worker
    if ( position != -1){
      //Add worker to workerplaceMultiple
      this.workerTask1.push(this.workerSelected);
      //Remove the worker from workers
      this.workers.splice(position, 1);
    }
  }
}
