import React from 'react';
import ReactDom from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDom.render(
    <SpeechProvider appId="ea4d6dd8-c581-4bb8-9da0-f2a57d2ba4d6" language="en-US">
      <Provider>
      <App />
      </Provider>
    </SpeechProvider>, 
 document.getElementById('root')
 );