import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public status = new BehaviorSubject(false);

  constructor() {
    let data = localStorage.getItem('user');
    if(data) this.status.next(true);
    else this.status.next(false);
  }

  setLoginStatus(status: boolean) {
    this.status.next(status);
  }

  logout() {
    localStorage.clear();
  }

  setLoginData(data: any) {
    let user = JSON.stringify(data);
    localStorage.setItem('user', user)
  }

  getUserData() {
    let data: any = localStorage.getItem('user');
    return JSON.parse(data)
  }
}
