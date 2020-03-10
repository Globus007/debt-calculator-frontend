import { Injectable } from '@angular/core';
import { Debtor } from './Debtor';
import { Contract } from './Contract';
import { Bill } from './Bill';
import { Payment } from './Payment';

@Injectable({
  providedIn: 'root'
})

export class CalculatorDataService {

  debtor: Debtor
  contract: Contract
  calculationData: number
  bills: Array<Bill> = [new Bill(1, new Date("2020-01-01"), 1000)]
  payments: Array<Payment> = []
  calculationDate: Date
  totalBalance: number

  constructor(
  ) {
    //  init test parameters
    this.debtor = new Debtor(
      "ООО Печки-лавочки",
      "246005 г. Могилев, ул. Рабочая, 3"
    )
    this.contract = new Contract(
      22,
      new Date("2019-01-01"),
      new Date("2020-01-01"),
      10
    )
    this.calculationDate = new Date("2020-03-08")
  }

  countTotalBalance() {
    let totalBalance = 0
    this.bills.forEach(bill => {
      totalBalance += bill.amount
    });
    this.payments.forEach(payment => {
      totalBalance -= payment.amount
    })
    return totalBalance
  }


}
