import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesTabComponent } from './experiences-tab.component';

describe('ExperiencesTabComponent', () => {
  let component: ExperiencesTabComponent;
  let fixture: ComponentFixture<ExperiencesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
