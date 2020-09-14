import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor(public router: Router) {
    /**
    * Subscribe to all router events and manually send
    * page_view events to Google Analytics on NavigationEnd
    */
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects,
          send_to: 'UA-150818848-1'
        })
      }
    });
  }
}
