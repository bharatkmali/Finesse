import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeExpencesComponent } from './mange-expences.component';

describe('MangeExpencesComponent', () => {
  let component: MangeExpencesComponent;
  let fixture: ComponentFixture<MangeExpencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangeExpencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeExpencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
