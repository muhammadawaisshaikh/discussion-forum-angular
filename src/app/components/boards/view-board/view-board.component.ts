import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiCallService } from '../../../core/http/api-call/api-call.service';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.scss']
})
export class ViewBoardComponent implements OnInit {

  data: any = {};

  constructor(
    private router: Router,
    private config: ConfigService,
    private apiCallService: ApiCallService
  ) {
    this.data = this.router.getCurrentNavigation()?.extras?.state?.data;
  }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
