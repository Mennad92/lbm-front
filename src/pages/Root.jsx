import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import { CartProvider } from '../contexts/CartContext'; 

export function Root() {
  return (
    <CartProvider>
    <div>
      <Header />
      <main className='m-5'>
        <Outlet />
      </main>
      <Footer />
    </div>
    </CartProvider>
  );
}