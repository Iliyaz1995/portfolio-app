import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestEnterComponent } from './guest-enter.component';

describe('GuestEnterComponent', () => {
  let component: GuestEnterComponent;
  let fixture: ComponentFixture<GuestEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
