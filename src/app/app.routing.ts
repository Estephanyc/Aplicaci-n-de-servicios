
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";


const appRoutes = [
  {path : 'home', component : AppComponent},
  { path: "login", component: LoginComponent},
  { path: "menu", component: MenuComponent}

];
export const routing = RouterModule.forRoot(appRoutes);
