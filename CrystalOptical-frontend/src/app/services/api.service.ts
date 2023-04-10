import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MyHttpService} from "./my-http.service";
import {LoginRequestInterface} from "../models/loginRequest.interface";
import {RegisterRequestInterface} from "../models/registerRequest.interface";
import {HttpHeaders} from "@angular/common/http";
import {messageInterface} from "../models/message.interface";
import {orderInfoInterface, orderInterface} from "../models/order";
import {StorageService} from "./storage.service";
import {addItemInterface} from "../models/items.interface";

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

  //getAllItems
  getItem(id : number): Observable<any>{
    return this.http.get(`${apiUrl}/item/${id}`);
  }

  //getAllItems
  getAllItems(): Observable<any>{
    return this.http.get(`${apiUrl}/item/list`);
  }

  getAllItemsFilter(brand: string, name: string, sortby: string) : Observable<any> {
    return this.http.get(`${apiUrl}/item/list/${brand}/${name}/${sortby}`);
  }

  rateItem(id: number, rating: number) : Observable<any>{
    return this.http.get(`${apiUrl}/item/rate/${id}/${rating}`);
  }

  adminRole() : Observable<any> {
    let header = new HttpHeaders({
      "Authorization": "Bearer " + this.storageService.getJwt(),
    });
    return this.http.get(`${apiUrl}/user/forAdmin`, {headers : header});
  }

  addItem(request: addItemInterface) : Observable<any> {
    let header = new HttpHeaders({
      "Authorization": "Bearer " + this.storageService.getJwt(),
    });
    return this.http.post(`${apiUrl}/admin/addItem`, request, {headers : header});
  }

  getItemStock(): Observable<any>{
    return this.http.get("http://localhost:8383/api/v1/item/list");
  }
}
