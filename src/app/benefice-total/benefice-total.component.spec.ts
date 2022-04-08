import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficeTotalComponent } from './benefice-total.component';

describe('BeneficeTotalComponent', () => {
  let component: BeneficeTotalComponent;
  let fixture: ComponentFixture<BeneficeTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficeTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficeTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
