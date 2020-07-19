import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteAllDoctorsComponent } from './dialog-delete-all-doctors.component';

describe('DialogDeleteAllDoctorsComponent', () => {
  let component: DialogDeleteAllDoctorsComponent;
  let fixture: ComponentFixture<DialogDeleteAllDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDeleteAllDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteAllDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
