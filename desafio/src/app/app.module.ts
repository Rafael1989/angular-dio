import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserModule } from './users/user.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    RouterModule.forRoot([
      {
        path: '', 
        redirectTo: 'courses',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
