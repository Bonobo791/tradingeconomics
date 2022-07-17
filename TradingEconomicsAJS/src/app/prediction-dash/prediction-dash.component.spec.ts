import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionDashComponent } from './prediction-dash.component';

describe('PredictionDashComponent', () => {
  let component: PredictionDashComponent;
  let fixture: ComponentFixture<PredictionDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictionDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
