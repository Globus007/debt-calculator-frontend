import { Injectable } from '@angular/core';

export class Debtor {
  constructor(
    public name?: string,
    public props?: string
  ) { }
}

export class Contract {
  constructor(
    public number?: number,
    public date?: Date,
    public paymentDate?: Date,
    public fine?: number
  ) { }
}

export class Bill {
  constructor(
    public number?: number,
    public date?: Date,
    public amount?: number
  ) { }
}

export class Payment {
  constructor(
    public date?: Date,
    public amount?: number
  ) { }
}

// export class CalculationData {
//   constructor(
//     public debtor: Debtor,
//     public contract: Contract,
//     public bills: Array<Bill>,
//     public payments: Array<Payment>,
//     public calculationDate: Date,
//     public totalBalance?: number
//   ) { }
// }

@Injectable({
  providedIn: 'root'
})

export class CalculatorDataService {

  debtor: Debtor
  contract: Contract
  calculationData: number
  bills: Array<Bill> = [new Bill(1, new Date("2020-01-01"), 1000)]
  payments: Array<Payment> = []
  calculationDate: Date

  constructor(
  ) {
    //  init test parameters
    this.debtor = new Debtor(
      "ООО Печки-лавочки",
      "246005 г. Могилев, ул. Рабочая, 3"
    )
    this.contract = new Contract(
      22,
      new Date("2019-01-01"),
      new Date("2020-01-01"),
      10
    )
  }

  countTotalBalance() {
    let totalBalance = 0
    this.bills.forEach(bill => {
      totalBalance += bill.amount
    });
    this.payments.forEach(payment => {
      totalBalance -= payment.amount
    })
    return totalBalance
  }


}
