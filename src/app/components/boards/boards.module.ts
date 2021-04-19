import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './boards.component';
import { AddEditBoardComponent } from './add-edit-board/add-edit-board.component';
import { ViewBoardComponent } from './view-board/view-board.component';
import { BoardListingComponent } from './board-listing/board-listing.component';


@NgModule({
  declarations: [BoardsComponent, AddEditBoardComponent, ViewBoardComponent, BoardListingComponent],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BoardsModule { }
