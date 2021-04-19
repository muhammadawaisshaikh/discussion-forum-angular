import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { ConfigService } from '../../../core/http/config/config.service';
import { ApiCallService } from '../../../core/http/api-call/api-call.service';
import { ToastService } from '../../../core/services/toast/toast.service';
import { LoginService } from '../../../core/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  programForm: any = FormGroup;

  Users: any = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AngularFireAuth,
    private config: ConfigService,
    private apiCallService: ApiCallService,
    private toastService: ToastService,
    private checkLogin: LoginService,
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

  login() {
    const email = this.programForm.value.email;
    const password = this.programForm.value.password;

    this.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      this.apiCallService.getAll(this.config.tables.users).subscribe(res => {
        this.Users = this.apiCallService.formatDataListing(res);

        this.Users.forEach((user: any) => {
          if (user.email == email) {
            this.checkLogin.setLoginData(user);
          }
        });
      })

      this.checkLogin.setLoginStatus(true);
      this.router.navigateByUrl('/boards');
    })
    .catch(err => {
      alert(err.message);
      console.log('Something went wrong: ', err.message);
    });
  }

}
