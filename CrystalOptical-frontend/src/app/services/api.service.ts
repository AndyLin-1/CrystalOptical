import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MyHttpService} from "./my-http.service";
import {LoginRequestInterface} from "../models/loginRequest.interface";
import {RegisterRequestInterface} from "../models/registerRequest.interface";
import {HttpHeaders} from "@angular/common/http";
import {messageInterface} from "../models/message.interface";
import {orderInfoInterface, orderInterface} from "../models/order";
import {StorageService} from "./storage.service";

const apiUrl = `http://localhost:8383/api/v1`;

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: MyHttpService, private storageService: StorageService) {
  }

  //login method
  login(request: LoginRequestInterface) : Observable<any> {
    return this.http.post<LoginRequestInterface>(`${apiUrl}/user/login`, request);
  }

  //register method
  register(request: RegisterRequestInterface) : Observable<any> {
    return this.http.post<messageInterface>(`${apiUrl}/user/register`, request);
  }


  sendOrder(request: orderInterface) : Observable<any> {
    let header = new HttpHeaders({
      "Authorization": "Bearer " + this.storageService.getJwt(),
    });
    return this.http.post<orderInfoInterface>(`${apiUrl}/order/order`, request, {headers: header});
  }

  getOrder(id : number) : Observable<any> {
    let header = new HttpHeaders({
      "Authorization": "Bearer " + this.storageService.getJwt(),
    });
    return this.http.get<orderInfoInterface>(`${apiUrl}/order/orderinfo/${id}`, {headers: header})
  }

  test() : Observable<any> {
    let header = new HttpHeaders({
      "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3d3cuYW5keUBob3RtYWlsLmNhIiwiZXhwIjoxNjgxMDI5MTkwfQ.PahvfSIruKV8vcOmWS0mN3hQgo9uxPwJv_jl3ISeKhK65S8bhXijOChV7NQiEkufXHx4ZhqJhAM1igEfBmIIeQ"
    });
    return this.http.get<string>(`${apiUrl}/user/forAdmin`, {headers: header});
  }

  //getAllItems
  getItem(id : number): Observable<any>{
    return this.http.get(`${apiUrl}/item/${id}`);
  }

  //getAllItems
  getAllItems(): Observable<any>{
    return this.http.get(`${apiUrl}/item/list`);
  }

  getItemStock(): Observable<any>{
    return this.http.get("http://localhost:8383/api/v1/item/list");
  }
}
