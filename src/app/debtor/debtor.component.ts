import { Component, OnInit } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';

@Component({
  selector: 'app-debtor',
  templateUrl: './debtor.component.html',
  styleUrls: ['./debtor.component.css']
})
export class DebtorComponent implements OnInit {

  debtor = this.calculatorDataService.debtor

  constructor(
    private calculatorDataService: CalculatorDataService
  ) { }

  ngOnInit(): void {
  }

}
