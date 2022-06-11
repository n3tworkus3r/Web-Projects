import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: String;
  email: String;
  password: String;
  password2: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {}

  onSignupSubmit() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password,
      password2: this.password2
    };

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      console.log(this.flashMessage);
      this.flashMessage.show('Please fill in all fields', {
        cssClass: 'alert-danger',
        timeout: 3000
      });
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please use a valid email', {
        cssClass: 'alert-danger',
        timeout: 3000
      });
      return false;
    }

    // Ensures passwords match
    if (!this.validateService.checkPasswords(user.password, user.password2)) {
      this.flashMessage.show('Passwords must match', {
        cssClass: 'alert-danger',
        timeout: 3000
      });
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe((data: valResult) => {
      console.log(data);
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now registered and can now login', {
          cssClass: 'alert-success',
          timeout: 3000
        });
        this.router.navigate(['/']);
      } else {
        this.flashMessage.show('Something went wrong', {
          cssClass: 'alert-danger',
          timeout: 3000
        });
        this.router.navigate(['/register']);
      }
    });
  }
}
