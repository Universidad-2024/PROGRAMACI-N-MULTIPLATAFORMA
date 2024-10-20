import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(
    public globalState: GlobalStateService, 
    public router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.globalState.logout();
    this.router.navigate(['/login']);
  }

}
