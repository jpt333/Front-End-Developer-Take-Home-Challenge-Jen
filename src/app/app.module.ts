import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AstroComponentsModule } from '@astrouxds/angular';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app';
import { HomeComponent } from './home/home';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AstroComponentsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent, HomeComponent],
})
export class AppModule {}
