import { Injectable } from '@angular/core';
import { Debtor } from './Debtor';
import { Contract } from './Contract';
import { Bill } from './Bill';
import { Payment } from './Payment';
import { CalculationRESTService } from '../rest/calculation-rest.service';
import { TransferData } from './TransferData';
import { Calculation } from './Calculation';

@Injectable({
  providedIn: 'root'
})

export class CalculatorDataService {

  debtor: Debtor
  contract: Contract
  bills: Array<Bill> = [new Bill(1, new Date("2020-01-01"), 1000)]
  payments: Array<Payment> = []
  calculationDate: Date
  totalBalance: number
  calculation: Calculation

  constructor(
    private restService: CalculationRESTService
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

  makeCalculation() {

    let transferData = new TransferData(
      this.debtor,
      this.contract,
      this.bills,
      this.payments,
      this.calculationDate,
      this.totalBalance
    )

    console.log(transferData)
    this.restService.sendData(transferData).subscribe((data: Calculation) => {
      this.calculation = data
      console.log(this.calculation)
    })
  }
}
