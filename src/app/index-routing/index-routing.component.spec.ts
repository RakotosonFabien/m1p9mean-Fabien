import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRoutingComponent } from './index-routing.component';

describe('IndexRoutingComponent', () => {
  let component: IndexRoutingComponent;
  let fixture: ComponentFixture<IndexRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
