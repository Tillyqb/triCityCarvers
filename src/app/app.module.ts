import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ShowComponent } from './show/show.component';
import { SeminarsComponent } from './seminars/seminars.component';
import { OtherEventsComponent } from './other-events/other-events.component';
import { MWCAComponent } from './mwca/mwca.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JoinComponent,
    NewsletterComponent,
    ShowComponent,
    SeminarsComponent,
    OtherEventsComponent,
    MWCAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
