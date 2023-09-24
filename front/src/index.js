import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/custom.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SnackbarProvider maxSnack={1} autoHideDuration={2000}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
);

serviceWorkerRegistration.register();
