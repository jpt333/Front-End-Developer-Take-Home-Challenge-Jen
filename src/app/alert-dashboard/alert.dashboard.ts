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
  selectedContact: any = null;

  showDetails(contact: any) {
    this.selectedContact = contact;
    this.isDetailsOpen = true;
  }

  selectedContactt: any = null;

  acknowledgedAlerts = new Set<string>();

  isAcknowledged(alert: any, contact: any) {
    this.acknowledgedAlerts.add(
      alert.errorId + alert.longMessage + contact.contactName
    );
  }

  isContactAcknowledged(alert: any, contact: any): boolean {
    return this.acknowledgedAlerts.has(
      alert.errorId + alert.longMessage + contact.contactName
    );
  }
}
