import { Component, OnInit, Input } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Bill } from '../service/data/Bill';
import { Payment } from '../service/data/Payment';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  @Input() index: number
  @Input() billFormArray: FormArray
  @Input() bill: Bill
  billFormGroup: FormGroup
  paymentFormArray: FormArray
  payments: Array<Payment>

  constructor(
    private calculatorDataService: CalculatorDataService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.payments = this.bill.payments

    this.billFormGroup = this.fb.group({
      number: [this.bill.number],
      date: [this.bill.date],
      amount: [this.bill.amount],
      paymentDate: [this.bill.paymentDate],
      payments: this.fb.array([])
    })

    this.billFormArray.push(this.billFormGroup)

    this.paymentFormArray = <FormArray>this.billFormGroup.controls["payments"]
  }

  addPayment() {
    this.calculatorDataService.addPayment(this.index)
  }

  deleteBill() {
    this.calculatorDataService.deleteBill(this.index)
    this.billFormArray.removeAt(this.index)
  }

  hasMoreThanOneElement() {
    if (this.calculatorDataService.bills.length > 1) {
      return true
    }
    return false
  }

  isLastElement() {
    if (this.index == (this.billFormArray.length-1)) {
      return true
    }
    return false
  }

}
