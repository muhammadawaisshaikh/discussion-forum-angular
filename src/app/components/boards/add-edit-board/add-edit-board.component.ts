import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiCallService } from '../../../core/http/api-call/api-call.service';
import { ToastService } from '../../../core/services/toast/toast.service';

@Component({
  selector: 'app-add-edit-board',
  templateUrl: './add-edit-board.component.html',
  styleUrls: ['./add-edit-board.component.scss']
})
export class AddEditBoardComponent implements OnInit {

  programForm: any = FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private config: ConfigService,
    private apiCallService: ApiCallService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      publicBoard: [false],
      created_at: [new Date()]
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

}
