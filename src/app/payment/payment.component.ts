import { Component, OnInit, Input } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';
import { Payment } from '../service/data/Payment';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Bill } from '../service/data/Bill';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  @Input() index: number
  @Input() paymentFormArray: FormArray
  @Input() bill: Bill
  @Input() payment: Payment
  paymentFormGroup: FormGroup

  constructor( 
    private calculatorDataService: CalculatorDataService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.paymentFormGroup = this.fb.group({
      amount: [this.payment.amount],
      date: [this.payment.date]
    })

    this.paymentFormArray.push(this.paymentFormGroup)
  }

  deletePayment() {
    this.calculatorDataService.deletePayment(this.bill, this.index);
    this.paymentFormArray.removeAt(this.index)    
  }

}
