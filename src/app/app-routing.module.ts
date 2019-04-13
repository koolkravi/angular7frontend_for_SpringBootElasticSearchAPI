import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailListComponent } from "./mail-list/mail-list.component";
import { MaildetailComponent } from "./maildetail/maildetail.component";

const routes: Routes = [
  { path: 'mails', component: MailListComponent },
  { path: 'mail/:id', component: MaildetailComponent },
  { path: '',  redirectTo: '/mails', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
