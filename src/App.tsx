import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import React from 'react';
import { RuxButton, RuxProgress } from '@astrouxds/react';
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
import PageHeader from './PageHeader';
import ContactList from './ContactList';
import myData from '../data.json';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Dashboard Header */}
      <PageHeader></PageHeader>
      
      {/*List of Contacts  */}
      <ContactList contacts={myData}/>
    </div>

  )

}

export default App
