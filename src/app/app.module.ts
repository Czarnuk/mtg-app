import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MatchResultComponent } from './match-result/match-result.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    MatchResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    ButtonsModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
// eslint-disable-next-line import/prefer-default-export
export class AppModule { }
