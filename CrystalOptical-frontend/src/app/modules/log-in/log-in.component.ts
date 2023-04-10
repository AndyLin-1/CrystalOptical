import { Component, OnInit } from '@angular/core';
import {LoginRequestInterface} from "../../models/loginRequest.interface";
import {UserSessionInterface} from "../../models/userSession.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";
import {errorInterface, errorMessageInterface} from "../../models/message.interface";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  form!: FormGroup;
  message: string = "";

  constructor(private fb: FormBuilder,
              private apiService: ApiService,
              private storageService: StorageService,
              private router: Router) { }

  ngOnInit(): void {
    if(this.storageService.userLoggedIn()){
      this.router.navigateByUrl("/");
    }
    this.initForm();
  }

  onSubmit(): void {
    let request: LoginRequestInterface = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this.apiService.login(request).subscribe({next : (data: UserSessionInterface) => {
        this.storageService.login(data.name, data.jwtToken, data.id);
        this.router.navigateByUrl("/");
      },
      error: (error: errorInterface) => {
        this.message = error.error.message;
      },
    },);
  }

  private initForm(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

}
