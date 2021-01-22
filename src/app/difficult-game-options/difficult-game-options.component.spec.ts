import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultGameOptionsComponent } from './difficult-game-options.component';

describe('DifficultGameOptionsComponent', () => {
  let component: DifficultGameOptionsComponent;
  let fixture: ComponentFixture<DifficultGameOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifficultGameOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultGameOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
