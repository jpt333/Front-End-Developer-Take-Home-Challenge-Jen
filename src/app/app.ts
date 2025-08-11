import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AstroComponentsModule, RuxGlobalStatusBar } from '@astrouxds/angular';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {}
