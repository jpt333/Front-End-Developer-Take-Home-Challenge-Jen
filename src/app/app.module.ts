import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AstroComponentsModule } from '@astrouxds/angular';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app';
import { HomeComponent } from './home/home';
import { AlertDashboardComponent } from './alert-dashboard/alert.dashboard';

@NgModule({
  declarations: [AppComponent, HomeComponent, AlertDashboardComponent],
  imports: [BrowserModule, AstroComponentsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent, HomeComponent, AlertDashboardComponent],
})
export class AppModule {}
