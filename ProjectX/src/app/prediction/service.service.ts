import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServiceService {
  public asset: string; 
  public startDate: string = '';
  public endDate: string = ''; 
  private REST_API_SERVER = 'http://localhost:5000/knnpred?company=';
  public HIT = 'http://localhost:5000/del';
  constructor( private http: HttpClient ) { }
  public sendGetRequest()  {
    return this.http.get(this.REST_API_SERVER + this.asset + '&start=' + this.startDate + '&end=' + this.endDate)
    //console.log(response));
  }
  public hit(){
    return this.http.get(this.HIT)
  }
}
