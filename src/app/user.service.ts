import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _registerUrl = "http://127.0.0.1:5000/sign-up";
  private _loginUrl = "http://127.0.0.1:5000/sign-in";

  constructor(private http: HttpClient,private _router: Router) { }

  registerUser(user:any){
    return this.http.post<any>(this._registerUrl, user)
  }
  loginUser(user:any){
    return this.http.post<any>(this._loginUrl, user)
  }
}
