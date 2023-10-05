import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DadiComponent } from './dadi/dadi.component';
import { NeveComponent } from './neve/neve.component';

@NgModule({
  declarations: [
    AppComponent,
    DadiComponent,
    NeveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
