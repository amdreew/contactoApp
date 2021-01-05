import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapperbinComponent } from './papperbin.component';

describe('PapperbinComponent', () => {
  let component: PapperbinComponent;
  let fixture: ComponentFixture<PapperbinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapperbinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapperbinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
