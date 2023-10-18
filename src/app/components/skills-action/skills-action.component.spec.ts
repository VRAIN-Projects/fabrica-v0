import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsActionComponent } from './skills-action.component';

describe('SkillsActionComponent', () => {
  let component: SkillsActionComponent;
  let fixture: ComponentFixture<SkillsActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsActionComponent]
    });
    fixture = TestBed.createComponent(SkillsActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
