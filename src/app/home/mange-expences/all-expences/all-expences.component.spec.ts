import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExpencesComponent } from './all-expences.component';

describe('AllExpencesComponent', () => {
  let component: AllExpencesComponent;
  let fixture: ComponentFixture<AllExpencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllExpencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllExpencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
