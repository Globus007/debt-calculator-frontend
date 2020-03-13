import { Component, OnInit } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';

@Component({
  selector: 'app-calculation-date',
  templateUrl: './calculation-date.component.html',
  styleUrls: ['./calculation-date.component.css']
})
export class CalculationDateComponent implements OnInit {

  calculationDate = this.calculatorDataService.calculationDate

  constructor(
    private calculatorDataService: CalculatorDataService
  ) { }

  ngOnInit(): void {
  }

  setCalculationDate(date: Date) {
    this.calculatorDataService.calculationDate = date
  }
  
  makeCalculation() {
    this.calculatorDataService.makeCalculation()
  }
}
