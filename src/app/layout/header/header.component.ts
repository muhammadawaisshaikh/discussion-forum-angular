import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginStatus: boolean = false;

  constructor(
    private router: Router,
    private loginSrv: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginSrv.status.subscribe(res => {
      this.loginStatus = res;
    })
  }

  logout() {
    this.loginSrv.setLoginStatus(false);
    this.loginSrv.logout();
    this.router.navigateByUrl("/login");
  }

}
