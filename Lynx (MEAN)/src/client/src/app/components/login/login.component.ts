import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '../../../../node_modules/@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

class valResult {
  success: boolean;
  msg: string;
  token: string;
  user: object;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {}

  onLoginSubmit() {
    const user = {
      email: this.email,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe((data: valResult) => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 3000
        });
        this.router.navigate(['profile']);
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 3000
        });
        this.router.navigate(['login']);
      }
    });
  }
}
