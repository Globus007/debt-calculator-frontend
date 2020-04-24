import { Component, OnInit, Input } from '@angular/core';
import { CalculatorDataService } from '../service/data/calculator-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-debtor',
  templateUrl: './debtor.component.html',
  styleUrls: ['./debtor.component.css']
})
export class DebtorComponent implements OnInit {

  @Input() calculatorFormGroup: FormGroup
  debtorFormGroup: FormGroup
  debtor = this.calculatorDataService.debtor

  constructor(
    private calculatorDataService: CalculatorDataService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.debtorFormGroup = this.fb.group({
      name: [this.debtor.name],
      props: [this.debtor.props],
    })

    this.calculatorFormGroup.addControl('debtor', this.debtorFormGroup)
  }
  
}
