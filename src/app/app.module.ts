import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Service1Component } from './service1/service1.component';
import { ContactComponent } from './contact/contact.component';
import { WebsitedesignComponent } from './websitedesign/websitedesign.component';
import { WebdevelopmentComponent } from './webdevelopment/webdevelopment.component';
import { LoginComponent } from './login/login.component';
import { SharedserviceService } from './sharedservices/sharedservice.service';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    Service1Component,
    ContactComponent,
    WebsitedesignComponent,
    WebdevelopmentComponent,
    LoginComponent,
    SharedComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    AppRoutingModule
  ],
  providers: [SharedserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
