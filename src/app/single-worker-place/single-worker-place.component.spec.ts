import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWorkerPlaceComponent } from './single-worker-place.component';

describe('SingleWorkerPlaceComponent', () => {
  let component: SingleWorkerPlaceComponent;
  let fixture: ComponentFixture<SingleWorkerPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleWorkerPlaceComponent]
    });
    fixture = TestBed.createComponent(SingleWorkerPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
