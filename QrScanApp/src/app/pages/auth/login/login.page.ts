import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: "blopez4434@gmail.com",
    password: "123456"
  };

  constructor(public globalState: GlobalStateService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    try {
      this.globalState.login(this.user.email, this.user.password);
    } catch (error) {
      console.error(error);
    }
  }

}
