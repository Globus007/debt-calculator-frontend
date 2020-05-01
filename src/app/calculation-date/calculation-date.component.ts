import { Component, OnInit, Input } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculation-date',
  templateUrl: './calculation-date.component.html',
  styleUrls: ['./calculation-date.component.css']
})
export class CalculationDateComponent implements OnInit {

  @Input() calculatorFormGroup: FormGroup
  calculationDate: FormControl

  constructor() { }

  ngOnInit(): void {
    this.calculationDate = new FormControl(new Date())
    this.calculatorFormGroup.addControl('calculationDate', this.calculationDate)
  }

}
