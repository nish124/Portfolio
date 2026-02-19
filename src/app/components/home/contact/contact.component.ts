import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

  openGmail() {
    const email = "nishadhere12@gmail.com";
    const subject = "Request to connect";
    const body = "Hi, I would like to connect with you.";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  }

}
