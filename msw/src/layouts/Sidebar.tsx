import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Conditional Rendering</Link>
        </li>
        <li>
          <Link to="/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/props">Props</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
