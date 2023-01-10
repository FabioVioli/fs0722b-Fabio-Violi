import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';           //1) aggiungiamo FormsModule ( così angular sa che deve usarli )

import { AppComponent } from './app.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule                                   //2) e lo dichiariamo. Ora angular sa che si usano i forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
