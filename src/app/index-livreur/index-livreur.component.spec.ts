import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLivreurComponent } from './index-livreur.component';

describe('IndexLivreurComponent', () => {
  let component: IndexLivreurComponent;
  let fixture: ComponentFixture<IndexLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexLivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
