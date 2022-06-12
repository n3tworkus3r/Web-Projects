import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'library', component: LibraryComponent},
  {path:'news', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
