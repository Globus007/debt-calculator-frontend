import { Component, OnInit } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  contract = this.calculatorDataService.contract

  constructor(
    private calculatorDataService: CalculatorDataService
  ) { }

  ngOnInit(): void {
  }

}
