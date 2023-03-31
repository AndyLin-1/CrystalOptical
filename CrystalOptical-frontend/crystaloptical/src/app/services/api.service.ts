import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MyHttpService} from "./my-http.service";
import {LoginRequestInterface} from "../modules/simple-interface/simple-interface.component";

const apiUrl = `localhost:8383/api/v1`;

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: MyHttpService) {
  }

  //login method
  login(request: LoginRequestInterface) {
    return this.http.post<string>(`${apiUrl}/user/login`, request);
  }
}
