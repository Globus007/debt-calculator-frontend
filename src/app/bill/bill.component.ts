import { Component, OnInit, Input } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
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
  bills = this.calculatorDataService.bills

  constructor(
    private calculatorDataService: CalculatorDataService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.payments = this.bill.payments

    this.billFormGroup = this.fb.group({
      number: [this.bill.number],
      date: [this.bill.date, Validators.required],
      amount: [this.bill.amount, Validators.required],
      paymentDate: [this.bill.paymentDate, Validators.required],
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
    if (this.index == (this.bills.length-1)) {
      return true
    }
    return false
  }

}
