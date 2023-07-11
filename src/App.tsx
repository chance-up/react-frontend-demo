import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import JSX from './views/JSX';
import Props from './views/Props';
import Home from './views/Home';

import Sidebar from './layouts/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jsx" element={<JSX />} />
        <Route path="/props" element={<Props />} />
      </Routes>
    </div>
  );
}

export default App;
