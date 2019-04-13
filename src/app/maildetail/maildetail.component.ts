import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MailService } from '../mail.service'
import { Mail } from '../mail';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './maildetail.component.html',
  styleUrls: ['./maildetail.component.css']
})
export class MaildetailComponent implements OnInit, OnDestroy {
  mail: Mail = new Mail("-1", 'No Product');

  id: number;
  private sub: any;
  recipientsStr : string;
  constructor(private _router: Router, private mailService: MailService, 
    private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // get route parameter 
      // dispatch action to load the details here.
      this.mailService.getMailById(this.id).subscribe((mail: Mail) => {
        this.mail = mail;        
        this.recipientsStr=mail.recipients.join(",");
        //console.log(this.mail);
      })
    });

  }
  onBack(): void {
    this._router.navigate(['/Mailsearch']);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
