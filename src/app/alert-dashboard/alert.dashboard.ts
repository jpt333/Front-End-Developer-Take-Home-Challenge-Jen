import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-dashboard',
  standalone: false,
  templateUrl: './alert.dashboard.html',
  styleUrl: './alert.dashboard.css',
})
export class AlertDashboardComponent {
  contacts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data.json').subscribe(
      (data) => {
        this.contacts = data;
      },
      (error) => {
        console.error('Error loading data.json', error);
      }
    );
  }

  isDetailsOpen = false;

  showDetails() {
    this.isDetailsOpen = true;
  }
}
