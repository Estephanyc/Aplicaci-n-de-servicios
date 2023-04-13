
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AppComponent } from "./app.component";


const appRoutes = [
  {path : '', component : AppComponent},
  { path: "login", component: LoginComponent}

];
export const routing = RouterModule.forRoot(appRoutes);
