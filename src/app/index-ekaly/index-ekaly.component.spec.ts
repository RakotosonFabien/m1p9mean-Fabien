import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEkalyComponent } from './index-ekaly.component';

describe('IndexEkalyComponent', () => {
  let component: IndexEkalyComponent;
  let fixture: ComponentFixture<IndexEkalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexEkalyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexEkalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
