import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public _router:Router) { }

  ngOnInit() {
  }
  logOut(){
    console.log("Function Here");
    this._router.navigate(['/']);
    
  }
}
