import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybobComponent } from './displaybob.component';

describe('DisplaybobComponent', () => {
  let component: DisplaybobComponent;
  let fixture: ComponentFixture<DisplaybobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaybobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaybobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
