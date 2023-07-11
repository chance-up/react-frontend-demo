import React, { useEffect } from 'react';
// import logo from '../logo.svg';
import { http } from '../api/axios';

function Home() {
  const getUser = async () => {
    const result = await http.get('/api/user');
    console.log(result);
    return result;
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  );
}

export default Home;
