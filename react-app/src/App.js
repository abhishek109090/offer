import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Pdf from './Pdf';
import LoginPage from './Login';
import Dashboard from './Dashboard';
import MobileWarning from './Mob';
import Edit from './Edit';
import Editoffer from './Editoffer';
import './App.css';

const Offer = lazy(() => import('./Offer'));
const Joining = lazy(() => import('./Joining'));

function preloadComponent(component) {
  return component().then(module => module.default);
}

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /mobile|android|iphone|ipad|tablet/.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  useEffect(() => {
    // Preload the components
    preloadComponent(() => import('./Offer'));
    preloadComponent(() => import('./Joining'));
  }, []);

  if (isMobile) {
    return <MobileWarning />;
  }

  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading, please wait...</div>}>
          <Routes>
            <Route path='/pdf' element={<Pdf />} />
            <Route path='/offer' element={<Offer />} />
            <Route path='/LoginPage' element={<LoginPage />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/Joining' element={<Joining />} />
            <Route path='/Edit' element={<Edit />} />
            <Route path='/Editoffer' element={<Editoffer />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
