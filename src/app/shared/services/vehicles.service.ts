import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http:HttpClient) { }

  getVehicles(loadOptions:any):Promise<any>{
    return this.http.post('http://localhost:9000/api/getVehicle ', loadOptions).toPromise();
  }
}
