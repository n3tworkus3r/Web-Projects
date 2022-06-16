import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from  '@angular/common';
import { AudioContextModule } from 'angular-audio-context';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AngMusicPlayerModule } from  'ang-music-player';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { LoginComponent } from './login/login.component';
import { LibraryComponent } from './library/library.component';
import { NewsComponent } from './news/news.component';
import { NavComponent } from './nav/nav.component';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BackgroundComponent,
    LibraryComponent,
    NewsComponent,
    NavComponent,
    PlayerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AudioContextModule.forRoot('balanced'),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
