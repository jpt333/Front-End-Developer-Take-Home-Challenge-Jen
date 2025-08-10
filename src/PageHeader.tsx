import React from 'react';
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
import {
  RuxGlobalStatusBar,
  RuxMonitoringIcon,
  RuxClock,
  RuxIcon
} from "@astrouxds/react";

function PageHeader() {

  return (
      //Header of Dashboard
      <div className="App" style={{display: 'flex', justifyContent: 'center', position: 'absolute', top: '0', left: '0'}}>
      <RuxGlobalStatusBar
        appDomain="Dashboard"
        appState="State"
        appVersion="1.0"
        username="Jennifer P."
      >
        <RuxIcon slot="left-side" icon="apps"></RuxIcon>
        <RuxClock></RuxClock>
      </RuxGlobalStatusBar>
    </div>
  );
}

export default PageHeader;
