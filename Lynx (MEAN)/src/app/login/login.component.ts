import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
//import { read } from "fs";
import { Authservice } from "../services/auth/auth.service";
import {Router} from '@angular/router'
//import { AppRoutingModule } from "../app-routing.module";

@Component({
    selector: 'login-page',
    templateUrl:'./login.component.html',
    styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

form: FormGroup

constructor(private auth: Authservice, private router: Router) {}

ngOnInit() {
    this.form = new FormGroup( {
        email: new FormControl(null,[Validators.required]),
        password: new FormControl(null,[Validators.required])

    })
}

onSubmit() {
    this.auth.login(this.form.value).subscribe(
    () => {
        console.log('Success');
        this.router.navigate(['/library'])
    },
    error => {
        console.warn(error);
    })
}

toRegister() {
    this.router.navigate(['/register'])
}
}