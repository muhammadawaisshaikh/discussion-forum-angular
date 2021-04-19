import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../core/services/toast/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  show: boolean = false;

  constructor(
    public toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.toastService.status.subscribe(res => {
      this.show = res;
    })
  }

}
