import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebtorComponent } from './debtor/debtor.component';
import { ContractComponent } from './contract/contract.component';
import { BillComponent } from './bill/bill.component';
import { PaymentComponent } from './payment/payment.component';
import { BalanceComponent } from './balance/balance.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    DebtorComponent,
    ContractComponent,
    BillComponent,
    PaymentComponent,
    BalanceComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
