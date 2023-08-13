import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SpendingsComponent } from './spendings/spendings.component';
import { AddSpendingFormComponent } from './add-spending-form/add-spending-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpendingDetailsComponent } from './spendings/spending-details/spending-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpendingsComponent,
    AddSpendingFormComponent,
    SpendingDetailsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
