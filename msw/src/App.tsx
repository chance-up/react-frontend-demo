import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import JSX from './pages/JSX';
import Props from './pages/Props';
import Home from './pages/Home';

import Sidebar from './layouts/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jsx" element={<JSX />} />
          <Route path="/props" element={<Props />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
