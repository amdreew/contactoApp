import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterContactComponent } from './master-contact.component';

describe('MasterContactComponent', () => {
  let component: MasterContactComponent;
  let fixture: ComponentFixture<MasterContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
