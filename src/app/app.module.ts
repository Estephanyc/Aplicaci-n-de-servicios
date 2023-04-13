import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FinanzasComponent } from './page/finanzas/finanzas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FinanzasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
