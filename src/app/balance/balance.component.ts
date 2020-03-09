import { Component, OnInit } from '@angular/core';
import { bills } from '.././calculator/calculator.component';
import { payments } from '.././calculator/calculator.component';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countTotalBalance() {

    let totalBalance = 0

    bills.forEach(bill => {
      totalBalance += bill.amount
    });

    payments.forEach(payment => {
      totalBalance -= payment.amount
    })

    console.log("total balance: " + totalBalance)
    return totalBalance
  }

}
