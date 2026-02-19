import { Component, inject } from '@angular/core';

import { animate, query, stagger, style, transition, trigger } from "@angular/animations";
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateX(-50px)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class BannerComponent {

  analyticsService = inject(AnalyticsService);

  downloadResume() {
    this.analyticsService.sendAnalyticEvent("click_Download_Resume", "banner", "download");

    // Open a new window with the CV
    let url = window.location.href;
    window.open(url + "assets/cv/NishaDhere6Year.pdf", "_blank");
  }
  
 openGmail() {
    const email = "nishadhere12@gmail.com";
    const subject = "Request to connect";
    const body = "Hi, I would like to connect with you.";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  }
}
