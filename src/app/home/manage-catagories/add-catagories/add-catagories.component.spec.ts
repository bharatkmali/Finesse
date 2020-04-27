import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatagoriesComponent } from './add-catagories.component';

describe('AddCatagoriesComponent', () => {
  let component: AddCatagoriesComponent;
  let fixture: ComponentFixture<AddCatagoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCatagoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
