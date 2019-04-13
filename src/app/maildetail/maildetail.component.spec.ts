import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaildetailComponent } from './maildetail.component';

describe('MaildetailComponent', () => {
  let component: MaildetailComponent;
  let fixture: ComponentFixture<MaildetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaildetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaildetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
