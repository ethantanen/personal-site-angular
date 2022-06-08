import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { EmailMeComponent } from './email-me/email-me.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: 'about-me', component: AboutMeComponent, children: [
      { path: '**', redirectTo: '/about-me', }
    ]
  },
  {
    path: 'email-me', component: EmailMeComponent, children: [
      { path: '**', redirectTo: '/email-me', }
    ]
  },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '**', redirectTo: '/home', }
    ]
  },
  {
    path: 'resume', component: ResumeComponent, children: [
      { path: '**', redirectTo: '/resume', }
    ]
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
