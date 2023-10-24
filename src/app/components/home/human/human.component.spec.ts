import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanComponent } from './human.component';

describe('WorkerComponent', () => {
  let component: HumanComponent;
  let fixture: ComponentFixture<HumanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumanComponent]
    });
    fixture = TestBed.createComponent(HumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
