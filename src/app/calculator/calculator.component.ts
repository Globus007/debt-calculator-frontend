import { Component, OnInit } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';
import { Payment } from "../service/data/Payment";
import { Bill } from "../service/data/Bill";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  bills = this.calculatorDataService.bills
  payments = this.calculatorDataService.payments

  constructor(
    private calculatorDataService: CalculatorDataService
  ) { }

  addBill() {
    this.calculatorDataService.bills.push(
      new Bill(0)
    )
  }

  addPayment() {
    this.calculatorDataService.payments.push(
      new Payment(0)
    )
  }

  ngOnInit(): void {
  }

  hasCalculation() {
    if (this.calculatorDataService.calculation) {
      return true
    }
    return false
  }

}
