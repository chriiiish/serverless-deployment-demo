import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRequestorComponent } from './api-requestor.component';
import { ApiResultsComponent } from '../api-results/api-results.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('ApiRequestorComponent', () => {
  let component: ApiRequestorComponent;
  let fixture: ComponentFixture<ApiRequestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiRequestorComponent, ApiResultsComponent ],
      imports: [ BrowserModule, HttpClientModule ]
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
