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
    let lastBill = this.bills[this.bills.length - 1]
    this.calculatorDataService.bills.push(
      new Bill(
        lastBill.number + 1,
        new Date(lastBill.date),
        lastBill.amount)
    )
  }

  addPayment() {
    this.calculatorDataService.payments.push(
      new Payment(new Date("2020-01-01"), 100)
    )
  }

  ngOnInit(): void {
  }

}
