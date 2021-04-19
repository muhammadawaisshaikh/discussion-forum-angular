import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-listing',
  templateUrl: './board-listing.component.html',
  styleUrls: ['./board-listing.component.scss']
})
export class BoardListingComponent implements OnInit {

  data: any = [];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        title: 'Lorem Ipsm',
        date: '17-April-2021',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        title: 'Lorem Ipsm',
        date: '17-April-2021',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        title: 'Lorem Ipsm',
        date: '17-April-2021',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        title: 'Lorem Ipsm',
        date: '17-April-2021',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        title: 'Lorem Ipsm',
        date: '17-April-2021',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      }
    ]
  }

}
