import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MyHttpService} from "./my-http.service";
import {LoginRequestInterface} from "../modules/simple-interface/simple-interface.component";
import {RegisterRequestInterface} from "../modules/simple-register/simple-register.component";

const apiUrl = `http://localhost:8383/api/v1`;

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: MyHttpService) {
  }

  //login method
  login(request: LoginRequestInterface) : Observable<any> {
    return this.http.post<LoginRequestInterface>(`${apiUrl}/user/login`, request);
  }

  //register method
  register(request: RegisterRequestInterface) : Observable<any> {
    return this.http.post<RegisterRequestInterface>(`${apiUrl}/user/register`, request);
  }

  //getAllItems
  getAllItems(): Observable<any>{
    return this.http.get(`${apiUrl}/item/list`);
  }

  getItemStock(): Observable<any>{
    return this.http.get("http://localhost:8383/api/v1/item/list");
  }
}
