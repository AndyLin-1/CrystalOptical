import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {RegisterRequestInterface} from "../../models/registerRequest.interface";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-simple-register',
  templateUrl: './simple-register.component.html',
  styleUrls: ['./simple-register.component.css']
})
export class SimpleRegisterComponent implements OnInit {
  form!: FormGroup;
  message: String = "";

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private storageService: StorageService) {}

  ngOnInit(): void {
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
    this.apiService.register(request).subscribe({next : (data: String) => {
        this.message = data;
      },
      error: (error) => {
        this.message = "error";
        console.log(error);
      },
    },);

    // this.message = "Success";

    // this.apiService.login(request).subscribe({next : (data: string) => {
    //     this.message = "Success";
    //   },
    //   error: (error) => {
    //     this.message = "Wrong Password/Unregistered"
    //     console.log(error);
    //   },
    // },);
  }

  test() {
    // this.apiService.test().subscribe({next: (data) => {
    //   console.log(data);
    //   },
    //   error: (error) => {
    //     this.message = "error";
    //     console.log(error);
    //   },
    // },);
    this.storageService.logout().then(r => {
      console.log("logged out");
    });
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


