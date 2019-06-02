import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../ApiResponse';
import { CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-api-requestor',
  templateUrl: './api-requestor.component.html',
  styleUrls: ['./api-requestor.component.css']
})
export class ApiRequestorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  interval = undefined; // The refresh timer interval
  v1responses = [];     // V1 API Responses
  v2responses = [];     // V2 API Responses
  updateMethod;         // The method called to get url responses
  startRequests = true; // Should the next button click start requests

  ngOnInit() { 
    this.updateMethod = this.Update;
  }

  ToggleRequests(event: any, url:string){
    if (this.startRequests){
      this.StartRequests(event, url);
    }else{
      this.StopRequests(event);
    }
    this.startRequests = !this.startRequests;
  }

  StartRequests(event: any, url:string)
  {
    // Start updating the records
    var responses = new Array<ApiResponse>();
    this.updateMethod = this.Update;
    this.updateMethod(this, url, responses);
  }

  StopRequests(event: any){
    this.updateMethod = this.HaltUpdate;
  }

  Update(context: ApiRequestorComponent, url: string, responses: ApiResponse[])
  {
    // Get 10 Requests
    if (responses.length < 10){
      context.http.get(url).subscribe(function(context: ApiRequestorComponent, url: string, responses: ApiResponse[]){
        return function(response: ApiResponse){
        console.log(response);
        responses.push(response);
        context.updateMethod(context, url, responses);
      }}(context, url, responses));
    } else {
      // Process the responses

      // Sort them into V1 and V2
      var v1 = [];
      var v2 = [];

      responses.forEach(response => {
        if (response.ApiVersion == "1.0"){
          v1.push(response);
        }else{
          v2.push(response);
        }        
      });

      // Set the values
      context.v1responses = v1;
      context.v2responses = v2;
      console.log("Assigned new responses");
      responses = new Array<ApiResponse>();
      console.log(responses);
      setTimeout(context.updateMethod, 1000, context, url, responses);
    }
  }

  HaltUpdate(context: ApiRequestorComponent, url: string, responses: ApiResponse[])
  { 
    console.log("stopped loop");
  };
}
