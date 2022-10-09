import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { User } from "../../interfaces/interfaces";
//import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class Authservice {
    
    constructor(private http : HttpClient) {    }
    register(user:User) {
        return  this.http.post('/register',user)
    }
    
    login(user:User) {
       return  this.http.post('/login',user)
    }
}