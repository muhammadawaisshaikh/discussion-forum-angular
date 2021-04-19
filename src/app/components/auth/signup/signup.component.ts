import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiCallService } from '../../../core/http/api-call/api-call.service';
import { ToastService } from '../../../core/services/toast/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AngularFireAuth,
    private config: ConfigService,
    private apiCallService: ApiCallService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signup() {
    this.auth.createUserWithEmailAndPassword(this.programForm.value.email, this.programForm.value.password)
      .then(value => {
        let data = {
          name: this.programForm.value.email.split('@')[0],
          email: this.programForm.value.email,
          user_type: 'user'
        };
    
        this.apiCallService.post(this.config.tables.users, data).subscribe(res => {
          if (res) {
            this.toastService.toast("success", "Signup Success.");
            this.router.navigateByUrl('/auth/login');
          }
        })
      })
      .catch(err => {
        this.toastService.toast("danger", err.message);
        console.log('Something went wrong: ', err.message);
      });
  }

}
