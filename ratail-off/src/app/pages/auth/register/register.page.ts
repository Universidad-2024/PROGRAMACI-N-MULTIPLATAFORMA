import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(public globalState: GlobalStateService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    try {
      this.globalState.register(this.user);
      this.router.navigate(['/tabs/tab1']);
    } catch (error) {
      console.error(error);
    }
  }

}
