import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficeRestoComponent } from './benefice-resto.component';

describe('BeneficeRestoComponent', () => {
  let component: BeneficeRestoComponent;
  let fixture: ComponentFixture<BeneficeRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficeRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficeRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
