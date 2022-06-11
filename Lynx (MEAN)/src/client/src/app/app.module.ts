import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '../../node_modules/@angular/common/http';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './services/auth.interceptor';
// import { ValidateService } from './services/validate.service';
// import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
