import { Component, OnInit } from '@angular/core';
import { payments } from '.././calculator/calculator.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  deletePayment() {
    payments.pop()
  }

}
