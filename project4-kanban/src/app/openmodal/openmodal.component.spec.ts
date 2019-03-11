import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenmodalComponent } from './openmodal.component';

describe('OpenmodalComponent', () => {
  let component: OpenmodalComponent;
  let fixture: ComponentFixture<OpenmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
