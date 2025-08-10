// Alert Interface
export interface Alert {
  errorId: string;
  errorSeverity: string;
  errorCategory: string;
  errorMessage: string;
  longMessage: string;
  errorTime: number;
  selected: boolean;
  new: boolean;
  expanded: boolean;
}

// Contact Interface
export interface Contact {
  _id: string;
  contactId: string;
  contactStatus: string;
  contactName: number;
  contactGround: string;
  contactSatellite: string;
  contactEquipment: string;
  contactState: string;
  contactStep: string;
  contactDetail: string;
  contactBeginTimestamp: number;
  contactEndTimestamp: number;
  contactLatitude: number;
  contactLongitude: number;
  contactAzimuth: number;
  contactElevation: number;
  contactResolution: string;
  contactResolutionStatus: string;
  alerts: Alert[];
}
