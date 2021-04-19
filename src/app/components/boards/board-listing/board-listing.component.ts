import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiCallService } from '../../../core/http/api-call/api-call.service';
import { LoginService } from '../../../core/services/login/login.service';

@Component({
  selector: 'app-board-listing',
  templateUrl: './board-listing.component.html',
  styleUrls: ['./board-listing.component.scss']
})
export class BoardListingComponent implements OnInit {

  data: any = [];
  yourBoards: any = [];
  allBoards: any = [];
  user: any = {}

  constructor(
    private router: Router,
    private config: ConfigService,
    private apiCallService: ApiCallService,
    private checkLogin: LoginService,
  ) {
    this.user = this.checkLogin.getUserData();
  }

  ngOnInit(): void {
    this.getAllBoards();
  }

  getAllBoards() {
    this.user.Id && this.apiCallService.getAll(this.config.tables.boards).subscribe(res => {
      this.data = this.apiCallService.formatDataListing(res);
      console.log(this.data);

      this.yourBoards = this.data.filter((board: any) => board.created_by == this.user.Id);
      this.allBoards = this.data.filter((board: any) => board.created_by != this.user.Id && board.publicBoard == true);
    })
  }

  viewBoard(item: any) {
    this.router.navigate(['/boards/view-board'], { state: { data: item } })
  }

}
