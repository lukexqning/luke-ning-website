import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesTabComponent } from './hobbies-tab.component';

describe('HobbiesTabComponent', () => {
  let component: HobbiesTabComponent;
  let fixture: ComponentFixture<HobbiesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
