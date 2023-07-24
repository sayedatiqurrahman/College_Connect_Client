import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';

import router from './Route/router.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
