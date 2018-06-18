import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JtcClassComponent } from './jtc-class.component';

describe('JtcClassComponent', () => {
  let component: JtcClassComponent;
  let fixture: ComponentFixture<JtcClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JtcClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JtcClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
