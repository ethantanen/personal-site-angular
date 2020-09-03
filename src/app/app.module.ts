import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CircleComponent } from './circle/circle.component';
import { CirclesComponent } from './circles/circles.component';
import { EmailMeComponent } from './email-me/email-me.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { NavComponent } from './nav/nav.component';
import { ResumeComponent } from './resume/resume.component';

import { EmailService } from './email.service';
import { MessageService } from './message.service';
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    CircleComponent,
    CirclesComponent,
    EmailMeComponent,
    HomeComponent,
    MessageComponent,
    NavComponent,
    ResumeComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [EmailService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
