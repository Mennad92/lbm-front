import React, { useState } from 'react';
import Login from './Login';

const App = () => {
  const [token, setToken] = useState('');

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div>
      <h1>Bienvenue!</h1>
      <p>Vous êtes connecté.</p>
    </div>
  );
};

export default App;