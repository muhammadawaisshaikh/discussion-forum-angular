import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public status = new BehaviorSubject<boolean>(false);
  public toast_type: string = "success";
  public message: string = "";

  constructor() { }

  toast(toast_type: string, message: string) {
    this.toast_type = toast_type;
    this.message = message;

    this.status.next(true);

    setTimeout(() => {
      this.status.next(false);
    }, 2000);
  }

}
