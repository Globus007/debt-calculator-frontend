import { Component, OnInit, Input } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  @Input() calculatorFormGroup: FormGroup
  balance: FormControl
  totalBalance = this.calculatorDataService.totalBalance

  constructor(
    private calculatorDataService: CalculatorDataService,
  ) { }

  ngOnInit(): void {
    this.balance = new FormControl()
    this.calculatorFormGroup.addControl('totalBalance', this.balance)
  }

}
