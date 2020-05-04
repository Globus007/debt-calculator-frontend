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
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';

export const RU_LOCALE_FORMAT = {
    parse: {
      dateInput: 'DD.MM.YYYY',
    },
    display: {
      dateInput: 'DD.MM.YYYY',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };

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
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [
    CalculatorDataService,
    {
        provide: DateAdapter,
        useClass: MomentDateAdapter,
        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {   provide: MAT_DATE_FORMATS, 
        useValue: RU_LOCALE_FORMAT
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
