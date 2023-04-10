import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {RegisterRequestInterface} from "../../models/registerRequest.interface";
import {messageInterface} from "../../models/message.interface";
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  form!: FormGroup;
  message: String = "";

  constructor(private fb: FormBuilder,
              private apiService: ApiService,
              private router: Router,
              private storageService: StorageService) { }

  ngOnInit(): void {
    if(this.storageService.userLoggedIn()){
      this.router.navigateByUrl("/");
    }
    this.initForm();
  }

  onSubmit(): void {
    let request: RegisterRequestInterface = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      password: this.form.value.password,
    }
    console.log("request=" + request.firstName + request.lastName + request.email + request.password);
    this.apiService.register(request).subscribe({next : (data: messageInterface) => {
        this.message = data.message;
        this.router.navigateByUrl("/login");
      },
      error: (error) => {
        this.message = "error";
        console.log(error);
      },
    },);
  }

  private initForm(): void {
    this.form = this.fb.group({
      firstName: [""],
      lastName: [""],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

}
