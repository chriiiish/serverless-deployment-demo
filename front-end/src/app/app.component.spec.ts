import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApiRequestorComponent } from './api-requestor/api-requestor.component';
import { ApiResultsComponent } from './api-results/api-results.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ApiRequestorComponent,
        ApiResultsComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Deployment Method Demonstrator');
  });

  it('should have a canary panel', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.panel h3').textContent).toEqual('Canary');
  });
});
