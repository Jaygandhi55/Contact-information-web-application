import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactInformationComponent } from './contact-informtion-component/contact-information.component';

import { AddContactComponent } from './contact-informtion-component/add-contact-component/add-contact.component';
import { EditContactComponent } from './contact-informtion-component/edit-contact-component/edit-contact.component';
import { DeleteContactComponent } from './contact-informtion-component/delete-contact-component/delete-contact.component';
const appRoutes: Routes = [
  { path: 'addcontact', component:  AddContactComponent},
  { path: 'editcontact', component:  EditContactComponent},
  { path: 'deletecontact', component:  DeleteContactComponent},
  { path: 'home', component:  ContactInformationComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ContactInformationComponent, AddContactComponent, EditContactComponent, DeleteContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
