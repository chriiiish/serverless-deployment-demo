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

  it('should have an input box', () => {
    expect(fixture.nativeElement.querySelectorAll('input').length).toBe(1);
  });

  it('should have a button', () => {
    expect(fixture.nativeElement.querySelectorAll('button').length).toBe(1);
  });

  it('should say "Go" on the button on start', () => {
    expect(fixture.nativeElement.querySelector('button').textContent).toBe('Go');
  });
});
