import { Component, OnInit } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';

@Component({
  selector: 'app-calculation-info',
  templateUrl: './calculation-info.component.html',
  styleUrls: ['./calculation-info.component.css']
})
export class CalculationInfoComponent implements OnInit {

  calculation = this.calculatorDataService.calculation
  
  constructor(
    private calculatorDataService: CalculatorDataService
  ) { }

  ngOnInit(): void {
  }

}
