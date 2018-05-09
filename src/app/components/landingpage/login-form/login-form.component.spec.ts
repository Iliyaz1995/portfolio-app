import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponentDialog } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponentDialog;
  let fixture: ComponentFixture<LoginFormComponentDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponentDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponentDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
