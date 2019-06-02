import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRequestorComponent } from './api-requestor.component';

describe('ApiRequestorComponent', () => {
  let component: ApiRequestorComponent;
  let fixture: ComponentFixture<ApiRequestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiRequestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiRequestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
