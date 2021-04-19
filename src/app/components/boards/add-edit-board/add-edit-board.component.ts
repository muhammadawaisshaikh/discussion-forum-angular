import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiCallService } from '../../../core/http/api-call/api-call.service';

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
    private apiCallService: ApiCallService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      publicBoard: [false],
    });
  }

  save() {
    let data = this.programForm.value;

    this.apiCallService.post(this.config.tables.todoTable, data).subscribe(res => {
      if (res) {
        alert('New Board Added.');
        this.router.navigateByUrl('/boards');
      }
    })
  }

}
