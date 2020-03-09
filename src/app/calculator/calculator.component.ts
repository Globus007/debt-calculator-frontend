import { Component, OnInit } from '@angular/core';

export class Bill {
  constructor(
    public number?: number,
    public date?: Date,
    public amount?: number
  ) { }
}

export class Payment {
  constructor(
    public date?: Date,
    public amount?: number
  ) {}
}

export let bills: Array<Bill> = [new Bill(1, new Date("2020-01-01"), 1000)]
export let payments: Array<Payment> = []

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  bills = bills
  payments = payments

  addBill() {
    bills.push(new Bill(1, new Date("2020-01-01"), 1000))
  }

  addPayment() {
    payments.push(new Payment(new Date("2020-01-01"), 100))
  }

  constructor() { }

  ngOnInit(): void {
  }

}
