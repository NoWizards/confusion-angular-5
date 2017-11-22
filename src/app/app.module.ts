import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
