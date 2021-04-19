import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardsComponent } from './boards.component';
import { BoardListingComponent } from './board-listing/board-listing.component';
import { AddEditBoardComponent } from './add-edit-board/add-edit-board.component';
import { ViewBoardComponent } from './view-board/view-board.component';

const routes: Routes = [
  {
    path: '',
    component: BoardsComponent,
    children: [
      {
        path: '',
        component: BoardListingComponent
      },
      {
        path: 'board-listing',
        component: BoardListingComponent
      },
      {
        path: 'add-edit-board',
        component: AddEditBoardComponent
      },
      {
        path: 'view-board',
        component: ViewBoardComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }
