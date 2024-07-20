import React from 'react';
import useAuth from '../hooks/useAuth';

const SomeProtectedPage = () => {
  useAuth(); // Vérifie l'authentification

  return (
    <div>
      <h1>Some Protected Page</h1>
    </div>
  );
};

export default SomeProtectedPage;
