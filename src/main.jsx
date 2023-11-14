import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DarkModeContextProvider } from "./context/darkmModeContext.jsx";
import { AuthContextProvider } from './context/authContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>    
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
    </AuthContextProvider>
</React.StrictMode>
)
