import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-results',
  templateUrl: './api-results.component.html',
  styleUrls: ['./api-results.component.css']
})

export class ApiResultsComponent implements OnInit {

  v1tweets = [ {"ApiVersion":"1.0","Tweet":{"Message":"I'm a Canary Deployment","User":"Lambda"}},
              {"ApiVersion":"1.0","Tweet":{"Message":"I'm a Linear Deployment","User":"Lambda"}} ];
  v2tweets = [ {"ApiVersion":"2.0","Tweet":{"Message":"I'm a Canary Deployment","User":"Lambda"}},
              {"ApiVersion":"2.0","Tweet":{"Message":"I'm a Linear Deployment","User":"Lambda"}} ];

  constructor() { }

  ngOnInit() {
  }

}
