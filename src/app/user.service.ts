import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { RequestOptions, ResponseContentType, Headers } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpHeaders } from '@angular/common/http';
import { User } from './model/User';

@Injectable()
export class UserService {

  urlLogin = "http://localhost:8080/login";
  urlLogout = "http://localhost:8080/logout";
  urlSignUp = "http://localhost:8080/sign-up";
  urlGetMyCat = "http://localhost:8080/my-category";
  urlMyRole = "http://localhost:8080/my-role"


  constructor(private _http: HttpClient) { }


  doLogin(loginData) {
    let contentHeader = new HttpHeaders();
    return this._http.post(this.urlLogin, loginData, { headers: contentHeader, observe: 'response' });
  }

  logout() {
    return this._http.get(this.urlLogout);
  }

  signUp(signUpData) {
    return this._http.post(this.urlSignUp, signUpData);
  }

  getMyCatId() {
    return this._http.get(this.urlGetMyCat);
  }

  getMyRole() {
    return this._http.get(this.urlMyRole, { responseType: 'text' });
  }

  getAllUsers(){
    return this._http.get<User[]>("http://localhost:8080/api/users");
  }

  promote(username){
    return this._http.get("http://localhost:8080/api/promote/"+username);
  }

  getMyInfo(){
    return this._http.get<User>("http://localhost:8080/api/user/myInfo");
  }

  changePassworD(value){
    return this._http.post("http://localhost:8080/api/user/changePassword",value);
  }

  changeInfo(value){
    return this._http.post("http://localhost:8080/api/user/changeMyInfo",value);
  }

}
