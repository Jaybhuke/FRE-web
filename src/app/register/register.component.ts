import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  registerUserData = {
  }

  constructor(private _user: UserService,private _router:Router){ }

  ngOnInit(){
    // this.users = this._userService.getUsers();
   
  }

  registerUser(regData:any){
    // Form Data submit backedend
    // If Sucess User Registre msg
    // If Error Display error show error
    console.log(regData) //Before Sneding requst    
    this._user.registerUser(regData)
    .subscribe(
      (res) =>{
        console.log(res);
        this._router.navigate(['login']);

      },
      (err) => {
        console.log(err);
        
      }); 
  }

  // model: any = {};

  // onSubmit() {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerUser));
  // }
}


