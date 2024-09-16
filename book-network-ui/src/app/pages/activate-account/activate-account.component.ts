import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";
import {skipUntil} from 'rxjs';
import {CodeInputModule} from "angular-code-input";

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [
    NgIf,
    CodeInputModule
  ],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {
  message='';
  isOkay=true;
  submitted=false;
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  private confirmAccount(token: string){
    this.authService.confirm({token})
      .subscribe({
      next: ()=>{
        this.message = 'Your account has been successfully activated.\\nNow you can proceed to login';
        this.submitted = true;
        // this.isOkay = true;
      },
      error: ()=> {
        this.message = 'Token has been expired or invalid';
        this.submitted = true;
        this.isOkay = false;
      }
    });
  }

  redirectToLogin(){
    this.router.navigate(['login']);
  }

  onCodeCompleted(token: string){
    this.confirmAccount(token);
  }

  protected readonly skipUntil = skipUntil;

}
