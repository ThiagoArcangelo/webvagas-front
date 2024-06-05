import './global.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { InfoVagasProvider } from './context/Context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InfoVagasProvider>
      <App />
    </InfoVagasProvider>
  </React.StrictMode>,
)
