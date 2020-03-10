import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { CalculationData } from '../data/calculator-data.service';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor(
    private http: HttpClient
  ) { }

  // sendData(data: CalculationData) {
  //   return this.http.post("http://localhost:8080/makeCalculation", data)
  // }
  
}
