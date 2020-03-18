import { Injectable } from '@angular/core';
import { Debtor } from './Debtor';
import { Contract } from './Contract';
import { Bill } from './Bill';
import { Payment } from './Payment';
import { CalculationRESTService } from '../rest/calculation-rest.service';
import { TransferData } from './TransferData';
import { Calculation } from './Calculation';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CalculatorDataService {

  debtor: Debtor
  contract: Contract
  bills: Array<Bill> = [new Bill(0)]
  payments: Array<Payment> = []
  calculationDate: Date
  totalBalance: number
  calculation: Calculation

  error: HttpErrorResponse

  constructor(
    private restService: CalculationRESTService
  ) {
    this.debtor = new Debtor()
    this.contract = new Contract()
  }

  countTotalBalance() {
    let totalBalance: number = 0
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

    // console.log(transferData)
    this.restService.sendData(transferData).subscribe((data: Calculation) => {
      this.calculation = data
      // console.log(this.calculation)
    }, error => {
      this.error = error      
    })
  }
}
