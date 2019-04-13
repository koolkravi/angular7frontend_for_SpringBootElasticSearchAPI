import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service'
import { Mail } from '../mail';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'sender', 'subject', 'text', 'date', 'isActive', 'actions'];
  mails: Mail[] = [];
  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.search();
  }

  // pagnination 
  page = 1;
  pageSize = 8;
  collectionSize = 0;
  previousPage: any;

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.search();
    }
  }

  searchname: string = '';
  search() {
    this.mailService.getMails(this.page, this.pageSize, this.searchname)
      .subscribe((data: HttpResponse<any>) => {
        this.mails = data.body;
        this.collectionSize=+data.headers.get("totalhits"); // + conver string to number
        //console.log(data.body.length);
        console.log(this.collectionSize);

      });

  }

  get loadPage1(): Mail[] {
    return this.mails
      .map((mail, i) => ({ id: i + 1, ...mail }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}