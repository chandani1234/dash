import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Service1Component } from './service1/service1.component';
import { Sharedservice1Service } from './sharedservices/sharedservice1.service';
import { WebdevelopmentComponent } from './webdevelopment/webdevelopment.component';
import { WebsitedesignComponent } from './websitedesign/websitedesign.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'login',component:LoginComponent},
   {path:'home',component:HomeComponent},
   {path:'about',component:AboutComponent},
   
   {path:'contact',component:ContactComponent},
   {path:'service1',component:Service1Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
