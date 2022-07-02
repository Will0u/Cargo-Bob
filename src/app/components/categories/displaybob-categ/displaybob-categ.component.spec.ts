import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybobCategComponent } from './displaybob-categ.component';

describe('DisplaybobCategComponent', () => {
  let component: DisplaybobCategComponent;
  let fixture: ComponentFixture<DisplaybobCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaybobCategComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaybobCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
