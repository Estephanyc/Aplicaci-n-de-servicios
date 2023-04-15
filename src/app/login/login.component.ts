import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  usuarioinvalido = false;
  constructor(private httpService: HttpService, private router:Router) {}

  login() {
    console.log(this.usuario);
    console.log(this.password);



    this.httpService
      .validateUser(this.usuario, this.password)
      .subscribe((response:any) => {
        console.log(response);
        if(response.data.status){
           this.router.navigate(["/home"])
        }else{
          this.usuarioinvalido = true;
        }
      });


  }

}
