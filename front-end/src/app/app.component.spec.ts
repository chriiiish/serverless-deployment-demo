import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

    var foundCanary = false;
    var panelTitles = compiled.querySelectorAll('div.panel h3')

    panelTitles.forEach(element => {
      if (element.innerHTML == "Canary"){
        foundCanary = true;
      }
    });

    expect(foundCanary).toBe(true);
  });

  it('should have a linear panel', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    
    var foundCanary = false;
    var panelTitles = compiled.querySelectorAll('div.panel h3')

    panelTitles.forEach(element => {
      if (element.innerHTML == "Linear"){
        foundCanary = true;
      }
    });

    expect(foundCanary).toBe(true);
  });
});
