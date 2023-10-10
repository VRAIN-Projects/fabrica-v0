import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleWorkerPlaceComponent } from './multiple-worker-place.component';

describe('MultipleWorkerPlaceComponent', () => {
  let component: MultipleWorkerPlaceComponent;
  let fixture: ComponentFixture<MultipleWorkerPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleWorkerPlaceComponent]
    });
    fixture = TestBed.createComponent(MultipleWorkerPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
