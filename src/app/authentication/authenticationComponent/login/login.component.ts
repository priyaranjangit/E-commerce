import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommanService } from 'src/app/services/comman.service';
import { Global } from 'src/app/services/global';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public showPassword: boolean;
  registerForm: FormGroup;
  submitted: boolean = false;
  loading: boolean;
  loadingReg: boolean;

  @ViewChild('nav') elnav: any;
  isLogin: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private toster: ToastrService,
    private commanService: CommanService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setLoginForm()
    this.setRegisterForm()
    if (localStorage.getItem('userDetails')) {
      this.router.navigate(['']); // Redirect to dashboard if already logged in
    }
  }
  setLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  setRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      confirmPassword: ['', Validators.required]
    },
      {
        // validators : MustMatchValidator('password','confirmPassword')
      });
  }



  get f() {
    return this.registerForm.controls;
  }


  login() {
    if (this.loginForm.get('userName').value == "") {
      this.toster.error("UserName is required !!", "Login");
    } else if (this.loginForm.get('password').value == "") {
      this.toster.error("Password is required !!", "Login");
    } else {
      if (this.loginForm.valid) {
        this.loading = true;
        // call Login API

        this.commanService.post(Global.BASE_API_PATH+"login", this.loginForm.value).subscribe(res => {
          if (res.isSuccess) {
            console.log("loginResponce", res);
            this.authService.authLogin(res.data);
            let msg: string = "";
            // msg = this.authService.getMessage();
            if (msg == "") {
              this.toster.success("Login SuccessFully", "Login");
              this.loginForm.reset();
            }
          } else {
            this.loading = false;
            this.toster.error(res.errorMessage[0], "Login");
          }
        });
      } else {
        this.loading = false;
        this.toster.error("Invalid Credential !!", "Login");
      }
    }
  }

  register(formData: any) {
    this.submitted = true;

    if (this.registerForm.invalid) {
      // this.loadingReg = true;
      console.log('invalid');
      return;

    }
    console.log('valid');
    // call register api
    this.loadingReg = true;
    this.commanService.post(Global.BASE_API_PATH+"signup", formData.value).subscribe((res) => {
      // debugger
      if (res.issuccess) {
        this.loadingReg = false;
        this.toster.success("Registration has been successfully done !!", "Register");
        this.registerForm.reset({
          firstName: '',
          lastName: '',
          email: '',
          userTypeId: 1,
          password: '',
          confirmPassword: ''
        });
        this.submitted = false;
        this.elnav.select("logintab");

      }
      else {
        this.toster.error(res.message, "Register");
        this.loadingReg = false;
      }
    }, error => {
      console.error('Error:', error);
    });

  }

}
