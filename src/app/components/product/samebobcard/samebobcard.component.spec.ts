import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamebobcardComponent } from './samebobcard.component';

describe('SamebobcardComponent', () => {
  let component: SamebobcardComponent;
  let fixture: ComponentFixture<SamebobcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamebobcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamebobcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
