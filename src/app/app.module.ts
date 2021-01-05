import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule, MatTabsModule } from '@angular/material';
import { MatTableTextButtonFilterComponent } from './mat-table-text-button-filter/mat-table-text-button-filter.component';
import { MatTabComponent } from './mat-tab/mat-tab.component';
import { MatTab2Component } from './mat-tab2/mat-tab2.component';

@NgModule({
  declarations: [
    AppComponent,
    MatTableTextButtonFilterComponent,
    MatTabComponent,
    MatTab2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Material
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonToggleModule,

    //remove
    MatButtonModule,
    MatTabsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
