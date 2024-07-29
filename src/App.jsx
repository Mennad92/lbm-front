import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './contexts/AuthContext'; 
import { CartProvider } from './contexts/CartContext'; 

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Header />
          <AppRoutes />
          <Footer />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
