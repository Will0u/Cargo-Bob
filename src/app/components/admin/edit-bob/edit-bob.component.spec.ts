import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBobComponent } from './edit-bob.component';

describe('EditBobComponent', () => {
  let component: EditBobComponent;
  let fixture: ComponentFixture<EditBobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
