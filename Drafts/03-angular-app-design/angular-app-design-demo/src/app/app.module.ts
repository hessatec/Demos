import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantIDFilterComponent } from './tenant-idfilter/tenant-idfilter.component';
import { AttendeesDisplayComponent } from './attendees-display/attendees-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TenantIDFilterComponent,
    AttendeesDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
