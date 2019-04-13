import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from './mail';
import { tap, map, filter } from 'rxjs/operators';
const API_URL = '';

@Injectable({
  providedIn: 'root'
})


export class MailService {
  //apiURL: string = 'http://localhost:8083'; 
  //rest service url is configured in proxy.conf.json
  apiURL: string = '/api';
  from: number = 1;
  defaultSize: number = 8;
  constructor(private httpClient: HttpClient) { }

  public createMail(mail: Mail) { }
  public updateMail(mail: Mail) { }
  public deleteMail(id: number) { }

  public getMailById(id: number) {
    return this.httpClient.get(`${this.apiURL + 'mails'}/${id}`)
  }

  //
  public getMails(page: number, pagesize: number, searchText?: string) {
    //This will return an Observable<Mail[]> that we need to subscribe to, in  components, 
    //in order to fetch the mails data from the server.
    console.log("searchText value " + searchText);

    /* if (searchText) {
       return this.httpClient.get<Mail[]>(`${this.apiURL}/mails/search/` + searchText + "/" + page + "/" + pagesize,
         { observe: 'response' }).pipe(tap(res => {
           //console.log(res.body);
           //console.log(res.headers.get("totalhits"));          
         }));
     }*/

    if (searchText) {
      return this.httpClient.get<Mail[]>(`${this.apiURL}/mails/search/` + searchText + "/" + page + "/" + pagesize,
        { observe: 'response' });
    }
    return this.httpClient.get<Mail[]>(`${this.apiURL}/mails/${this.from}/${this.defaultSize}`,
      { observe: 'response' });



    /*
    return this.httpClient.get<Mail[]>(`${this.apiURL}/customers?page=1`,
      { observe: 'response' }).pipe(tap(res => {
        this.retrieve_pagination_links(res);
      }));*/

  }
  parse_link_header(header) {
    if (header.length == 0) {
      return;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach(p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    });
    return links;
  }

  public retrieve_pagination_links(response) {
    const linkHeader = this.parse_link_header(response.headers.get('Link'));
    this.firstPage = linkHeader["first"];
    this.lastPage = linkHeader["last"];
    this.prevPage = linkHeader["prev"];
    this.nextPage = linkHeader["next"];
  }

  public firstPage: string = "";
  public prevPage: string = "";
  public nextPage: string = "";
  public lastPage: string = "";

}
