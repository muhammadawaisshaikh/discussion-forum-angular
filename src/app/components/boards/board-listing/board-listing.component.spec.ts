import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardListingComponent } from './board-listing.component';

describe('BoardListingComponent', () => {
  let component: BoardListingComponent;
  let fixture: ComponentFixture<BoardListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
