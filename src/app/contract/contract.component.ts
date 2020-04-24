import { Component, OnInit, Input } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  @Input() calculatorFormGroup: FormGroup
  contractFormGroup: FormGroup
  contract = this.calculatorDataService.contract

  constructor(
    private calculatorDataService: CalculatorDataService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contractFormGroup = this.fb.group({
      number: [this.contract.number],
      date: [this.contract.date],
      fine: [this.contract.fine]
    })

    this.calculatorFormGroup.addControl('contract', this.contractFormGroup)
  }

}
