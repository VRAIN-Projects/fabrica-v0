import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerPlaceComponent } from './worker-place.component';

describe('WorkerPlaceComponent', () => {
  let component: WorkerPlaceComponent;
  let fixture: ComponentFixture<WorkerPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerPlaceComponent]
    });
    fixture = TestBed.createComponent(WorkerPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
