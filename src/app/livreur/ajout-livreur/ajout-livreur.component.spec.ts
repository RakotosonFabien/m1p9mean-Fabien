import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutLivreurComponent } from './ajout-livreur.component';

describe('AjoutLivreurComponent', () => {
  let component: AjoutLivreurComponent;
  let fixture: ComponentFixture<AjoutLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutLivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
