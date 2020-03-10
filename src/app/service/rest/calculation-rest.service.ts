import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferData } from '../data/TransferData';

@Injectable({
  providedIn: 'root'
})
export class CalculationRESTService {

  constructor(
    private http: HttpClient
  ) { }

  sendData(data: TransferData) {
    return this.http.post("http://localhost:8080/makeCalculation", data)
  }
}
