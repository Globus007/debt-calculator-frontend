import { Component, OnInit, Input } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  @Input() index: number

  constructor(
    private calculatorData: CalculatorDataService
  ) { }

  ngOnInit(): void {
  }

  deletePayment() {
    this.calculatorData.payments.splice(this.index, 1)
  }

}
