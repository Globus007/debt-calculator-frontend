import { Injectable } from '@angular/core';
import { Debtor } from './Debtor';
import { Contract } from './Contract';
import { Bill } from './Bill';
import { Payment } from './Payment';
import { CalculationRESTService } from '../rest/calculation-rest.service';
import { TransferData } from './TransferData';
import { Calculation } from './Calculation';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class CalculatorDataService {

  debtor: Debtor = new Debtor()
  contract: Contract = new Contract()
  bills: Array<Bill> = []
  totalBalance: number
  calculationDate: Date

  calculation: Calculation

  error: HttpErrorResponse

  constructor(
    private restService: CalculationRESTService,
  ) {
    this.addBill();
  }

  deleteBill(index: number) {
    this.bills.splice(index, 1)
  }

  addBill() {
    let bill: Bill = new Bill()
    bill.payments = []
    this.bills.push(bill)
  }

  addPayment(billIndex: number) {
    this.bills[billIndex].payments.push(new Payment())
  }

  deletePayment(bill: Bill, index: number) {
    bill.payments.splice(index, 1)
  }

  countTotalBalance() {
    let totalBalance: number = 0
    this.bills?.forEach(bill => {
      totalBalance += bill.amount
      bill?.payments.forEach(payment => {
        totalBalance -= payment.amount
      });
    });
    return totalBalance
  }

  makeCalculation(transferData: TransferData) {

    transferData.fine = transferData.contract.fine

    console.log(transferData)
    this.restService.sendData(transferData).subscribe((data: Calculation) => {
      this.calculation = data
      this.error = null
    }, error => {
      this.error = error
    })
  }
}
