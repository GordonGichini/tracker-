import React from 'react';
import ReactDom from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDom.render(
    <SpeechProvider appId="7c4aee08-1073-4a32-b862-ebe1850e0732" language="en-US">
<Provider>
    <App>
    </App >
    </Provider>
    </SpeechProvider>, 
 document.getElementById('root')
 );