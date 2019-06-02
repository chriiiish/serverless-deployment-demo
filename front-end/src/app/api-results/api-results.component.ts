import { Component, OnInit, Input } from '@angular/core';
import { ApiResponse } from '../models/ApiResponse';

@Component({
  selector: 'app-api-results',
  templateUrl: './api-results.component.html',
  styleUrls: ['./api-results.component.css']
})

export class ApiResultsComponent implements OnInit {

  @Input() v1tweets: Array<ApiResponse>;
  @Input() v2tweets: Array<ApiResponse>;

  constructor() { }

  ngOnInit() {
  }

}
