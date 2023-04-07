import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {LoginRequestInterface} from "../simple-interface/simple-interface.component";

@Component({
  selector: 'app-simple-register',
  templateUrl: './simple-register.component.html',
  styleUrls: ['./simple-register.component.css']
})
export class SimpleRegisterComponent implements OnInit {
  form!: FormGroup;
  message: string = "";

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService) {}

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
    this.apiService.register(request);
    this.message = "Success";

    // this.apiService.login(request).subscribe({next : (data: string) => {
    //     this.message = "Success";
    //   },
    //   error: (error) => {
    //     this.message = "Wrong Password/Unregistered"
    //     console.log(error);
    //   },
    // },);
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

export interface RegisterRequestInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

