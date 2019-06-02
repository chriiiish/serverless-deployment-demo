import { Component, OnInit, Input } from '@angular/core';
import { ApiResponse } from '../ApiResponse';

@Component({
  selector: 'app-api-results',
  templateUrl: './api-results.component.html',
  styleUrls: ['./api-results.component.css']
})

export class ApiResultsComponent implements OnInit {

  @Input() v1tweets: Array<ApiResponse>;
  @Input() v2tweets: Array<ApiResponse>;
  
  // v1tweets = [ {"ApiVersion":"1.0","Tweet":{"Message":"I'm a Canary Deployment","User":"Lambda"}},
  //             {"ApiVersion":"1.0","Tweet":{"Message":"I'm a Linear Deployment","User":"Lambda"}} ];
  // v2tweets = [ {"ApiVersion":"2.0","Tweet":{"Message":"I'm a Canary Deployment","User":"Lambda"}},
  //             {"ApiVersion":"2.0","Tweet":{"Message":"I'm a Linear Deployment","User":"Lambda"}} ];

  constructor() { }

  ngOnInit() {
  }

}
