import React from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');  // Redirige vers la page de connexion après la déconnexion
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;