import { Component, OnInit, Input } from '@angular/core';
import { CalculatorDataService, Bill } from '../service/data/calculator-data.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  @Input() index: number
  bill: Bill

  constructor(
    private calculatorDataService: CalculatorDataService
  ) { }

  deleteBill() {
    this.calculatorDataService.bills.splice(this.index, 1)    
  }

  ngOnInit(): void {
    this.bill = this.calculatorDataService.bills[this.index]
  }

  displayDeleteButton() {
    if (this.calculatorDataService.bills.length > 1) {
      return true
    }
    return false
  }

}
