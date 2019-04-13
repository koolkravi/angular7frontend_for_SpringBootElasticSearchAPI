import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MaildetailComponent } from './maildetail/maildetail.component';
import { AppRoutingModule } from './app-routing.module';
import { MailListComponent } from './mail-list/mail-list.component';

@NgModule({
  declarations: [
    AppComponent,MaildetailComponent, MailListComponent
  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule, FormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
