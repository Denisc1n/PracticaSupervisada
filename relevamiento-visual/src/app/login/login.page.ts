import { Component, OnInit } from '@angular/core';
import{FirebaseauthService} from '../firebaseauth.service'
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  public onLoginForm: FormGroup;
  constructor(private router: Router, private authService:FirebaseauthService,private formBuilder: FormBuilder) {
   }
   ngOnInit() {

    this.onLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async Login()
  {
    var data ={email:this.onLoginForm.value.email, password:this.onLoginForm.value.password,date: new Date() };
    localStorage.setItem('testObject', JSON.stringify(data));
    this.authService.login( data.email, data.password );
  }
}
