import React from 'react';
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
import { Contact } from '../src/types/Contact';


interface Props {
  contacts: Contact[];
}

const ContactList: React.FC<Props> = ({ contacts }) => {
  return (
    <div>
      <h2>Contact List</h2>
      {contacts.map(contact => (
        <div key={contact._id} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
          <h3>Contact #{contact.contactName}</h3>
          <p>Status: {contact.contactStatus}</p>
          <p>Satellite: {contact.contactSatellite}</p>
          <p>Begin: {new Date(contact.contactBeginTimestamp * 1000).toLocaleString()}</p>
          <p>End: {new Date(contact.contactEndTimestamp * 1000).toLocaleString()}</p>

          {contact.alerts.length > 0 ? (
            <>
              <h4>Alerts:</h4>
              <ul>
                {contact.alerts.map(alert => (
                  <li key={alert.errorId}>
                    <strong>{alert.errorSeverity.toUpperCase()}</strong>: {alert.errorMessage}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>No alerts</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
