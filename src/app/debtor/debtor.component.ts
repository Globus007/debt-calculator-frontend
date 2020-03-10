import { Component, OnInit } from '@angular/core';
import { Debtor } from '../service/data/calculator-data.service';

@Component({
  selector: 'app-debtor',
  templateUrl: './debtor.component.html',
  styleUrls: ['./debtor.component.css']
})
export class DebtorComponent implements OnInit {

  name: string
  props: string

  constructor() { }

  ngOnInit(): void {
    this.name = "ООО Печки-лавочки"
    this.props = "246005 г. Могилев, ул. Рабочая, 3"
  }

  getDebtorData() {
    return new Debtor(this.name, this.props)
  }

}
