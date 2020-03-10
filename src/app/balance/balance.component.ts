import { Component, OnInit } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor(
    private calculatorDataService: CalculatorDataService
  ) { }

  ngOnInit(): void {
  }

  countTotalBalance() {
    return this.calculatorDataService.countTotalBalance()
  }

}
