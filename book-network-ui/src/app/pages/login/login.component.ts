import {Component, OnInit} from '@angular/core';
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";
import {NgForOf, NgIf} from "@angular/common";
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {}

  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res)=>{
        this.tokenService.token = res.token as string;
        // this.router.navigate(['books']);
        console.log(res);
      },
      error: (err)=>{
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.error);
        }
      }
    });
  }

  register(){
    this.router.navigate(['register']);
  }

  ngOnInit(): void {
  }
}
