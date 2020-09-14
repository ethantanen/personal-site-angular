import { Component } from '@angular/core';
import { GoogleAnalyticsService } from './google-analytics.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-website';

  constructor(googleAnalytics: GoogleAnalyticsService) { }

}
