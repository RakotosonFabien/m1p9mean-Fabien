import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePlatVaovaoComponent } from './fiche-plat-vaovao.component';

describe('FichePlatVaovaoComponent', () => {
  let component: FichePlatVaovaoComponent;
  let fixture: ComponentFixture<FichePlatVaovaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichePlatVaovaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichePlatVaovaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
