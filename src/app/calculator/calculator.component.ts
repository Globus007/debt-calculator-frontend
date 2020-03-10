import { Component, OnInit } from '@angular/core';
import { CalculatorDataService, Bill, Payment } from '../service/data/calculator-data.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  bills = this.calculationDataService.bills
  payments = this.calculationDataService.payments

  constructor(
    private calculationDataService: CalculatorDataService
  ) { }

  addBill() {
    let lastBill = this.bills[this.bills.length-1]
    this.calculationDataService.bills.push(
      new Bill(
        lastBill.number + 1,
        new Date(lastBill.date),
        lastBill.amount)
    )
  }

  addPayment() {
    this.calculationDataService.payments.push(new Payment(new Date("2020-01-01"), 100))
  }

  makeCalculation() {
    // this.service.sendData(calculationData).subscribe (data => {
    //   console.log(data)
    // })
  }

  ngOnInit(): void {
  }

}
