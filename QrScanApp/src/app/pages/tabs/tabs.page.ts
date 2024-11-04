import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(
    public globalState: GlobalStateService,
    public router: Router
  ) {}


  ngOnInit() {
    if (this.globalState.isLoggedIn) {
      this.router.navigate(['/tabs/tab1']);
    } else {
      this.router.navigate(['/login']);
    }
  }



}
