import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpencesComponent } from './edit-expences.component';

describe('EditExpencesComponent', () => {
  let component: EditExpencesComponent;
  let fixture: ComponentFixture<EditExpencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExpencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExpencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
