import { Component, OnInit } from '@angular/core';
import { bills } from '.././calculator/calculator.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  bills = bills;
  index

  constructor() { }

  deleteBill() {
    bills.pop()
  }

  ngOnInit(): void {
  }

}
