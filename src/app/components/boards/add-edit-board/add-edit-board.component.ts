import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiCallService } from '../../../core/http/api-call/api-call.service';
import { ToastService } from '../../../core/services/toast/toast.service';
import { LoginService } from '../../../core/services/login/login.service';

@Component({
  selector: 'app-add-edit-board',
  templateUrl: './add-edit-board.component.html',
  styleUrls: ['./add-edit-board.component.scss']
})
export class AddEditBoardComponent implements OnInit {

  programForm: any = FormGroup;
  data: any = {};
  title: string = "Add Board";
  user: any = {}

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private config: ConfigService,
    private apiCallService: ApiCallService,
    private toastService: ToastService,
    private checkLogin: LoginService,
  ) {
    this.data = this.router.getCurrentNavigation()?.extras?.state?.data;
    this.user = this.checkLogin.getUserData();
  }

  ngOnInit(): void {
    this.formInit();

    if (this.data) {
      this.title = "Edit Board";

      this.programForm.patchValue({
        ...this.data
      });
    }
  }

  formInit() {
    this.programForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      publicBoard: [false],
      comments: [['']],
      created_at: [new Date()],
      created_by: this.user.Id
    });
  }

  save() {
    let data = this.programForm.value;

    this.apiCallService.post(this.config.tables.boards, data).subscribe(res => {
      if (res) {
        this.toastService.toast("success", "New Board Added.");
        this.router.navigateByUrl('/boards');
      }
    })
  }

  update() {
    let data = this.programForm.value;

    this.apiCallService.put(this.config.tables.boards, this.data.Id, data).subscribe(res => {
      if (res) {
        this.toastService.toast("success", "Board Updated.");
        this.router.navigateByUrl('/boards');
      }
    })
  }

}
