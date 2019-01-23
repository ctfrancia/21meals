import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  })
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  returnURL: string;
  email: FormControl;
  password: FormControl;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
  ) {
    // redirects to dashboard if already logged in
    if(this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
    // get url from route parameters or default to '/'
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }
  // convenience f getter for easy acces to form fields
  get f() {
    console.log(this.loginForm.controls);

    return this.loginForm.controls;
  }

  onSubmit() {
    console.log('button pressed')
    this.submitted = true;
    // if(this.loginForm.invalid) return;
    this.loading = true;
    console.log(this.f.email.value);

    return this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe( data => {
        console.log('are you reaching here',data);

        this.router.navigate(['/dashboard']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }
}
