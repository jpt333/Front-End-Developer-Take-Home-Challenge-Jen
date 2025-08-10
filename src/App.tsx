import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import React from 'react';
import { RuxButton, RuxProgress } from '@astrouxds/react';
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
import PageHeader from './PageHeader';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div><PageHeader></PageHeader></div>

    // <div>
    //   <RuxButton>POTATOOOOO!!!</RuxButton>
    // </div>
  )

}

export default App
