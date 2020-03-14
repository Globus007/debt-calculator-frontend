import { Component, OnInit, Input } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';
import { Payment } from '../service/data/Payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  @Input() index: number
  payment: Payment

  constructor( 
    private calculatorDataService: CalculatorDataService
  ) { }

  ngOnInit(): void {
    this.payment = this.calculatorDataService.payments[this.index]
  }

  deletePayment() {
    this.calculatorDataService.payments.splice(this.index, 1)
  }

}
