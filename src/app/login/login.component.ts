import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  loginUserData={}
  isMesg:boolean=false;
  msg:string;

  constructor(private _user:UserService,private _router:Router){ }

  loginUser(logData:any){
    console.log(logData);
    this._user.loginUser(logData)
      .subscribe(
        (res) =>{
          console.log(res);
          if(res.statusCode == 0) {
            // Redirect to  upload
            this._router.navigate(['uploader']);
            this.msg = res.message;
            this.isMesg=true;
            
          }
          else {
            this.msg = res.message;
            this.isMesg=true;
          }
          this.isMesg= false;
        },
        (err) => {
          console.log(err);
          
        }); 
    
    
  }
 

  // onSubmit() {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  // }

}
