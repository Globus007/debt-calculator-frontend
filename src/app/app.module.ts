import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebtorComponent } from './debtor/debtor.component';
import { ContractComponent } from './contract/contract.component';
import { BillComponent } from './bill/bill.component';
import { PaymentComponent } from './payment/payment.component';
import { BalanceComponent } from './balance/balance.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorDataService } from './service/data/calculator-data.service';
import { CalculationDateComponent } from './calculation-date/calculation-date.component';
import { CalculationInfoComponent } from './calculation-info/calculation-info.component';
import { ErrorComponent } from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    DebtorComponent,
    ContractComponent,
    BillComponent,
    PaymentComponent,
    BalanceComponent,
    CalculatorComponent,
    CalculationDateComponent,
    CalculationInfoComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule
  ],
  providers: [CalculatorDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
