import React, { useEffect } from 'react';
// import logo from '../logo.svg';
import { http } from '../api/axios';
import List from '../components/List';
import ListRow from '../components/ListRow';
import { Text } from '../components/Text';

function Home() {
  const getUser = async () => {
    const result = await http.get('/api/user');
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
      <List>
        <ListRow contents={<Text size="t1" text="test"></Text>} right={<Text size="t1" text="test"></Text>}></ListRow>
      </List>
    </div>
  );
}

export default Home;
