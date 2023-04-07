import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-simple-interface',
  templateUrl: './simple-interface.component.html',
  styleUrls: ['./simple-interface.component.css']
})
export class SimpleInterfaceComponent implements OnInit{
  form!: FormGroup;
  message: string = "";

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    let request: LoginRequestInterface = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this.apiService.login(request).subscribe({next : (data: string) => {
      this.message = "Success";
      },
        error: (error) => {
          this.message = "Wrong Password/Unregistered"
          console.log(error);
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

export interface LoginRequestInterface {
  email: string;
  password: string;
}
