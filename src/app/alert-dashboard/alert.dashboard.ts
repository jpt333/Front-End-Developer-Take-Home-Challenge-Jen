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
        this.buildSortedAlerts();
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

  sortedAlerts: any[] = [];

  //Create sorted alerts for sorting purposes
  buildSortedAlerts() {
    this.sortedAlerts = [];

    for (const contact of this.contacts) {
      if (contact.alerts && contact.alerts.length > 0) {
        for (const alert of contact.alerts) {
          this.sortedAlerts.push({
            ...alert,
            contactName: contact.contactName,
            contactBeginTimestamp: contact.contactBeginTimestamp,
            contactEndTimestamp: contact.contactEndTimestamp,
            contactSatellite: contact.contactSatellite,
            contactDetail: contact.contactDetail,
            contact: contact,
          });
        }
      }
    }
  }

  sortedColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  // Function to sort the data in the alerts dashboard
  sortData(column: string) {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      // Default direction
      this.sortDirection = 'asc';
    }

    // Serverity Order
    const severityOrder = ['critical', 'serious', 'warning', 'caution']; //Ask if this is the right ranking in severity order?

    //Comparing the values of the alerts to sort them in the rux-table
    this.sortedAlerts.sort((a: any, b: any) => {
      let firstValue = a[column];
      let secondValue = b[column];

      // Logic for the errorSeverity
      if (column === 'errorSeverity') {
        const indexFirst = severityOrder.indexOf(firstValue);
        const indexSecond = severityOrder.indexOf(secondValue);
        return this.sortDirection === 'asc'
          ? indexFirst - indexSecond
          : indexSecond - indexFirst;
      }

      if (firstValue < secondValue)
        return this.sortDirection === 'asc' ? -1 : 1;
      if (firstValue > secondValue)
        return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
}

interface Alert {
  errorId: string;
  errorSeverity: string;
  errorCategory: string;
  errorMessage: string;
  errorTime: number;
  longMessage: string;
  selected: boolean;
  new: boolean;
  expanded: boolean;
}
