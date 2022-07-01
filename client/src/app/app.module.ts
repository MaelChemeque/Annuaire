import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { FindContactsComponent } from './find-contacts/find-contacts.component';
import { appRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    FindContactsComponent,
    HeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    appRoutingModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
