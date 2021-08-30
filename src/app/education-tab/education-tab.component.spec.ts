import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationTabComponent } from './education-tab.component';

describe('EducationTabComponent', () => {
  let component: EducationTabComponent;
  let fixture: ComponentFixture<EducationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
