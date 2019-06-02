import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiResultsComponent } from './api-results.component';

describe('ApiResultsComponent', () => {
  let component: ApiResultsComponent;
  let fixture: ComponentFixture<ApiResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no tweets to start with', () => {
    expect(fixture.nativeElement.querySelectorAll('.tweet').length).toBe(0);
  });

  it('should show v1 tweets', () => {
    component.v1tweets = [
      { ApiVersion: "1.0", Tweet: { Message: "MessageOne", User: "UserOne" }},
      { ApiVersion: "1.0", Tweet: { Message: "MessageTwo", User: "UserTwo" }}
    ];
    
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.tweet').length).toBe(2);
  });

  it('should show v2 tweets', () => {
    component.v2tweets = [
      { ApiVersion: "2.0", Tweet: { Message: "MessageOne", User: "UserOne" }},
      { ApiVersion: "2.0", Tweet: { Message: "MessageTwo", User: "UserTwo" }}
    ];

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.tweet').length).toBe(2);
  });

  it('should not show v1 tweets', () => {
    component.v2tweets = [
      { ApiVersion: "2.0", Tweet: { Message: "MessageOne", User: "UserOne" }},
      { ApiVersion: "2.0", Tweet: { Message: "MessageTwo", User: "UserTwo" }}
    ];

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.tweet.v1').length).toBe(0);
  });

  it('should not show v2 tweets', () => {
    component.v1tweets = [
      { ApiVersion: "1.0", Tweet: { Message: "MessageOne", User: "UserOne" }},
      { ApiVersion: "1.0", Tweet: { Message: "MessageTwo", User: "UserTwo" }}
    ];

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.tweet.v2').length).toBe(0);
  });

  it('should show v1 AND v2 tweets', () => {
    component.v1tweets = [
      { ApiVersion: "1.0", Tweet: { Message: "MessageOne", User: "UserOne" }},
      { ApiVersion: "1.0", Tweet: { Message: "MessageTwo", User: "UserTwo" }},
      { ApiVersion: "1.0", Tweet: { Message: "MessageThree", User: "UserThree" }}
    ];
    component.v2tweets = [
      { ApiVersion: "2.0", Tweet: { Message: "MessageFour", User: "UserFour" }},
      { ApiVersion: "2.0", Tweet: { Message: "MessageFive", User: "UserFive" }}
    ];

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.tweet.v1').length).toBe(3);
    expect(fixture.nativeElement.querySelectorAll('.tweet.v2').length).toBe(2);
  });
});
