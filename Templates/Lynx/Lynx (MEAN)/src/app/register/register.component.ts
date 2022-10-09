import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
//import { read } from "fs";
import { Authservice } from "../services/auth/auth.service";
import {Router} from '@angular/router'
//import { AppRoutingModule } from "../app-routing.module";

@Component({
    selector: 'register-page',
    templateUrl:'./register.component.html',
    styleUrls: ['./register.css']
})
export class RegisterComponent implements OnInit {

  Regform: FormGroup

  constructor(private auth: Authservice, private router: Router) {}

  ngOnInit() {
      this.Regform = new FormGroup( {
        email: new FormControl(null,[Validators.required]),
        password: new FormControl(null,[Validators.required])
      })
  }

  onSubmit() {
    this.auth.register(this.Regform.value)
    
    console.log('Success');
    this.router.navigate(['/login'])
    
    error => {
      console.warn(error);
    }
  }
}