
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { EliminarFactComponent } from "./page/facturacion/eliminar-fact/eliminar-fact.component";


const appRoutes = [
  {path : '', component : AppComponent},
  { path: "login", component: LoginComponent},
  { path: "menu", component: MenuComponent}, 
  { path: "facturacion/eliminarfact" , component:EliminarFactComponent}
];


export const routing = RouterModule.forRoot(appRoutes);

