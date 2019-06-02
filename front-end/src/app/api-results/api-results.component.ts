import { Component, OnInit, Input } from '@angular/core';
import { ApiResponse } from '../models/ApiResponse';

@Component({
  selector: 'app-api-results',
  templateUrl: './api-results.component.html',
  styleUrls: ['./api-results.component.css']
})

export class ApiResultsComponent implements OnInit {

  @Input() public v1tweets: Array<ApiResponse>;
  @Input() public v2tweets: Array<ApiResponse>;

  constructor() { }

  ngOnInit() {
  }

}
