import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRestoComponent } from './index-resto.component';

describe('IndexRestoComponent', () => {
  let component: IndexRestoComponent;
  let fixture: ComponentFixture<IndexRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
