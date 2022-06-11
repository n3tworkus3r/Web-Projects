import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) {}

  // Registers new users.
  registerUser(user) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('http://localhost:8080/users/register', user, { headers: headers })
      .pipe(map(res => res));
  }

  // Authenticates users at login
  authenticateUser(user) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('http://localhost:8080/users/authenticate', user, {
        headers: headers
      })
      .pipe(map(res => res));
  }

  // Gets a users profile information when authenticated
  getProfile() {
    const bearer = 'Bearer ' + localStorage.getItem('id_token');
    const headers = new HttpHeaders();
    headers.append('Authorization', bearer);
    headers.append('Content-Type', 'application/json');
    return this.http
      .get('http://localhost:8080/users/profile', { headers: headers })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  // Sets auth data at login
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('email', user.email);
    localStorage.setItem('username', user.username);
    localStorage.setItem('_id', user._id);
    this.authToken = token;
    this.user = user;
  }

  // Gets an auth token
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // Checks if a user is authed
  loggedIn() {
    const token = localStorage.getItem('id_token');
    const helper = new JwtHelperService();
    let checkRes;

    // checks for a valid token. this basically runs if token is null
    if (!token) {
      return false;
      // if there is a a value, check it
    } else {
      // handles errors. Ex, a fake token is set in localStorage
      try {
        const decodedToken = helper.decodeToken(token);
        const expirationDate = helper.getTokenExpirationDate(token);
        checkRes = helper.isTokenExpired(token);
      } catch (err) {
        return false;
      }
      // if isExpired returns false, then the token is valid
      if (!checkRes) {
        return true;
      }
      return false;
    }
  }

  // Removes auth token, clears localStorage
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
