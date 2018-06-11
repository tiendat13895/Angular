import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoveBookComponent } from './remove-book.component';

describe('RemoveBookComponent', () => {
  let component: RemoveBookComponent;
  let fixture: ComponentFixture<RemoveBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
