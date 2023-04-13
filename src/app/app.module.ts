
import { routing } from "./app.routing";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { MenuComponent } from './menu/menu.component';
import { FinanzasComponent } from './page/finanzas/finanzas.component';
>>>>>>> cccd13438bac354a80635fef7da8cf0374d948ce

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
    MenuComponent,
    FinanzasComponent
>>>>>>> cccd13438bac354a80635fef7da8cf0374d948ce
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
