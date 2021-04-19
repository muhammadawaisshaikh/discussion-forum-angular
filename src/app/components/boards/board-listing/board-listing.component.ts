import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiCallService } from '../../../core/http/api-call/api-call.service';

@Component({
  selector: 'app-board-listing',
  templateUrl: './board-listing.component.html',
  styleUrls: ['./board-listing.component.scss']
})
export class BoardListingComponent implements OnInit {

  data: any = [];

  constructor(
    private router: Router,
    private config: ConfigService,
    private apiCallService: ApiCallService
  ) { }

  ngOnInit(): void {
    this.getAllBoards();
  }

  getAllBoards() {
    this.apiCallService.getAll(this.config.tables.boards).subscribe(res => {
      this.data = this.apiCallService.formatDataListing(res);
      console.log(this.data);
    })
  }

  viewBoard(item: any) {
    this.router.navigate(['/boards/view-board'], { state: { data: item } })
  }

}
