import { Component, OnInit } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true, displayDefaultIndicatorType: false}
  }]
})

export class CalculatorComponent implements OnInit {

  calculatorFormGroup: FormGroup
  billFormArray: FormArray
  bills = this.calculatorDataService.bills

  constructor(
    private calculatorDataService: CalculatorDataService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.calculatorFormGroup = this.fb.group({
      bills: this.fb.array([])
    })

    this.billFormArray = <FormArray>this.calculatorFormGroup.controls["bills"]
  }

  addBill() {
    this.calculatorDataService.addBill()
  }

  onSubmit() {
    this.calculatorDataService.makeCalculation(this.calculatorFormGroup.getRawValue())
  }

  hasCalculation() {
    if (this.calculatorDataService.calculation) {
      return true
    }
    return false
  }

  hasError() {
    if (this.calculatorDataService.error) {
      return true
    }
    return false
  }

}
