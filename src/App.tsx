import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Breath,
  Home,
  Menu,
  Results,
} from 'components';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="breath" element={<Breath />} />
        <Route path="results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
