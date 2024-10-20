import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  constructor(
    public globalState: GlobalStateService,
    public router: Router
  ) { }

  ngOnInit() {
    if (this.globalState.isLoggedIn) {
      this.router.navigate(['/tabs/tab1']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
