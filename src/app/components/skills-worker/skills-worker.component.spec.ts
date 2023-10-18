import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsWorkerComponent } from './skills-worker.component';

describe('SkillsWorkerComponent', () => {
  let component: SkillsWorkerComponent;
  let fixture: ComponentFixture<SkillsWorkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsWorkerComponent]
    });
    fixture = TestBed.createComponent(SkillsWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
