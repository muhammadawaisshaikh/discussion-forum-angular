import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiCallService } from '../../../core/http/api-call/api-call.service';
import { LoginService } from '../../../core/services/login/login.service';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.scss']
})
export class ViewBoardComponent implements OnInit {

  programForm: any = FormGroup;
  data: any = {};
  user: any = {}

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private config: ConfigService,
    private apiCallService: ApiCallService,
    private checkLogin: LoginService,
  ) {
    this.data = this.router.getCurrentNavigation()?.extras?.state?.data;
    this.user = this.checkLogin.getUserData();
  }

  ngOnInit(): void {
    console.log(this.data);
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      comment: ['', Validators.required],
    });
  }

  editBoard(item: any) {
    this.router.navigate(['/boards/add-edit-board'], { state: { data: item } })
  }

  getBoard() {
    this.apiCallService.getSingle(this.config.tables.boards, this.data.Id).subscribe(res => {
      this.data = res;
      console.log(res);
      
    })
  }

  comment() {
    let data = {
      ...this.data,
      comments: [
        ...this.data.comments,
        {
          username: this.user.name,
          userId: this.user.Id,
          value: this.programForm.value.comment,
          date: new Date()
        }
      ]
    }
    
    this.apiCallService.put(this.config.tables.boards, this.data.Id, data).subscribe(res => {
      if (res) {
        this.getBoard();
      }
    })
  }

}
