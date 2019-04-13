import { Component } from '@angular/core';
import { MailService } from './mail.service'
import { Mail } from './mail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Mails';
  constructor(private mailService: MailService) { }

  ngOnInit() {
    /*this.mailService.getMails().subscribe((res) => {
      this.mailService.getMails(this.mailService.nextPage).subscribe((res) => {
        console.log("called");
        console.log(res);
        this.mails = res;
      });
    });*/
  }

}