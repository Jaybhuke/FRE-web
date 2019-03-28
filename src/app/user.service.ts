import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _registerUrl = "http://127.0.0.1:5000/sign-up";
  private _loginUrl = "http://127.0.0.1:5000/sign-in";
  private _uploadUrl = "http://127.0.0.1:5000/upload";

  constructor(private http: HttpClient,private _router: Router) { }

  registerUser(user:any){
    return this.http.post<any>(this._registerUrl, user)
  }
  loginUser(user:any){
    return this.http.post<any>(this._loginUrl, user)
  }

  postFile(fileToUpload: File){
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload , fileToUpload.name);
    return this.http
       .post<any>(this._uploadUrl,formData);
  }
}
